# react-django

#### Requirements
- [Node js](https://nodejs.org/en/)
- [virtualenv wrapper](https://virtualenvwrapper.readthedocs.io/en/latest/)
- [Python 3](https://www.python.org/downloads/)

#### How to install the dependencies?

- clone the repository
- install the [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) to a best package manager and create a new virtual environment:
```mkvirtualenv -p path/to/python virtualenvname```
- run the command in the project root: 
``` pip install -r requirements/develop.txt ```
- later open the front folder in shell and run: 
``` npm install ```

#### Starting the project
- The first execution, you need make the migrate in the django database, you can run: 
``` ./manage.py migrate ```
- In the project root folder run the command: 
``` ./manage.py runserver ```
- Open another shell, and in the front directory and run: 
``` npm start ```
<br><br>
### YEAH, your project is running!!!

You can access it in: https://127.0.0.0.1:8000

### now, is time to code :)

![Time to code](https://i.makeagif.com/media/10-01-2015/dhvwZp.gif)
