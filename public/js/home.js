const socket = io({
    query: {
        page: window.location.pathname
    }
});

const params = new URLSearchParams(window.location.search);
const userName = params.get('user');

socket.emit('uploadUserName', userName);
