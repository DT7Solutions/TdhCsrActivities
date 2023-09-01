# TdhCsrActivities

#install env
#pip install virtualenv
# create virtual environment
#python -m venv env-csr

# activate virtual environment
#env-csr\Scripts\activate

# install libs
pip freeze > requirements.txt 
pip install -r requirements.txt

# create django  project
Django-admin startproject "tdhcsr"

# create django app 
python manage.py startapp "csrapp"

# create super user 
python manage.py createsuperuser
# migration process 
python manage.py makemigrations 

# run migrations 
python manage.py migrate 

# Run project or applications
python manage.py runserver
