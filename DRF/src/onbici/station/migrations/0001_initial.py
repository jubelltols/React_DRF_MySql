# Generated by Django 4.0.1 on 2022-01-25 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Station',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('status', models.CharField(max_length=500)),
                ('latitude', models.DecimalField(decimal_places=20, max_digits=30, null=True)),
                ('longitude', models.DecimalField(decimal_places=20, max_digits=30, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True, db_index=True)),
            ],
        ),
    ]
