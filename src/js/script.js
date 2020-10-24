'use strict'
import apiService from './api-service.js'
import refs from './refs.js'
import render from './render-gallery.js'

let searchQuery = "";
let page = 1;


refs.searchForm.addEventListener('click', (event) => {
	event.preventDefault();
	page = 1;
	refs.loadMore.style.visibility = "visible";
	searchQuery = event.currentTarget.elements['query'].value;
	if (!searchQuery) {
		refs.loadMore.style.visibility = "hidden";
		refs.galleryWrap.innerHTML = "";
		return;
	}
	return apiService.fetchPics(searchQuery, page)
		.then(pics => {
			if (pics.length < 12) {
				refs.loadMore.style.visibility = "hidden"
			};
			render.updateGallery(pics);
			page += 1
		});
});


refs.loadMore.addEventListener('click', (event) => {
	apiService.fetchPics(searchQuery, page)
		.then(pics => {
			if (pics.length < 12) {
				refs.loadMore.style.visibility = "hidden"
			};
			render.loadMorePics(pics);
			page += 1
		});
});



