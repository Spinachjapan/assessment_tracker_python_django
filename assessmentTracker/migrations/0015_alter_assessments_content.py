# Generated by Django 3.2.7 on 2021-10-14 05:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('assessmentTracker', '0014_alter_assessments_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assessments',
            name='content',
            field=models.CharField(max_length=410, null=True),
        ),
    ]
