document.querySelector(`.back-to-top`).addEventListener(`click`, toTop = () => {
    window.scrollTo({
        top:0 ,
        behavior:`smooth`
    });
});


const section = document.querySelector('#mainScreen');
const leftContainer = document.querySelector('#leftScreen');
const rightContainer = document.querySelector('#rightScreen');

section.addEventListener('mousemove' , (e) =>{
    const rect = section.getBoundingClientRect();
    const xPos = e.clientX - rect.left;

    const letTotalScreen = `17+00`;

    console.log(rect , xPos , letTotalScreen);

    if( xPos < rect.width / 2 ){
        leftContainer.style.width = `100%`;
        rightContainer.style.width = `0`;
    }else{
        leftContainer.style.width = `0`;
        rightContainer.style.width = `100%`;
    }
});