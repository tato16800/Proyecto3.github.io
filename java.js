//crear una funcion
async function populate() {

    //llamo el archivo JSON
    const requestURL = 'actividad.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroesText = await response.text();

    //Espera la respuesta del JSON
    const superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    populateHeroes(superHeroes);

  }

  //Crea una funcion para la asignacion de variables de la cabecera, titulo y parrafos
  //Añadiendo tambien el elemento creado del titulo a la cabecera
  function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);

    //Representando el node apartir del textContent
    const myPara = document.createElement('p');
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }

  //Crea una funcion de la seccion de informacion de los heroes
  function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj.members;

    for (const hero of heroes) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
    
      //Creando los nombres de los heroes que se han asignado desde el archivo de JSON
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = 'Superpowers:';

      //Creando los poderes mediante una lista creada añadiendo datos a un array llamado "listItem"
      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement('li');
        listItem.textContent = power;
        myList.appendChild(listItem);
      }

      //Agregando datos a los Arrays en los articulos y en la seccion
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);

      section.appendChild(myArticle);
    }
  }

  populate();