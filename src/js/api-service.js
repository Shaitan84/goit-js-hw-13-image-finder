// import axios from 'axios';

// export default {
//   page: 1,
//   searchQuery: '',
//   apiKey: '18687668-0314872cca099a59b905edaa7',
//   async getImages() {
//     const result = await axios.get(
//       `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.apiKey}`,
//     );
//     this.page += 1;
//     return result.data.hits;
//   },
//   resetPage() {
//     this.page = 1;
//   },
//   incrPage() {
//     this.page += 1;
//   },
//   get query() {
//     return this.searchQuery;
//   },
//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   },
// };
import tmp from './templating.js'

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