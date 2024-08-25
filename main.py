from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)