const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    let scrollW = window.scrollY / 3;
   audrey.style.width = `${scrollW}px`;

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   let scrollH = window.scrollY / 3;
   audrey.style.height = `${scrollH}px`;
   
})