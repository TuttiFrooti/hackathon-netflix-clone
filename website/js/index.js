const onLoad = () => {
  document.querySelector('#search_button').addEventListener('click', searchForShow);

  showAllCards();
}
window.addEventListener('load', onLoad);


const searchForShow = () => {

}

const showAllCards = () => {
  fetch('http://api.tvmaze.com/schedule')
  .then(r => r.json())
  .then(data => {
    let main = document.querySelector('.main');
    let html = [];

    data.forEach(show => {
      /* 
        show.name
        show.show.image.medium
        show.show.id <- show ID for details page
      */
      let createElm = document.createElement("a");
      createElm.className = "show";
      createElm.href = `./details.html?${show.show.id}`
      createElm.style.backgroundImage = `url(${show.show.image.medium})`;
      createElm.style.backgroundRepeat = "no-repeat";
      createElm.style.backgroundSize = "cover";
      createElm.innerHTML = `
        <h1>${show.name}</h1>
        <div>Details</div>
      `;
      main.appendChild(createElm)
    });
  })
  .catch(console.log)
}