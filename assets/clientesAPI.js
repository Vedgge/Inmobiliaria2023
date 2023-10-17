const testimoniosContenedor = document.getElementById("testimonios_contenedor");

const apiUrl = "https://randomuser.me/api/?results=20";
const commentsUrl = "./assets/frases.json";

fetch(commentsUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la solicitud de comentarios: ${response.status}`);
        }
        return response.json();
    })
    .then(commentsData => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error en la solicitud de usuarios: ${response.status}`);
                }
                return response.json();
            })
            .then(userData => {
                const users = userData.results;
                const shuffledComments = shuffle(commentsData.comentarios);

                if (users && users.length > 0) {
                    users.forEach(user => {
                        const testimoniosDiv = document.getElementsByClassName("testimonios")[0],
                            autorDesc = testimoniosDiv.querySelector(".autor_desc"),
                            nombreAutor = autorDesc.querySelector(".autor"),
                            textAutor = autorDesc.querySelector(".text_autor"),
                            ubicacionAutor = textAutor.querySelector(".ubicacion"),
                            quoteUser = testimoniosDiv.querySelector(".quote"),
                            imageDiv = autorDesc.querySelector(".image"); 

                        const userImage = document.createElement("img");
                        userImage.src = user.picture.large;
                        imageDiv.appendChild(userImage); 

                        const userName = document.createElement("strong");
                        userName.textContent = ` ${user.name.first} ${user.name.last}`;
                        nombreAutor.appendChild(userName);

                        const commentUser = document.createElement("p");
                        commentUser.id = "quote";
                        commentUser.textContent = shuffledComments.pop();
                        quoteUser.appendChild(commentUser);

                       
                        textAutor.removeChild(ubicacionAutor);
                        textAutor.appendChild(ubicacionAutor);

                        testimoniosContenedor.appendChild(testimoniosDiv);
                    });
                } else {
                    testimoniosContenedor.textContent = "No se encontraron datos.";
                }
            })
            .catch(error => {
                console.log(error);
            });
    })
    .catch(error => {
        console.log(error);
    });

function shuffle(array) {
    let currentIndex = array.length, randomIndex, temporaryValue;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}