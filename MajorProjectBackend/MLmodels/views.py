from django.http import JsonResponse

def dataset(request):
    data = {
        "name": "Kovid",
        "project": "Android Malware detection using machine learning",
        "Mentor": "Jamuna madam",
        "Team mates": ["Omkar", "Supriya", "Sai Kiran"]
    }
    return JsonResponse(data)

def predict(request):
    if(request == 'POST'):
        apk_file = request.post.get('apk_file')
        return JsonResponse({'message' : f'the class predicted is {apk_file.name} is benign'})
