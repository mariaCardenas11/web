document.querySelectorAll('.clickable-image').forEach(imagen => {
    imagen.addEventListener('click', () => {

     //para ampliar la imagen al hacer clic encima
        const lightbox = document.createElement('div');
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0,0,0,0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.zIndex = '9999';

        const imgGrande = document.createElement('img');
        imgGrande.src = imagen.src;
        imgGrande.style.maxWidth = '90%';
        imgGrande.style.maxHeight = '90%';
        imgGrande.style.borderRadius = '6px';
        imgGrande.style.boxShadow = '0 0 20px black';

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });

        lightbox.appendChild(imgGrande);
        document.body.appendChild(lightbox);
    });
});

// tirar confeti rosa

document.addEventListener('DOMContentLoaded', () => {

    const enlaces = document.querySelectorAll('a');

    enlaces.forEach(enlace => {
        if (enlace.textContent.trim().toLowerCase() === 'compra') {

            enlace.addEventListener('click', (e) => {
                e.preventDefault(); // evita error de página
                lanzarConfetiRosa();
            });

        }
    });
});

function lanzarConfetiRosa() {
    const colores = ['#ff69b4', '#ffc0cb', '#ffb6c1', '#f4a6c0', '#c0c0c0', '#d9d9d9', '#e6e6e6'];
    const cantidad = 150;

    for (let i = 0; i < cantidad; i++) {
        const confeti = document.createElement('div');

        confeti.style.position = 'fixed';
        confeti.style.width = '8px';
        confeti.style.height = '8px';
        confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.top = '-10px';
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.opacity = Math.random();
        confeti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confeti.style.borderRadius = '50%';
        confeti.style.zIndex = '10000';

        document.body.appendChild(confeti);

        const duracion = Math.random() * 3 + 2;

        confeti.animate([
            { transform: 'translateY(0) rotate(0deg)' },
            { transform: 'translateY(100vh) rotate(720deg)' }
        ], {
            duration: duracion * 1000,
            easing: 'ease-out'
        });

        setTimeout(() => confeti.remove(), duracion * 1000);
    }
}

//gatito con el cartel
document.getElementById('catalogo-link').addEventListener('click', function(event) {
    event.preventDefault();
    const contenedor = document.createElement('div');
    contenedor.style.position = 'fixed';
    contenedor.style.top = '50%';
    contenedor.style.left = '50%';
    contenedor.style.transform = 'translate(-50%, -50%)';
    contenedor.style.backgroundColor = 'white';
    contenedor.style.padding = '20px';
    contenedor.style.border = '2px solid #ccc';
    contenedor.style.textAlign = 'center';
    contenedor.style.zIndex = '1000';
    contenedor.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
    contenedor.style.borderRadius = '10px';

    // Agregar la imagen del gatito triste
    const gatito = document.createElement('img');
    gatito.src = 'img/maria/gatitotristeb.png';
    gatito.alt = 'Gatito triste';
    gatito.style.width = '150px';
    gatito.style.display = 'block';
    gatito.style.margin = '0 auto 10px auto';


    const mensaje = document.createElement('p');
    mensaje.textContent = 'Estamos trabajando en ello.';
    mensaje.style.fontSize = '18px';
    mensaje.style.fontWeight = 'bold';


    const botonCerrar = document.createElement('button');
    botonCerrar.textContent = 'Cerrar';
    botonCerrar.style.marginTop = '10px';
    botonCerrar.style.padding = '5px 10px';
    botonCerrar.style.cursor = 'pointer';
    botonCerrar.addEventListener('click', function() {
        document.body.removeChild(contenedor);
    });

    contenedor.appendChild(gatito);
    contenedor.appendChild(mensaje);
    contenedor.appendChild(botonCerrar);

   
    document.body.appendChild(contenedor);
});
