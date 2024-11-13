const image1 = document.getElementById(`image1`);
const image2 = document.getElementById(`image2`);
const section = document.getElementById(`section`);
const leftContainer = document.querySelector(`.image-container-left`);
const rightContainer = document.querySelector(`.image-container-right`);

section.addEventListener('mousemove' , (e) =>{
    const rect = section.getBoundingClientRect();
    const xPos = e.clientX - rect.left;

    const letTotalScreen = `1700`;

    console.log(rect , xPos , letTotalScreen);

    if( xPos < rect.width / 2 ){
        leftContainer.style.width = `100%`;
        rightContainer.style.width = `0`;
    }else{
        leftContainer.style.width = `0`;
        rightContainer.style.width = `100%`;
    }
});


// 1698  , 849  , 498 ,  1300