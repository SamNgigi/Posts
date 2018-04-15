from django.conf.urls import include, url
from rest_framework import routers

from .views import PostViewSet

router = routers.DefaultRouter()
router.register('posts', PostViewSet)

urlpatterns = [
    url('^', include(router.urls)),
]
