//Esto era un script para mover los ojos del oso, no funciono :(
// document.addEventListener('mousemove', (e) => {

//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     const ancla = document.getElementById('ancla'),
//         rekt = ancla.getBoundingClientRect(),
//         anclaX = rekt.left + rekt.width / 2,
//         anclaY = rekt.top + rekt.height / 2;
    
//     const anguloDeg = angulo(mouseX, mouseY, anclaX, anclaY)
//     console.log(anguloDeg)

//     const ojos = document.querySelectorAll('.ojo')
//     ojos.forEach(ojo => {
//         ojo.style.transform = `rotate(${10 + anguloDeg}deg)`;
//     })
// }) 

// function angulo(cx, cy, ex, ey) {
//     const dy = ey - cy,
//     dx = ex - cx,
//     rad = Math.atan2(dy,dx),
//     deg = rad * 180 / Math.PI;
//     return deg;
// }