const socket = io();

const radius = document.querySelector('.main').clientWidth * 0.5;
document.querySelector('.main').style.borderRadius = `${radius}px 0 / ${radius}px ${radius}px`;

document.querySelector('.submit').addEventListener('click', () => {
    const name = document.querySelector('.name').value;
    socket.emit('nameInput', name);
});