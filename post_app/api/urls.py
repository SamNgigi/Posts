from django.conf.urls import include, url
from rest_framework import routers

from .views import PostViewSet, RegistrationAPI, LoginAPI

router = routers.DefaultRouter()
router.register('posts', PostViewSet)

urlpatterns = [
    url('^', include(router.urls)),
    url('^auth/register/$', RegistrationAPI.as_view()),
    url('^auth/login/$', LoginAPI.as_view()),
]
