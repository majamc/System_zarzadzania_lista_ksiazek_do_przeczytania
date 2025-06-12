const fetchBooks = async (query) => {
  try {
    const params = new URLSearchParams({
      q: query,
      maxResults: 10,
      langRestrict: 'en',
      printType: 'books',
      orderBy: 'relevance',
    });

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?${params}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Mistake while taking books from Google Books API:', error.message);
    return [];
  }
};
module.exports = {
  fetchBooks,
};
