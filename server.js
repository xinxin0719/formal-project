const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const fs = require('fs');
const fileUrl = './data/users.json';

app.use(express.static('public'));

let fileContent = fs.readFileSync(fileUrl, 'utf-8');
if (!fileContent.trim()) {
    fs.writeFileSync(fileUrl, JSON.stringify([], null, 2));
}

io.on('connection', (socket) => {
    console.log('response');
    socket.on('nameInput', (name) => {
        let users = JSON.parse(fs.readFileSync(fileUrl, 'utf-8'));
        let user = users.find(item => item.name === name);
        if (user) {

        } else {
            users.push({ name: name});
            fs.writeFileSync(fileUrl, JSON.stringify(users, null, 2))
        }
        console.log(name);
    })

    socket.on('disconnect', () => {
        console.log('left');
    })
})

server.listen(3000, () => {
    console.log('Visit http://localhost:3000 to join in.');
})