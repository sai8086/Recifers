let a=[   {
"volumeInfo": {
 "title": "ISBN Review",
 "authors": [
  "International ISBN Agency"
 ],
 "publishedDate": "1998",
 "industryIdentifiers": [
  {
   "type": "OTHER",
   "identifier": "UOM:39015081566500"
  }
 ],
  "categories": [
  "International Standard Book Numbers"
 ],
 "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=t5rgAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=t5rgAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
 },
 },
}];
a.map((value)=>{
    
       console.log(value.volumeInfo.imageLinks.thumbnail);
});
