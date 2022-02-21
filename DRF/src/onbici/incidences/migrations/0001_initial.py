# Generated by Django 4.0.1 on 2022-02-21 11:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('station', '0004_alter_station_latitude_alter_station_longitude'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Incidences',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=200)),
                ('solution', models.CharField(max_length=200, null=True)),
                ('status', models.CharField(max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True, db_index=True)),
                ('station', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='incidences_station', to='station.station')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='incidences_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
