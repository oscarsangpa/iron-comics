
// let btnFav = document.getElementById('favorites');
// let btnWatched = document.getElementById('watched');

// const listComics = ['Thor', 'Spiderman', 'Ironman']
// const comic = {
//   fav: {
//     status: false,
//     list: [] 
//   },
//   watched: {
//     status: false,
//     list: []
//   }
//   }

    
// btnFav.addEventListener('click', function(e){
//   console.log('comic fav!')
//   comic.fav.status = !comic.fav.status; 
//   for (let i=0; i < listComics.length; i++) {
//     let item = listComics[i]
//       if (comic.fav.status === true) {
//       comic.fav.list.push(item)
//   } else {
//       comic.fav.list.shift(item)
//   }
//     }
//   });

//   btnWatched.addEventListener('click', function(e){
//     console.log('comic watch!')
//     comic.watched.status = !comic.watched.status; 
//     for (let i=0; i < listComics.length; i++) {
//       let item = listComics[i]
//         if (comic.watched.status === true) {
//         comic.watched.list.push(item)
//     } else {
//         comic.watched.list.shift(item)
//     }
//       }
//     });

//   console.log(comic)