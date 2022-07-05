const quote = document.getElementById('quote');
const character = document.getElementById('character');
const anime_name = document.getElementById('anime_name');
const random_btn = document.getElementById('random_btn');
const input = document.querySelector('input');
const search_btn = document.getElementById('search_btn');
const search_by = document.getElementById('search_by');

//API URLs
const random_anime = 'https://animechan.vercel.app/api/random';
const anime_by_title = 'https://animechan.vercel.app/api/quotes/anime?title=';
const anime_by_character = 'https://animechan.vercel.app/api/quotes/character?name=';

//values
let search_value = '';
let search_by_value = '';

random_btn.addEventListener('click', () => {
    getRandomQuote(random_anime);
});


search_btn.addEventListener('click', () => {
    search_value = input.value;
    search_by_value = search_by.value;
    if (search_by_value === 'by_name') getAnimeByTitle(anime_by_title + search_value);
    getQuoteByCharacter(anime_by_character + search_value);
});

//Get random anime quote
function getRandomQuote(url){
    random_btn.disabled = true;
    random_btn.innerHTML = "Loading... <i class='bx bx-loader-circle bx-sm'></i>";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        quote.innerHTML = data.quote;
        character.innerHTML = data.character;
        anime_name.innerHTML = data.anime;
        random_btn.disabled = false;
        random_btn.innerHTML = "Random Quote <i class='bx bxs-dice-4 bx-sm'></i>";
    })
    .catch(error => console.log(error));
}

//Get anime quote by title
function getQuoteByTitle(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        quote.innerHTML = data.quote;
        character.innerHTML = data.character;
        anime_name.innerHTML = data.anime;
    })
    .catch(error => console.log(error));
}

//Get anime quote by character
function getQuoteByCharacter(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        quote.innerHTML = data.quote;
        character.innerHTML = data.character;
        anime_name.innerHTML = data.anime;
    }).catch(error => console.log(error));
}
