console.log("hello world")
console.log('hello richard')
console.log('1:54PM: WORKING NOW!!!!!! FEW! :)')


const randomNumber = (Math.floor((Math.random() * 100) + 1))
// console.log("Random Number is " + randomNumber)


/// examples below
const button = document.querySelector("button")
console.log("Random Number is " + randomNumber)

let count = 0;
// console.log(count)

button.addEventListener("click", function(){
    // get input value 
    let searchTxt = document.querySelector('#guess-number').value;
    const convertStringToNum = Number(searchTxt)

        if (searchTxt === ''){
            console.log("please enter valid number from 1-100")
            alert("please enter valid number from 1-100")
            console.log(count)
            return;
        }

    

    if (convertStringToNum === randomNumber){
        console.log("Congrats! You guessed the right number!")
        alert("Congrats! You guessed the right number!")

        console.log(`CONGRATS YOU GOT IT IN ${count+1}`)
    }
    
    else if (convertStringToNum > randomNumber && convertStringToNum < 100){
        alert("WRONG. Guess Lower")
        count++
        console.log("How many wrongs " + count)

        if (convertStringToNum > 100) {
            alert("please enter valid number from 1-100")
            console.log("Updated Count " + count)
        }
        
    }
    else if (convertStringToNum < randomNumber && convertStringToNum > 0){
        alert("WRONG. Guess Higher")
        count++
        console.log("How many wrongs " + count)

        if (convertStringToNum < 1) {
            alert("please enter valid number from 1-100")
            console.log("Updated Count " + count)
        }
    } 

    else {
        console.log("Try again. Guess another number!")
    }

    if (count === 5){
        alert("Game Over. You Lose.")
        // ev.preventDefault()
        count = 0;
        document.querySelector('#guess-number').value = '';
    }
   
})