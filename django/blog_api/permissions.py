from rest_framework.permissions import BasePermission, SAFE_METHODS


# This permission class will allow SAFE_METHODS (GET, HEAD, OPTIONS) for any
# request, and will allow POST, PUT, PATCH, DELETE only if the user making the
# request is the author of the post.
class PostUserWritePermission(BasePermission):
    message = 'Editing posts is restricted to the author only.'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        return obj.author == request.user
