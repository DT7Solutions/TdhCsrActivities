from django.shortcuts import render

# Create your views here.
def Home(request):
    return render(request, 'uifiles/home.html')

def Csractivities(request):
    return render(request, 'uifiles/csrapplication.html')