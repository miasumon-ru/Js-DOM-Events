console.log('hi')

// option 2 > onclick handler by function

function makeYellow (){
    document.body.style.backgroundColor = 'yellow'
}

// option 3 by id

const makeBlueButton = document.getElementById('make-blue')

makeBlueButton.onclick = makeBlue;
// only function name

function makeBlue (){
    document.body.style.backgroundColor = 'blue'
}

// option 3 another
const makePurpleButton = document.getElementById('make-purple')

makePurpleButton.onclick = function(){
    document.body.style.backgroundColor = 'purple'
};

// option 4 by addeventlistener

const makePinkButton = document.getElementById('make-pink');

makePinkButton.addEventListener('click', makePink)

function makePink (){
    document.body.style.backgroundColor = 'pink';
}


// option 4 by addeventlistener another  

const makeRedButton = document.getElementById('make-red');

makeRedButton.addEventListener('click', function makeRed(){
    document.body.style.backgroundColor = 'red';
})

// option 4 final with anonymous function and it will be used for the most time.

document.getElementById('golden-rod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})

