document.addEventListener("DOMContentLoaded", function() {

    // ajouter html en Js

    class Episode {
        constructor(title, duration, hasBeenWatched) {
          this.title = title;
          this.duration = duration;
          this.hasBeenWatched = hasBeenWatched;
        }
      }

    //list des variables
      const innertext = document.querySelector('.innertext');
      const innerhtml = document.querySelector('.innerhtml');
      const createlement = document.querySelector('.createlement');

      innertext.innerText="Je suis ajouter en JS"
      innerhtml.innerHTML=`<p>Modification d'une balise en utilisant la proptiété <span style="color:red"> innerhtml </span></p>`

      let firstEpisode = new Episode('Dark Beginnings', 45, true);
      let secondEpisode = new Episode('The Mystery Continues', 45, false);
      
      let episodes = [firstEpisode, secondEpisode];

    for(let i = 0; i < 12; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('series-frame');
        let newTitle = document.createElement('h2');
        newTitle.innerText = 'New movie';
        let newParagraph = document.createElement('p');
        newParagraph.innerText = `${episodes[i].title}
      ${episodes[i].duration} minutes
      ${episodes[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
        newDiv.append(newTitle);
        newDiv.append(newParagraph);
        createlement.append(newDiv);
      }
});