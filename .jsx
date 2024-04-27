import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(error => console.error('Error fetching quote:', error));
  };

  const tweetQuote = () => {
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
    window.open(twitterURL, '_blank');
  };

  return (
    <div id="quote-box" className="container">
      <div id="text">{quote}</div>
      <div id="author">- {author}</div>
      <button id="new-quote" onClick={fetchQuote}>New Quote</button>
      <a id="tweet-quote" href="#" onClick={tweetQuote}>Tweet Quote</a>
    </div>
  );
}

export default App;
