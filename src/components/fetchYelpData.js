import axios from 'axios';

const BASE_URL = 'http://localhost:4999/api/yelp-search'; // Replace with your backend server URL

async function fetchYelpData(searchTerm, location) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                term: searchTerm,
                location: location,
            },
        });

        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('This is my error message', error);
        return null;
    }
}

export default fetchYelpData;