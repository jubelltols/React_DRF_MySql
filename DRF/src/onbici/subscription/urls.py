from django.urls import include, path, re_path
from django.urls import reverse
from rest_framework.routers import DefaultRouter

from .views import SubscriptionViewSet, UserSubscriptionView, SubscriptionCreateView, SubscriptionDeleteView, SubscriptionReactiveView

app_name = 'subscription'

router = DefaultRouter(trailing_slash=False)
router.register(r'subscription', SubscriptionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('subscription/user/',  UserSubscriptionView.as_view()),
    path('subscription/create/',  SubscriptionCreateView.as_view()),
    path('subscription/delete/',  SubscriptionDeleteView.as_view()),
    path('subscription/reactive/',  SubscriptionReactiveView.as_view()),
    path('subscription/update/',  SubscriptionReactiveView.as_view()),
]