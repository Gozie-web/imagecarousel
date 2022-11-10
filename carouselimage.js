//array of images
const images =[
    'obudu.jpg',            // index 0 --> images[0]
    'Brazil.jpg',          // index 1 --> images[1]
    'San jose.jpg',         // index 2 --> images[2]
    'maimii.webp',          // index 3 --> images[3]
    'fiji.jpg',            // index 4 --> images[4]
    'hawai.webp',          // index 5 --> images[5]
];
const firstImage = 0;
const lastImage = images.length -1;
let currentImage = 0;

//next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',()=>{
    //get image tag
    const imageTag = document.getElementById('image'); 
    currentImage++; //1
if(currentImage>= lastImage){
    currentImage = 5;
}
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage +1) + '/6';  
});

//prev
const prevBtn = document.getElementById('prev');
prevBtn.addEventListener('click', ()=>{
 
    //get image tag
 const imageTag = document.getElementById('image'); 
 currentImage--; //1
if(currentImage<= firstImage){
 currentImage = 0;
}
 imageTag.src = images[currentImage];
 document.getElementById('info').innerHTML = (currentImage +1) + '/6';

});
