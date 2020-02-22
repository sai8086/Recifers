import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import pickle 
df=pd.read_csv('rec.csv')
count = CountVectorizer()
count_matrix = count.fit_transform(df['type'])
cosine_sim = cosine_similarity(count_matrix, count_matrix)
ind=pd.Series(df.index,index=df["name"])
def dish(title, cosine_sim = cosine_sim):
    #dish = []
    idx=ind[title]   
    score_series = pd.Series(cosine_sim[idx]).sort_values(ascending = False)
    are = list(score_series.iloc[1:5].index)
    print(are)
    g=[]             
    for i in are:
        g.append(df["name"].iloc[i])
    return g
#d=dish('coconutbarfi')
#print(d)
y="file"
pickle.dump(cosine_sim,open("h","wb"))








