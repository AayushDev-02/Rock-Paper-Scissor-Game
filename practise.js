
const randomCPValue = (values) => {
   
    let x = Math.floor(Math.random()*3);
   
    return values[x];
   
    return 0;

}

const score = document.querySelector("#player-score");
const hands = document.querySelector("#hands");
const result = document.querySelector("#result");


let x=0,y,z;

const getResult = (userValue, cpValue) =>{

    if( (userValue === "Rock" && cpValue === "Scissors") || (userValue === "Scissors" && cpValue === "Paper") || 
    (userValue === "Paper" && cpValue === "Rock") 
    ){
        x++;
        z = "You Win"
    }
    else if( (userValue === "Scissors" && cpValue === "Rock") || (userValue === "Paper" && cpValue === "Scissors") || 
                (userValue === "Rock" && cpValue === "Paper")
    ){
        x--;
        z = "You Lose"
    }
    else {
        z = "Its Draw"
    }

    y = `👨${userValue} vs 🤖${cpValue}`;


    score.innerText = x;
    hands.innerText = y;
    result.innerText = z;

   
}



const arr = document.querySelectorAll(".rpsButton");

arr.forEach(btn => {
    // console.log(btn);
    btn.onclick = () => {
        const userValue = btn.value;
        const cpValue = randomCPValue(["Rock", "Paper", "Scissors"]);

        getResult(userValue, cpValue);
    }
})

const endBtn = document.querySelector("#endGameButton");
endBtn.onclick = () =>{
    score.innerText = '';
    result.innerText = '';
    hands.innerText = '';
    x=0;
}




