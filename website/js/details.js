const onLoad = () => {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  findShow(params.get("id"));

  document.querySelector('#schedule_button').addEventListener('click', showSchedule);
}
window.addEventListener('load', onLoad);

const findShow = (showID) => {
  fetch(`http://api.tvmaze.com/shows/${showID}`)
  .then(r => r.json())
  .then(showData => {
    let h1 = document.querySelector('#bottom h1');
    h1.innerHTML = showData.name;

    let desc = document.querySelector('#bottom p');
    desc.innerHTML = showData.summary;

    let img = document.querySelector('#top img');
    img.src = showData.image.medium;
    img.alt = showData.name;

    const schedule = document.querySelector("#schedule");
    let scheduleDays = showData.schedule.days.map(e => {
      return `<span>${e}</span>`
    })
    schedule.innerHTML = `<h3>Time: ${showData.schedule.time}</h3>
    ${scheduleDays.join()}
    `;
  })
  .catch(console.log)
}

const showSchedule = () => {
  const schedule = document.querySelector("#schedule");
  if (schedule.style.display === "block") {
    schedule.style.display = "none";
  } else {
    schedule.style.display = "block";
  }
}