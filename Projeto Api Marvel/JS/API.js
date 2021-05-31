const idStories='https://gateway.marvel.com:443/v1/public/stories/' //Const usada para pegar a url das historias 
const apikey='&ts=1&apikey=df44191de87b4675c97effd5a6033f03&hash=22154c899d7164736b740b9e69f1780d' // ts+apikey+hash

// Id das historias de determinadas equipes de super herois
const IdMutantes='616';
const idVingadores='7750';
const idQuarteto='898';

//Urls
const urlVingadores=idStories+'/'+idVingadores+'/characters?limit=6'+apikey; //limite de 6 herois
const urlMutantes=idStories+'/'+IdMutantes+'/characters?'+apikey;
const urlQuarteto=idStories+'/'+idQuarteto+'/characters?limit=6'+apikey;

// Funções para consumir a API e preencher os dados na tela
const equipeVingadores = {
    render: () => {
      const container = document.querySelector('#marvel-row-vingadores');
          let contentHTML = '';
    fetch(urlVingadores)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="col-md-4">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="subtitulo-nome-personagem">${hero.name}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML;
      })
  }
};

const equipeMutantes={
  render:()=>{
    const container=document.querySelector('#marvel-row-mutantes')
    let contentHTML='';
    fetch(urlMutantes)
    .then(res=>res.json())
    .then((json)=>{
      for(const hero of json.data.results){
        let urlHero=hero.urls[0].url;
        contentHTML+=`
        <div class="col-md-4">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="subtitulo-nome-personagem">${hero.name}</h3>
            </div>`
      }
      container.innerHTML=contentHTML;
    })
  }
};

const equipeQuarteto={
  render:()=>{
    const container=document.querySelector('#marvel-row-quarteto')
    let contentHTML='';
    fetch(urlQuarteto)
    .then(res=>res.json())
    .then((json)=>{
      for(const hero of json.data.results){
        let urlHero=hero.urls[0].url;
        contentHTML+=`
        <div class="col-md-4">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="subtitulo-nome-personagem">${hero.name}</h3>
            </div>`
      }
      container.innerHTML=contentHTML;
    })

    
  }
};
//chamada das funções
equipeVingadores.render();
equipeMutantes.render();
equipeQuarteto.render();




