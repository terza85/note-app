import Masonry from "masonry-layout";


window.onload = () => {
    const grid = document.querySelector('.board-container');
    const msnry = new Masonry(grid, {
        // options
        itemSelector: '.note',
        gutter: 10,

    });
}