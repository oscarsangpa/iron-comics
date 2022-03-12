  const User = require('../models/user.model');

let btnFav = document.getElementById('favorites');
let btnWatched = document.getElementById('watched');


    
btnFav.addEventListener('click', function(e){
  console.log('comic fav!')
  comic.fav.status = !comic.fav.status; 
  for (let i=0; i < listComics.length; i++) {
    let item = listComics[i]
      if (comic.fav.status === true) {
      comic.fav.list.push(item)
  } else {
      comic.fav.list.shift(item)
  }
    }
  });

  btnWatched.addEventListener('click', function(e){
    console.log('comic watch!')
    comic.watched.status = !comic.watched.status; 
    for (let i=0; i < listComics.length; i++) {
      let item = listComics[i]
        if (comic.watched.status === true) {
        comic.watched.list.push(item)
    } else {
        comic.watched.list.shift(item)
    }
      }
    });

  console.log(comic)

  
const httpClient = axios.create({
  baseURL: 'http://localhost:3000'
})

const comicsFavs = (id, user) => httpClient.post(`/fav/${id}`)
  .then(() => {
    icon.classList.toggle('icon-liked');
  })
  .catch(err => console.error(err))
  .finally(() => icon.classList.remove('icon-events-none'))

document.getElementById('favorites').forEach(btn => {
  btn.onclick = (event) => {
    console.log
    btn.classList.add('icon-events-none')
    likeRestaurant(event.target.dataset.id, event.target)
  }
})