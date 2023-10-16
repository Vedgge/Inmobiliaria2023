// Obtén una referencia al contenedor donde mostrarás los datos
const dataContainer = document.getElementById("dataContainer");

// URL de la API que deseas llamar
const apiUrl = "https://randomuser.me/api/?results=20";
const commentsUrl = "./assets/frases.json"

// Realiza una solicitud a la API de comentarios
fetch(commentsUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la solicitud de comentarios: ${response.status}`);
        }
        return response.json(); // Parsea los comentarios como JSON
    })
    .then(commentsData => {
        // Realiza una solicitud a la API de usuarios
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error en la solicitud de usuarios: ${response.status}`);
                }
                return response.json(); // Parsea los usuarios como JSON
            })
            .then(userData => {
                // Manipula los datos de los usuarios
                const users = userData.results;

                // Asigna comentarios al azar a los usuarios
                const shuffledComments = shuffle(commentsData.comentarios);
                users.forEach(user => {
                    user.comments = [shuffledComments.pop()];
                });

                if (users && users.length > 0) {
                    users.forEach(user => {
                        const userDiv = document.createElement("div");
                        userDiv.className = "user-card";

                        const userImage = document.createElement("img");
                        userImage.src = user.picture.large;
                        userDiv.appendChild(userImage);

                        const userName = document.createElement("p");
                        userName.textContent = `Nombre: ${user.name.first} ${user.name.last}`;
                        userDiv.appendChild(userName);

                        const commentsList = document.createElement("ul");
                        user.comments.forEach(comment => {
                            const commentItem = document.createElement("li");
                            commentItem.textContent = comment;
                            commentsList.appendChild(commentItem);
                        });

                        userDiv.appendChild(commentsList);
                        dataContainer.appendChild(userDiv);
                    });
                } else {
                    dataContainer.textContent = "No se encontraron datos.";
                }
            })
            .catch(error => {
                console.log(error);
            });
    })
    .catch(error => {
        console.log(error);
    });

// Función para mezclar (shuffle) un arreglo (acá se mezclan los comentarios)
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