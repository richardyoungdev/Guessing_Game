console.log("hello world")
console.log('hello richard')
console.log('1:54PM: WORKING NOW!!!!!! FEW! :)')


const randomNumber = (Math.floor((Math.random() * 100) + 1))
// console.log("Random Number is " + randomNumber)


/// examples below
const button = document.querySelector("button")
console.log("Random Number is " + randomNumber)


button.addEventListener("click", function(){
    // get input value 
    const searchTxt = document.querySelector('#guess-number').value;
    const convertStringToNum = Number(searchTxt)

    console.log("Typeof is: " + typeof searchTxt)
    console.log("Input Value is " + searchTxt)
    console.log("Random Number is " + randomNumber)
    // if assigned input value is blank, do not change background color
    if (convertStringToNum === randomNumber){
        console.log("Congrats! You guessed the right number!")
    }

    else {
        console.log("Try again. Guess another number!")
    }
})

const inputOnEnter = document.querySelector("#guess-number")
inputOnEnter.addEventListener('keyup', function(event){
    if(event.code === 'Enter'){
        event.preventDefault()

    // get input value 
    const searchTxt = document.querySelector('#guess-number').value;
    const convertStringToNum = Number(searchTxt)

    console.log("Typeof is: " + typeof searchTxt)
    console.log("Input Value is " + searchTxt)
    console.log("Random Number is " + randomNumber)
    // if assigned input value is blank, do not change background color
    if (convertStringToNum === randomNumber){
        console.log("Congrats! You guessed the right number!")
    }

    else {
        console.log("Try again. Guess another number!")
    }
    }
})
