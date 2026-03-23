#from django.shortcuts import render

from django.http import JsonResponse
from .models import Product, Category


def api_root(request):
    """Root API endpoint showing all available endpoints"""
    return JsonResponse({
        'message': 'Online Shop API',
        'endpoints': {
            'products': '/api/products/',
            'product_detail': '/api/products/<id>/',
            'categories': '/api/categories/',
            'category_detail': '/api/categories/<id>/',
            'category_products': '/api/categories/<id>/products/'
        }
    })


def products_list(request):
    """List all products"""
    products = Product.objects.all()
    data = []
    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category": p.category.name
        })
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    """Get a single product by ID"""
    try:
        p = Product.objects.get(id=id)
        data = {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category": p.category.name
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)


def categories_list(request):
    """List all categories"""
    categories = Category.objects.all()
    data = [{"id": c.id, "name": c.name} for c in categories]
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    """Get a single category by ID"""
    try:
        c = Category.objects.get(id=id)
        return JsonResponse({"id": c.id, "name": c.name})
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)


def category_products(request, id):
    """Get all products in a specific category"""
    products = Product.objects.filter(category_id=id)
    data = []
    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "price": p.price
        })
    return JsonResponse(data, safe=False)