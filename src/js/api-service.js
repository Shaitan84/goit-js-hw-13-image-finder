'use strict'
const baseUrl = "https://pixabay.com/api/";
const apiKey = "18687668-0314872cca099a59b905edaa7";
export default {
	fetchPics(searchQuery, page) {
		const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
		return fetch(url)
			.then(res => res.json())
			.then(pics => pics.hits)
			.catch(`Error`);
	}
}