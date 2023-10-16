// // Obtén una referencia a la lista donde mostrarás los datos
// const dataList = document.getElementById("dataList");

// // URL de la API que deseas llamar
// const apiUrl = "https://randomuser.me/api/?results=20";

// // Realiza una solicitud a la API utilizando fetch()
// fetch(apiUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Error en la solicitud: ${response.status}`);
//         }
//         return response.json(); // Parsea la respuesta como JSON
//     })
//     .then(data => {
//         // Manipula los datos de la respuesta
//         const results = data.results;

//         if (results && results.length > 0) {
//             results.forEach(user => {
//                 const listItem = document.createElement("li");
//                 listItem.textContent = `Nombre: ${user.name.first} ${user.name.last}, Email: ${user.email}`;
//                 dataList.appendChild(listItem);
//             });
//         } else {
//             dataList.textContent = "No se encontraron datos.";
//         }
//     })
//     .catch(error => {
//         console.log(error)
//     });

        // Obtén una referencia al contenedor donde mostrarás los datos
        const dataContainer = document.getElementById("dataContainer");

        // URL de la API que deseas llamar
        const apiUrl = "https://randomuser.me/api/?results=20";

        // Realiza una solicitud a la API utilizando fetch()
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status}`);
                }
                return response.json(); // Parsea la respuesta como JSON
            })
            .then(data => {
                // Manipula los datos de la respuesta
                const results = data.results;

                if (results && results.length > 0) {
                    results.forEach(user => {
                        const userDiv = document.createElement("div");
                        userDiv.className = "user-card";

                        const userImage = document.createElement("img");
                        userImage.src = user.picture.large;
                        userDiv.appendChild(userImage);

                        const userName = document.createElement("p");
                        userName.textContent = `Nombre: ${user.name.first} ${user.name.last}`;
                        userDiv.appendChild(userName);

                        dataContainer.appendChild(userDiv);
                    });
                } else {
                    dataContainer.textContent = "No se encontraron datos.";
                }
            })
            .catch(error => {
                console.log(error)
            });