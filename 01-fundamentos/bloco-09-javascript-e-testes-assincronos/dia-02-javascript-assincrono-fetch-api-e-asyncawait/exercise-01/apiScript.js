// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const result = fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.querySelector('#jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();