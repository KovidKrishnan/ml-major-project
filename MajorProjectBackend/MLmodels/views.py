from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import time  # Import the time module

def dataset(request):
    data = {
        "name": "Kovid",
        "project": "Android Malware detection using machine learning",
        "Mentor": "Jamuna madam",
        "Team mates": ["Omkar", "Supriya", "Sai Kiran"]
    }
    return JsonResponse(data)

@csrf_exempt
def predict(request):
    if request.method == 'POST':
        # Accessing the uploaded APK file
        apk_file = request.FILES.get('apk_file')

        # Accessing other form fields
        selected_algorithm = request.POST.get('selected_algorithm')
        selected_dataset = request.POST.get('selected_dataset')
        pca_selection = request.POST.get('pca_selection')

        # Perform your processing or predictions here
        # For example, you can print or return a JSON response
        print(f'APK File: {apk_file}')
        print(f'Selected Algorithm: {selected_algorithm}')
        print(f'Selected Dataset: {selected_dataset}')
        print(f'PCA Selection: {pca_selection}')

        # Add a delay of 2 seconds (adjust as needed)
        time.sleep(2)
        result = 'Benign'
        if pca_selection == 'false': result = 'Malign'
        return JsonResponse({'message': f'{result}'})

    return JsonResponse({'message': 'Invalid request method'})
