from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import RedirectView, TemplateView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', obtain_jwt_token),
    path('accounts/', include('allauth.urls')),
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += (re_path('', RedirectView.as_view(url='/')),)

if settings.DEBUG:
    import debug_toolbar
    # デバッグツールバーを表示
    # 無効なURLがきたらリダイレクトする
    urlpatterns += (path('__debug__/', include(debug_toolbar.urls)),)
