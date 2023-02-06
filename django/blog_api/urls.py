from django.urls import path

from .views import PostList, PostDetail, PostSearch

app_name = 'blog_api'

urlpatterns = [
    path('posts/', PostDetail.as_view(), name='post-detail-create'),
    path('search/', PostSearch.as_view(), name='post-search'),
    path('', PostList.as_view(), name='post-list-create'),
]
