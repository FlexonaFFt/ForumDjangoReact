from django.db import models
from users.models import User

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    post_date = models.DateTimeField('date posted')
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
            return self.title

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk': self.pk})
