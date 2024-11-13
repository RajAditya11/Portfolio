document.querySelector(`.back-to-top`).addEventListener(`click`, toTop = () => {
    window.scrollTo({
        top:0 ,
        behavior:`smooth`
    });
});
