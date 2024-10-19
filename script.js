const buttons = document.querySelectorAll('.photo');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');
const popupSound = document.getElementById('popup-sound'); // Selecciona el elemento de audio

function open(e) {
    overlay.classList.add('open');
    const img = e.currentTarget.querySelector('img'); // Obtiene la imagen correspondiente
    overlayImage.src = img.src; // Establece la fuente de la imagen en la superposición
    
    const audioSrc = img.getAttribute('data-audio'); // Obtiene la URL del audio desde el atributo data-audio
    popupSound.src = audioSrc; // Establece la fuente del audio
    popupSound.play(); // Reproduce el sonido al abrir el pop-up
}

function close() {
    overlay.classList.remove('open');
    popupSound.pause(); // Detiene la reproducción del sonido
    popupSound.currentTime = 0; // Reinicia el audio al principio
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);