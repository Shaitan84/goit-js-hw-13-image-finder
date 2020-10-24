'use strict'
import galleryTemp from '../tamplates/galleryItems.hbs'
import refs from './refs.js'
import createModal from './modalBox.js';

function updateGallery(pics) {
	refs.galleryWrap.innerHTML = "";
	const markup = galleryTemp(pics);
	refs.galleryWrap.insertAdjacentHTML('beforeend', markup);
	clearSerch();
// 	window.scrollTo({
//   top: 100,
//   left: 100,
//   behavior: 'smooth'
// });
};

function clearSerch() {  
    refs.searchForm.query.value = '';   
    // headerFormRef.innerHTML = ''; 
    // refs.galleryWrap.innerHTML = ''; 
}

function loadMorePics(pics) {
	const markup = galleryTemp(pics);
	refs.galleryWrap.insertAdjacentHTML('beforeend', markup);
	window.scrollTo(0, document.documentElement.offsetHeight);
}
function handleOpenModal(event) {
    if (event.target.nodeName !== 'IMG') {
      return;
    }    
    const largeImageURL = event.target.dataset.source;  
	createModal(largeImageURL);
	console.log(largeImageURL);
  }
//   console.log(handleOpenModal);
  refs.galleryWrap.addEventListener('click', handleOpenModal);
  
export default {
	updateGallery,
	loadMorePics,
	handleOpenModal
};


