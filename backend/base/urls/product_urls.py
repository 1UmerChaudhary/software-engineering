from django.urls import path
from base.views import product_views as views
# from rest_framework_simplejwt.views import(
#     TokenObtainPairView,
# )


urlpatterns=[
   
    path('',views.getProducts,name='products'),
    path('json/',views.getR,name='json-data'), 
    path('create/',views.createProduct,name='product-create'), 
    path('<str:pk>/',views.getProduct,name='product'), 
    
    path('delete/<str:pk>/',views.deleteProduct,name='product-delete'), 
]