# Generated by Django 2.1.3 on 2018-11-09 22:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('surveys', '0002_auto_20181109_2214'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='response',
            name='rtype',
        ),
    ]