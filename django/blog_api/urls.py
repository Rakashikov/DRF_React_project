from rest_framework.routers import DefaultRouter
from .views import PostList

app_name = 'blog_api'

router = DefaultRouter()
router.register(r'', PostList, basename='post')
urlpatterns = router.urls
