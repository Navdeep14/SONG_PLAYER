from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r"tracks", views.TrackViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path('api/create/playlists', views.CreatePlayListViewSet.as_view(), name='create-play-list'),
    path('api/songs/', views.TrackList.as_view(), name='track-list'),
    path('api/playlists/', views.PlaylistList.as_view(), name='playlist-list'),
    path('api/playlists/<int:pk>/', views.PlaylistDetail.as_view(), name='playlist-detail'),
]
