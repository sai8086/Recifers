from flask import Flask,render_template,request
import requests
app=Flask(__name__)
@app.route("/",methods=['Get'])
def main():
    return render_template(app.js)
def value():
    if request.method == 'GET':
        player_id = request.args.get('player_id', None)    