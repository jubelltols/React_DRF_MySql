# Generated by Django 4.0.1 on 2022-02-16 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '0006_alter_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.TextField(blank=True, default='https://avatars.dicebear.com/api/avataaars/QEFZ3451G.svg'),
        ),
    ]
