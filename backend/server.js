const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/yelp-search', async (req, res) => {
    const searchTerm = req.query.term;
    const location = req.query.location;

    try {
        const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: `Bearer 9JGhQD_gxDC1ED2gR7xbAuw49YmrQhv-0ioQl9rZWU23wAwpK_d_WsoIwOS-xEysmYK0Mb4zd9AI_ii6ii6v1swhxX2MCqSX7ZM5JQiqIQc7gxpoPccqbKBJDDC-ZHYx`,
            },
            params: {
                term: searchTerm,
                location: location,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from Yelp API' });
    }
});

const port = process.env.PORT || 4999;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
