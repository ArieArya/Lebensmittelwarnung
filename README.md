# virtual environment
source ./quantco_env/bin/activate

# run application
cd frontend
npm run build
npm run dev

python manage.py runserver