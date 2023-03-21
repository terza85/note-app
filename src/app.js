import Masonry from "masonry-layout";

const grid = document.querySelector('.board-container');
const noteTitle = document.querySelector('.noteTitle');
const noteText = document.querySelector('.noteText');
const newNote = document.getElementById('newNote');
const addNote = document.getElementById('addNote')
const finish = document.querySelectorAll('finish')

finish.forEach(btn => btn.addEventListener('click', (e) => console.log(e.target)))

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

        let titleEl = document.createElement('h2');
        titleEl.classList.add('title')
        titleEl.innerHTML = noteTitle.value;

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
        noteEl.appendChild(titleEl);
        noteEl.appendChild(bodyEl);
        noteEl.appendChild(actionsEl);
        actionsEl.appendChild(imgFinish);
        actionsEl.appendChild(imgQuit);


        msnry.appended(noteEl)
        msnry.layout();
        console.log(noteTitle);
        noteTitle.value = '';
        noteText.value = '';
        // noteTitle.placeholder = 'new text for email';

    })

    grid.addEventListener("click", function (e) {
        let delNo
        const target = e.target.closest(".finish");
        (target) ? delNo = target.closest('.note') : delNo = null;

        msnry.remove(delNo);
        msnry.layout();
    });


}