# Generated by Django 5.0.6 on 2024-07-01 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('profile_image', models.ImageField(blank=True, null=True, upload_to='profile_images')),
            ],
        ),
    ]
