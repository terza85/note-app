import Masonry from "masonry-layout";
import foo from "/src/img/finish.png";
// import * as images from './src/img/types/finish.png';
// console.log(images);
const grid = document.querySelector('.board-container');
const naslov = document.querySelector('.naslov');
const text = document.querySelector('.text');
const newNote = document.getElementById('newNote');
const addNote = document.getElementById('addNote')


newNote.addEventListener('click', () => {
    console.log(naslov.value);
    console.log(text.value);
})

window.onload = () => {

    const msnry = new Masonry(grid, {
        // options
        itemSelector: '.note',
        gutter: 10,

    });

    addNote.addEventListener('click', () => {
        const quitImg = require('./img/quit.png');
        const finishImg = require('./img/finish.png');

        //     const markup = `
        // <div class="note">
        // <div class="body">${text.value}</div>
        // <div class="actions">
        // <img src=${finishImg} class="finish">
        // <img src=${quitImg} class="quit">
        // </div>
        // </div>
        // `

        let noteEl = document.createElement('div'); // is a node
        // noteEl.innerHTML = `${text.value}`;
        noteEl.classList.add('note')

        let bodyEl = document.createElement('div'); // is a node
        bodyEl.innerHTML = `${text.value}`;
        bodyEl.classList.add('body')
        let actionsEl = document.createElement('div'); // is a node
        actionsEl.classList.add('actions')

        let imgFinish = document.createElement('img'); // is a node
        imgFinish.src = finishImg;
        imgFinish.classList.add('finish')

        let imgQuit = document.createElement('img'); // is a node
        imgQuit.src = quitImg;
        imgQuit.classList.add('quit')

        grid.appendChild(noteEl);
        noteEl.appendChild(bodyEl);
        noteEl.appendChild(actionsEl);
        actionsEl.appendChild(imgFinish);
        actionsEl.appendChild(imgQuit);

        // msnry.appended(markup)
        // grid.appendChild(noteEl)
        // msnry.layout();
        msnry.appended(noteEl)
        msnry.layout();

        // console.log(markup);
    })
}