
let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message=""
let messageEl=document.getElementById("message-el"); 
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.getElementById("cards-el");
let playerEl=document.getElementById("player-el");
let flag=true;

//player details
let player= {
    name:"shaunak",
    money:200
}
playerEl.textContent=player.name+" : $"+player.money;

//for generating random numbers
function randomCard() {
    let randNum=Math.floor(Math.random()*13+1);
    if(randNum==1) {
        return 11;
    }
    else if(randNum>10) {
        return 10;
    }
    else {
        return randNum;
    }
}

//for each turn of the game
function renderGame() {
    //updating cards message
    cardsEl.textContent="Cards:"
    for(let i=0;i<cards.length;i++) {
        cardsEl.textContent+=cards[i]+" ";
    }
    //updating sum
    sumEl.textContent="Sum: "+sum;
    //checking for blackjack
    if(sum<=20)  {
        message="Do you want another card?"
    }
    else if(sum===21) {
        message="You have got blackjack!";
        hasBlackJack=true;
    }
    else {
        message="You are out of the game!";
        isAlive=false;
    }

    messageEl.textContent=message;
}

//onclick start game
function startGame() {
    let firstCard=randomCard();
    let secondCard=randomCard();
    isAlive=true;
    sum=firstCard+secondCard;
    cards=[firstCard,secondCard];
    if(flag==false) {
        messageEl.textContent="Game already in progress. Try refreshing!!"
    }
    else {
        flag=false;
        renderGame()
    }    
}

// onclick new card
function newCard() {
    if(hasBlackJack || !isAlive ) {
        return;
    }
    let card=randomCard();
    sum+=card;
    cards.push(card);
    renderGame();    
}