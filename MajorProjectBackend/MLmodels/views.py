import subprocess
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import time
from django.core.files.uploadedfile import TemporaryUploadedFile
import os
from django.core.files.storage import FileSystemStorage
import re
import joblib

import pandas as pd


@csrf_exempt
def predict(request):
    if request.method == "POST":
        # Accessing the uploaded APK file
        apk_file = request.FILES.get("apk_file")

        fs = FileSystemStorage()
        saved_path = fs.save(apk_file.name, apk_file)

        try:
            # Accessing other form fields
            selected_algorithm = request.POST.get("selected_algorithm")
            selected_dataset = request.POST.get("selected_dataset")
            pca_selection = request.POST.get("pca_selection")

            # Perform your processing or predictions here
            # For example, you can print or return a JSON response
            print(f"APK File: {saved_path}")
            print(f"Selected Algorithm: {selected_algorithm}")
            print(f"Selected Dataset: {selected_dataset}")
            print(f"PCA Selection: {pca_selection}")

            print("step 1 done")
            androguard_commands = [
                "a, d, dx = AnalyzeAPK('" + saved_path + "')\n'",
                "a.show()",
            ]

            output, error = run_androguard_commands(androguard_commands)
            print("step 2 done")

            model_attributes = get_model_attributes()

            permissions, apis, intents = extract_permissions_apis_intents(output)
            all_features = permissions + apis + intents
            print("step 3 done")

            attribute_data_frame = get_attribute_data_frame(
                permissions, model_attributes
            )
            result = evaluate_user_application(attribute_data_frame)

            return JsonResponse({"message": f"{result}"})

        finally:
            apk_directory = os.path.join(
                os.path.dirname(os.path.abspath(__file__)), ".."
            )

            # Delete the temporary file if it exists
            if os.path.exists(saved_path):
                os.remove(saved_path)

            # Delete Androguard files if they exist
            androguard_files = [
                "androguard.db",
                "androguard.db-shm",
                "androguard.db-wal",
                "androguard.log",
            ]
            for file_name in androguard_files:
                file_path = os.path.join(apk_directory, file_name)
                if os.path.exists(file_path):
                    os.remove(file_path)

    return JsonResponse({"message": "Invalid request method"})


def dataset(request):
    data = {
        "name": "Kovid",
        "project": "Android Malware detection using machine learning",
        "Mentor": "Jamuna madam",
        "Team mates": ["Omkar", "Supriya", "Sai Kiran"],
    }
    return JsonResponse(data)


# File processing methods, Not APIs


# AndroGuard decompilation method
def run_androguard_commands(commands):
    try:
        # Concatenate commands into a single string
        command_string = "\n".join(commands)

        # Run the command in a subprocess, passing it to the shell
        process = subprocess.Popen(
            ["androguard", "analyze"],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        )
        output, error = process.communicate(input=command_string)

        return output, error
    except Exception as e:
        return None, str(e)


# To create lists of permissions, APIs and intents used in an android app
def extract_permissions_apis_intents(input_text):
    permissions = []
    apis = []
    intents = []

    # Extract DECLARED PERMISSIONS
    declared_permissions_start = input_text.find("DECLARED PERMISSIONS:")
    declared_permissions_end = input_text.find("REQUESTED PERMISSIONS:")
    declared_permissions = input_text[
        declared_permissions_start:declared_permissions_end
    ].strip()
    permissions.extend(
        re.findall(r"[\w.]+", declared_permissions.split(":", 1)[1])
    )  # Filter out characters other than underscore, dot, and English alphabets
    permissions = [
        permission.split(".")[-1] for permission in permissions
    ]  # Extract only the last word after the last dot

    # Extract REQUESTED PERMISSIONS
    requested_permissions_start = input_text.find("REQUESTED PERMISSIONS:")
    requested_permissions_end = input_text.find("MAIN ACTIVITY:")
    requested_permissions = input_text[
        requested_permissions_start:requested_permissions_end
    ].strip()
    permissions.extend(
        re.findall(r"[\w.]+", requested_permissions.split(":", 1)[1])
    )  # Filter out characters other than underscore, dot, and English alphabets
    permissions = [
        permission.split(".")[-1] for permission in permissions
    ]  # Extract only the last word after the last dot

    # Extract words containing '.intent.' and '.api.'
    all_words = input_text.split()
    intent_words = [
        re.sub(r"[^\w.]+", "", word) for word in all_words if ".intent." in word
    ]
    api_words = [re.sub(r"[^\w.]+", "", word) for word in all_words if ".api." in word]

    intents.extend(intent_words)
    apis.extend(api_words)

    return permissions, apis, intents


# To get the model attributes
def get_model_attributes():
    model_attributes = []

    current_dir = os.path.dirname(os.path.abspath(__file__))
    with open(current_dir + "\permissions-list.txt", "r") as file:
        model_attributes = list(file.read().split(","))

    return model_attributes


# To get the data frame to evaluate the model
def get_attribute_data_frame(permissions, model_attributes):
    df = []
    for i in range(len(permissions)):
        for j in range(i + 1, len(permissions)):
            # Check if the combination exists in permissions
            a = permissions[i] + "-" + permissions[j]
            b = permissions[j] + "-" + permissions[i]
            df.append(a.strip())
            df.append(b.strip())

    X_new = pd.DataFrame(
        [
            dict(
                zip(
                    model_attributes,
                    [1 if feature in df else 0 for feature in model_attributes],
                )
            )
        ]
    )

    return X_new


# To return the result of the model evaluation based on the dataframe passed on to it
def evaluate_user_application(attribute_data_frame):
    model_filename = "C:/Users/Kovid Krishnan/OneDrive/Desktop/Major Project Frontend/MajorProjectBackend/MLmodels/Twomer-Random-Forest.joblib"
    loaded_model = joblib.load(model_filename)

    class_label = loaded_model.predict(attribute_data_frame)[0]

    return "Benign" if class_label == 0 else "Malign"
