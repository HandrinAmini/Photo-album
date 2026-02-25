const gallery = document.getElementById('gallery'); 
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage'); 
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const selectedIndex = null;

imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src = `./images/Osaka_${i}.jpg`;
    image.alt = `Cover for Episode ${i} of the Compressed.fm Podcast`; 
    image.classList.add('galleryImg');
    
    image.addEventListener('click', () =>{ // popup stuff
        popup.style.transform = `translateY(0)`
        selectedImage.src = `./images/Osaka_${i}.jpg`;
        selectedImage.alt = `Cover for Episode ${i} of the Compressed.fm podcast`;
    })

    gallery.appendChild(image);
})

popup.addEventListener("click", () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
})