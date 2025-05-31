const axios = require('axios');

const fetchBooks = async (query) => {
  try {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: query,
        maxResults: 10,
        langRestrict: 'en',
        printType: 'books',
        orderBy: 'relevance',
      },
    });

    return response.data.items || [];
  } catch (error) {
    console.error('Mistake while taking books from Google Books API:', error.message);
    return [];
  }
};
module.exports = {
  fetchBooks,
};
