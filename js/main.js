const quote = document.getElementById('quote');
const character = document.getElementById('character');
const anime_name = document.getElementById('anime_name');
const random_btn = document.getElementById('random_btn');
const input = document.querySelector('input');
const search_btn = document.getElementById('search_btn');

//API URLs
const random_anime = 'https://animechan.vercel.app/api/random';
const anime_by_title = 'https://animechan.vercel.app/api/quotes/anime?title=';
const anime_by_character = 'https://animechan.vercel.app/api/quotes/character?name=';

random_btn.addEventListener('click', () => {
    getRandomQuote(random_anime);
});


//Get random anime quote
function getRandomQuote(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        quote.innerHTML = data.quote;
        character.innerHTML = data.character;
        anime_name.innerHTML = data.anime;
    })
    .catch(error => console.log(error));
}
