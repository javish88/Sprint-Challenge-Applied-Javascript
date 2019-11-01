// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
      .then((response) => {
          console.log(response);
        response.data.articles.bootstrap.forEach(article => newCard(article))
        response.data.articles.javascript.forEach(article => newCard(article))
        response.data.articles.jquery.forEach(article => newCard(article))
        response.data.articles.node.forEach(article => newCard(article))
        response.data.articles.technology.forEach(article => newCard(article))
      })

function newCard(data) {
    const cardDiv = document.createElement('div'),
          cardHeadline = document.createElement('div'),
          cardAuthor = document.createElement('div'),
          cardImageContainer = document.createElement('div'),
          cardAuthorImg = document.createElement('img'),
          cardAuthorName = document.createElement('span');

    
    cardDiv.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    cardImageContainer.classList.add('img-container')
    
    
    cardHeadline.textContent = data.headline
    cardAuthorImg.src = data.authorPhoto;
    cardAuthorName.textContent = data.authorName


    cardDiv.appendChild(cardHeadline)
    cardDiv.appendChild(cardAuthor)

    cardAuthor.appendChild(cardImageContainer)
    cardAuthor.appendChild(cardAuthorName)

    cardImageContainer.appendChild(cardAuthorImg)

    const mainCardContainer = document.querySelector('.cards-container');
    mainCardContainer.appendChild(cardDiv)

    return cardDiv;
}

