let imgSrc = document.querySelector('input');
let btn = document.querySelector('button');
let imgBox = document.querySelector('.imgBox');
let topText = document.getElementById('topText');
let bottomText = document.getElementById('bottomText');
let fontColor = document.getElementById('fontColor');


btn.addEventListener('click', function(e) {

    //checking inputs for values
    if(imgSrc.value === '' || topText.value === '' || bottomText.value === '') {
        alert("COMPLETE ALL FIELDS");
        e.preventDefault();
    } else {

    //create meme div
    let meme = document.createElement('div');
    meme.classList.add('meme');

    //creating image and appending it to meme div
    let imgSrcVal = imgSrc.value;
    let pic = document.createElement('img');
    pic.src = imgSrcVal;
    pic.classList.add('memeImg');
    meme.appendChild(pic);

    //creating remove button and appending it to image
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = "X";
    meme.append(removeBtn);

    //creating text and appending to meme div
    let topTxtVal = topText.value;
    let topHeading = document.createElement('h1');
    topHeading.innerHTML = topTxtVal;
    topHeading.style.color = fontColor.value;
    topHeading.classList.add('top');

    let bottomTxtVal = bottomText.value;
    let bottomHeading = document.createElement('h1');
    bottomHeading.innerHTML = bottomTxtVal;
    bottomHeading.style.color = fontColor.value;
    bottomHeading.classList.add('bottom');

    //so much appending with a bit of preventing
    meme.appendChild(topHeading);
    meme.appendChild(bottomHeading);
    imgBox.appendChild(meme);
    e.preventDefault();

    //and a touch of reseting
    topText.value = '';
    bottomText.value = '';
    imgSrc.value = '';
    fontColor.value = '#FFFFFF';
    }
})

imgBox.addEventListener('click', function(e) {
    if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
})