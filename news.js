let cardDeck = document.getElementById('cardDiv')


let newsItems = news.articles.map(function(each) {

   let newsList = `
  <div class="card">
    <img class="card-img-top" src="${each.urlToImage}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${each.title}</h5>
      <p class="card-text">${each.description}</p>
      <p class="card-text"><small class="text-muted">${each.publishedAt}</small></p>
      <a href="${each.url}" target=”_blank”><button type="button" class="goTo">
  Go to the News
</button></a>
    </div>
  </div>
  `

  cardDeck.insertAdjacentHTML('beforeend',newsList)
})
