import sqlite3
import mysql.connector
from mysql.connector import Error
from flask import Flask,render_template,request
import requests
from reco import dish
import pickle
import re 
from bs4 import BeautifulSoup
app=Flask(__name__,template_folder='templates')
si=pickle.load(open("h","rb")) 
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
def getvalue(ha,ia,hb,ib,j):
    q=1
    fl=[]
    #jl=[]
    for q in range(len(j)-1):
        #print(l)
        g=j[q]
        fl.append(g)
        if ha[q]=='"none"':
            #print("not available")
            fl.append("nope")
        else:
            product_page=requests.get(ha[q],headers= headers)
            soup=BeautifulSoup(product_page.content,'html.parser')
            title=soup.select_one(ia[q])
            mes=title
            fl.append(mes)
            #print(mes)
        #product_page=requests.get(ha[i],headers= headers)
        #soup=BeautifulSoup(product_page.content,'html.parser')
        if hb[q]=='"none"':
            #print("not avaliable")
            fl.append("nope")
        else:
            product_page1=requests.get(hb[q],headers= headers)
            soup1=BeautifulSoup(product_page1.content,'html.parser')  
            title1=soup1.select_one(ib[q])
            mes1=title1.get_text()
            fl.append(mes1)
            print(mes1)  
    print(fl)
    return fl    
@app.route("/")
def index():
    return render_template("Header.js")    
@app.route("/",methods=['Post'])
def getivalue():
   n = request.form.get("searched")
   #n=getivalue()
   conn=sqlite3.connect('links.db')
   cur=conn.cursor()
   #name =request.form['name']
   #first_name = request.form.get("firstname")
   nam = re.sub(r"\s+", "",n)
   cur.execute("select * from food where name='%s'"%nam)
   i=1
   j=[]
   hb=[]
   ha=[]
   ib=[]
   ia=[]
   #v=[]
       #name =request.form['name']
       #nam = re.sub(r"\s+", "", name)
   #cur.execute("select * from food where name='cholebatture'")
   rec=cur.fetchall()
   while(i!=11):
       for row in rec:
           if row[i]=='none':
               i=i+1
           else:    
               j.append(row[i])
               i=i+1
   print(j)
   f=0
   for f in range(len(j)):
       l=j[f]
      #cur.execute("select * from food where name='pannertikkamasala'")
       cur.execute("select * from webs where name='%s'"%l)
       rec1=cur.fetchall()
       for row in rec1:
           hra=row[1]
           ha.append(hra)
           #print(hra)
           ida=row[2]
           ia.append(ida)
           hrb=row[3]
           hb.append(hrb)
           idb=row[4]
           ib.append(idb)
           #hb.append(hra)
   status = dish(nam)     
    #print(status)  #passing the data to the function
    #return render_template('pas.html',g=status)
    #g= getvalue(ha,ia,hb,ib,j)
   return render_template('j.html',g= getvalue(ha,ia,hb,ib,j),n=status,a=ha,b=hb,name=n)

if __name__=="__main__":
    app.run(debug=True)