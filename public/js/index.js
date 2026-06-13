const socket = io({
    query: {
        page: window.location.pathname
    }
});

const radius = document.querySelector('.main').clientWidth * 0.5;
document.querySelector('.main').style.borderRadius = `${radius}px 0 / ${radius}px ${radius}px`;

document.querySelector('.submit').addEventListener('click', () => {
    const name = document.querySelector('.name').value.trim();
    document.querySelector('.name').value = name;
    if (!name) {return;}
    socket.emit('nameInput', name);
});

socket.on('nameAvailable', (name) => {
    location.href = "home.html?user=" + name;
})

socket.on('nameRepeat', () => {
    const notice = document.createElement('div');
    notice.className = 'notice';
    notice.innerText = '名称已被占用';
    notice.style.color = 'purple';
    notice.style.transition = 'all 0.3s ease';
    notice.style.position = 'absolute';
    notice.style.left = '50%';
    notice.style.bottom = 0;
    notice.style.transform = 'translate(-50%, 100%)';
    document.querySelector('.input').append(notice);
    setTimeout(() => {
        notice.style.opacity = 0;
        notice.addEventListener('transitionend', () => {
            notice.remove();
        }, { once: true });
    }, 2000);
})