# pages/urls.py
from django.urls import path, re_path
from .views import HomePageView, SettingsPageView, LoginPageView, nextQuestion
urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('settings/', SettingsPageView.as_view(), name='settings'),
    re_path(r'^question/', nextQuestion, name='submit'),
    path('login/', LoginPageView.as_view(), name='login'),

]
