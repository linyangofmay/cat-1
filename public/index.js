// Your code here
const catLoader = async()=>{

 const title = document.createElement('h1');
 title.innerText = 'Kitten Pic';
 document.body.appendChild(title);

 const container = document.createElement('div');
 const catImg = await fetch('https://api.thecatapi.com/v1/images/search?size=small');
 console.log('catImg', catImg);
 const cats = await catImg.json();
 console.log('cats', cats);

 const img = document.createElement('img');
 const url = cats[0].url;
 img.setAttribute('src', url);
 container.appendChild(img);
 document.body.appendChild(container);










}


window.onload = catLoader;
