# Django Rest Api and React-ApexChart for Ipl data.
  ###### step 1: Migrate the tables into the (mysql)database:
      python -3 manage.py makemigrations
      python -3 manage.py migrate
  ###### step 2: Create a superuser:
      python -3 manage.py createsuperuser
  ###### step 3: Insert data from CSV file to the database:
      run the python script located at csv/deliveries.py
  ###### step 4: Run the server and access the page using http://127.0.0.1:8000/ in the browser's address bar:
      python -3 manage.py runserver
