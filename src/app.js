import Masonry from "masonry-layout";
import foo from "/src/img/finish.png";
// import * as images from './src/img/types/finish.png';
// console.log(images);
const grid = document.querySelector('.board-container');
const naslov = document.querySelector('.naslov');
const noteText = document.querySelector('.noteText');
const newNote = document.getElementById('newNote');
const addNote = document.getElementById('addNote')


newNote.addEventListener('click', () => {

})

window.onload = () => {
    const msnry = new Masonry(grid, {
        itemSelector: '.note',
        gutter: 10,
    });

    addNote.addEventListener('click', () => {
        const quitImg = require('./img/quit.png');
        const finishImg = require('./img/finish.png');
        const textArea = noteText.value;
        const lines = textArea.split('\n');


        const newArr = lines.filter((a) => a);


        let noteEl = document.createElement('div');
        noteEl.classList.add('note')

        let bodyEl = document.createElement('div');
        newArr.forEach(el => {
            bodyEl.innerHTML += `- ${el} <br />`;
        });
        bodyEl.classList.add('body')
        let actionsEl = document.createElement('div');
        actionsEl.classList.add('actions')

        let imgFinish = document.createElement('img');
        imgFinish.src = finishImg;
        imgFinish.classList.add('finish')

        let imgQuit = document.createElement('img');
        imgQuit.src = quitImg;
        imgQuit.classList.add('quit')

        grid.appendChild(noteEl);
        noteEl.appendChild(bodyEl);
        noteEl.appendChild(actionsEl);
        actionsEl.appendChild(imgFinish);
        actionsEl.appendChild(imgQuit);


        msnry.appended(noteEl)
        msnry.layout();

    })
}