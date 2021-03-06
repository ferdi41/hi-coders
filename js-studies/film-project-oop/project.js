const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//Start UI Object

const ui = new UI();

// All Events 

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);

}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

        if (title === "" || director === "" || url === ""){
           // Error
        }
        else{
            //new Movie
            const newFilm = new Film(title,director,url);

            ui.addFilmToUI(newFilm); //add film for UI
        }

    ui.clearInput(titleElement,urlElement,directorElement);

    e.preventDefault();
}
