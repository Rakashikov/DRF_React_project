from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response
from blog.models import Post
from .serializers import PostSerializer
from .permissions import PostUserWritePermission
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly


class PostList(viewsets.ModelViewSet):
    permission_classes = [PostUserWritePermission]
    serializer_class = PostSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        print(item)
        return generics.get_object_or_404(Post, slug=item)

    def get_queryset(self):
        return Post.objects.all()

# class PostList(viewsets.ViewSet):
#     permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
#     queryset = Post.post_objects.all()
#
#     def list(self, request):
#         serializer_class = PostSerializer(self.queryset, many=True)
#         return Response(serializer_class.data)
#
#     def retrieve(self, request, pk=None):
#         post = generics.get_object_or_404(self.queryset, pk=pk)
#         serializer_class = PostSerializer(post)
#         return Response(serializer_class.data)


# class PostList(generics.ListCreateAPIView):
#     permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
#     queryset = Post.post_objects.all()
#     serializer_class = PostSerializer
#
#
# class PostDetail(generics.RetrieveUpdateDestroyAPIView):
#     permission_classes = [PostUserWritePermission]
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
