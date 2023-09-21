from django.db import models


class Product(models.Model):
    image = models.ImageField(upload_to='upload/images', null=False, blank=False)
    name = models.CharField(max_length=150, null=False, blank=False)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=False, blank=False)
    description = models.TextField()
    categroy = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.name
