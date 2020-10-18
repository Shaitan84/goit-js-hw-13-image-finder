import galleryTemp from '../tamplates/galleryItems.hbs'
import refs from './refs.js'

function updateGallery(pics) {
	refs.galleryWrap.innerHTML = "";
	const markup = galleryTemp(pics);
	refs.galleryWrap.insertAdjacentHTML('beforeend', markup);
};

function loadMorePics(pics) {
	const markup = galleryTemp(pics);
	refs.galleryWrap.insertAdjacentHTML('beforeend', markup);
}
export default {
	updateGallery,
	loadMorePics
};