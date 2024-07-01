from django.db import models
from PIL import Image

class User(models.Model):
    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    profile_image = models.ImageField(upload_to='profile_images', null=True, blank=True)

    def __str__(self):
            return self.username

    def save(self):
        super().save()

        img = Image.open(self.image.path)

        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)
