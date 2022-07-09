const menuBtn = document.querySelector(".menu-icon span");
const seachBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
/*==INICIO-NAVBAR===*/
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  seachBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  seachBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
};
seachBtn.onclick = () => {
  form.classList.add("active");
  seachBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
/*==FIM-NAVBAR==*/



const marvel = {
  render: () => {


    const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1657230035&apikey=ebf40665df0b233b6adbe16e029cca1c&hash=19bfbfccdfcd0f872f750b66eba9cb15';
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
      for (const hero of json.data.results){
        let urlHero = hero.urls[0].url;

        contentHTML +=
         `<div class="col-md-4">
            <a href="${urlHero}" target="_blank">
              <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
            </a>
            <h3 class="title">${hero.name}</h3>
        </div>`;
      }
      container.innerHTML = contentHTML;


      })
  }
};
marvel.render();

