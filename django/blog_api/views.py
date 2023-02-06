from django.shortcuts import get_object_or_404
from rest_framework import filters
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from blog.models import Post
from .serializers import PostSerializer


class PostList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView):
    serializer_class = PostSerializer

    def get_object(self):
        slug = self.request.query_params.get('slug', None)
        return get_object_or_404(self.get_queryset(), slug=slug)

    def get_queryset(self):
        slug = self.request.query_params.get('slug', None)
        print(slug)
        return Post.objects.filter(slug=slug)


class PostSearch(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']

    def get_queryset(self):
        return Post.objects.all()
