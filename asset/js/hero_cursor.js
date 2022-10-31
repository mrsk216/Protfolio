const bg = document.querySelector('#hero');
const walk = 50;

const move = (e) => {
    let mouseX = -Math.round((e.clientX / window.innerWidth) * walk - (walk / 2));
    let mouseY = -Math.round((e.clientY / window.innerHeight) * walk - (walk / 2));
    bg.style.transform = `scale(1.1) translate(${mouseX}px, ${mouseY}px)`;
};
window.addEventListener('mousemove', move);