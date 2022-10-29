document.onmousemove = animatedmousemoves;

const colors = ['#191A1C', '#00059b', '#ff6347'];

function animatedmousemoves(event) {
    let mousemove = document.createElement('div');
    mousemove.setAttribute('class', 'mousemove');
    document.body.appendChild(mousemove);

    mousemove.style.left = event.clientX + 'px';
    mousemove.style.top = event.clientY + 'px';

    let color = colors[Math.floor(Math.random() * colors.length)];
    mousemove.style.borderColor = color;

    mousemove.style.transition = 'all 2s linear 0s';

    mousemove.style.left = mousemove.offsetLeft - 20 + 'px';
    mousemove.style.top = mousemove.offsetTop - 20 + 'px';

    mousemove.style.width = '100px';
    mousemove.style.height = '50px';
    mousemove.style.borderWidth = '8px';
    mousemove.style.opacity = 0;
}