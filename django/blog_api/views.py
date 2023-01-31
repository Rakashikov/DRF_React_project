from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer
from .permissions import PostUserWritePermission
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly


class PostList(generics.ListCreateAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Post.post_objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [PostUserWritePermission]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
