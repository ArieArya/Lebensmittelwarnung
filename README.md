# Current UI
https://www.lebensmittelwarnung.de/bvl-lmw-de/liste/alle/hessen/10/0

# virtual environment
source ./quantco_env/bin/activate

# run application
cd frontend
npm run build
npm run dev

python manage.py runserver