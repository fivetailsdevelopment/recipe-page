const btnRotate = document.querySelector('.button--rotate')
const containerCard = document.querySelector('.wrapper--recipe-card')

const modeLandscape = () => {
    containerCard.classList.toggle('grid--landscape')
    containerCard.classList.toggle('grid--portrait')
}

const disableLandscape = (e) => {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth < 950) {
        console.log('change now')
        btnRotate.removeEventListener('click', modeLandscape);
        containerCard.classList.remove('grid--landscape')
        containerCard.classList.add('grid--portrait')
        btnRotate.classList.add('hidden');
    } else {
        btnRotate.addEventListener('click', modeLandscape);
        btnRotate.classList.remove('hidden');
    }
}

btnRotate.addEventListener('click', modeLandscape);
window.addEventListener('resize', disableLandscape)