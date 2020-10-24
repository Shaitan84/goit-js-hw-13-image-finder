'use strict'
import galleryTemp from '../tamplates/galleryItems.hbs'
import refs from './refs.js'
import createModal from './modalBox.js';
import loadMoreBtn from './load-more-buton.js';

function updateGallery(pics) {
	refs.galleryWrap.innerHTML = "";
	const markup = galleryTemp(pics);
	refs.galleryWrap.insertAdjacentHTML('beforeend', markup);
	clearSerch();
};

function clearSerch() {  
    refs.searchForm.query.value = '';   
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


