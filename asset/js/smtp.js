const contactForm = document.querySelector('.contactForm');

function sendMsg(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;

    Email.send({
        SecureToken: "34b04023-9ef1-479e-8fcb-d387de886ede",
        To: 'freelancersk216@gmail.com',
        From: email,
        Subject: subject,
        Body: "Hi! I'm " + name + "." + message
    }).then(
        message => alert(message)
    );
}

contactForm.addEventListener('submit', sendMsg);