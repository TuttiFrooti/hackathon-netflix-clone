const onLoad = () => {
  document.querySelector('#search_button').addEventListener('click', searchForShow);

  showAllCards();
}
window.addEventListener('load', onLoad);

const searchForShow = () => {
  let input = document.querySelector('#search_field')

  let allCards = document.querySelectorAll('.show');

  allCards.forEach(e => {

    if(input.value.length === 0) {
      e.classList.remove("hidden");
    } else {
      let regex = new RegExp("(?:<h1>)" + input.value.toLowerCase() + "(?:<\/h1>)", "gi");

      let findShow = e.innerHTML.toLowerCase().match(regex);
      
      if (!!findShow) {
        e.classList.remove("hidden");
      } else {
        e.classList.add("hidden");
      }
    }
  })
}

const showAllCards = () => {
  fetch('http://api.tvmaze.com/schedule')
  .then(r => r.json())
  .then(data => {
    let main = document.querySelector('.main');
    data.forEach(show => {
      let createElm = document.createElement("a");
      createElm.className = "show";
      createElm.href = `./details.html?id=${show.show.id}`
      createElm.style.backgroundImage = `url(${show.show.image.medium})`;
      createElm.style.backgroundRepeat = "no-repeat";
      createElm.style.backgroundSize = "cover";
      createElm.innerHTML = `
        <h1>${show.show.name}</h1>
        <div>Details</div>
      `;
      main.appendChild(createElm)
    });
  })
  .catch(console.log)
}