const socket = io();

const radius = document.querySelector('.main').clientWidth * 0.5;
document.querySelector('.main').style.borderRadius = `${radius}px 0 / ${radius}px ${radius}px`;