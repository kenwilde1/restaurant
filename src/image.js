const loadImage = () => {

    const contentContainer = document.querySelector('#content');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    
    image.src = 'images/restaurant.jpeg';
    imageContainer.appendChild(image);
    contentContainer.appendChild(imageContainer);
    
}

export default loadImage;


