
let speed=900;
let speedRange_button=document.querySelectorAll(".speedRange button");
let speedRange=document.querySelector(".speedRange");
let start=document.querySelector("#start");
let pic=document.querySelectorAll(".pic");
let score=document.querySelector("#score");
let countdown=document.querySelector("#countdown");
// let start_But=document.querySelector(".start_But");
// console.log(speedRange);

let i=true;
let rotate=false;
let setImg;
let randomNumber;
let number;
let sum=0;
let seconds=30;

// speedrang button has has 3 arrary of small medium hard
speedRange_button.forEach((elem)=>
{
    // add listener which speed can selected
    elem.addEventListener("click",()=>
    {
        // it set the speed 
        if(elem.innerText==="Simple")
            speed=900;
        else if(elem.innerText==="Medium")
            speed=800;
        else if(elem.innerText==="Hard")
            speed=700;
        // it remove the buttons of small medium hard
        speedRange.style.display="none";
    });
});

// it start the game by using start button
start.addEventListener("click",()=>
{
    speedRange.style.display="none";
    // if the button click first time the game is started by i=true
    if(i)
    {
        i=false;// when ever the game start the i is convert to false then it goes to reset game
        // console.log("if");
        start.innerText="Restart Game";
        // console.log(speed);

        // function is used to generate the random number
        sendTheRandom();
        // it set the timmer for 30sec
        running=setInterval(()=>
        {
            // console.log(seconds++);
            countdown.innerText=--seconds;
            if(seconds===0)
            {
                // when the second is 0 when we need to set the clear the running and also stop the randomnumber generation
                clearInterval(running);
                clearInterval(refreshIntervalId);
                // it set the score
                sum=0;
                // it remove the rakoon img
                setImg.style.display="none";
                // it set the seconds 30sec for timmer
                seconds=30;
            }
        },1000);
    }
    else// button click second time the game is reset the game 
    {
        // display the button of small medium and hard
        speedRange.style.display="flex";
        // it give the new start of the game
        i=true;
        // it displays the button as start game
        start.innerText="Start Game";
        // console.log("else");

        // when the second is 0 when we need to set the clear the running and also stop the randomnumber generation
        clearInterval(refreshIntervalId);
        clearInterval(running);
        seconds=30;// it set the seconds 30sec for timmer for console page
        countdown.innerText=30;// it set the seconds 30sec for timmer for web page
        setImg.style.display="none";// it remove the rakoon img
        sum=0;// it set the score for console
        score.innerText=sum;// it set the score for web page
    }
});

// sending the random number
let sendNumber=(number)=>
{
    // when the number generated the rotate sets to true
    rotate=true;
    // it create the div
    setImg=document.createElement("div");
    // create the class="cartoon" for above div
    setImg.classList.add("cartoon");
    //in that cartoon div we insert the img tag
    setImg.innerHTML="<img src='cartoon.png' height='100px' width='100px' style='border-radius: 50px;border:3px solid white'>";
    // positioning to the cartoon div to the purpose of movement
    setImg.style.position="relative";
    setImg.style.top="60px";

    // pic has a 9 seperate divs it like a arrray ,,, the append is used to insert the cartoon div into the pic[number(specific location)]
    pic[number].append(setImg);

    //if the mouse the click the cartoon div event activated
    setImg.addEventListener("click",()=>
    {
        //even ever the mouse click the cartoon div u get 10 points
        sum+=10;
        // that scored point in display in web page in score class
        score.innerText=sum;
    });
};

// it is the function to create the random numbers
const sendTheRandom=()=>
{
    // set interval is used to create the random number at specific speed variation like small medium and hard level
    refreshIntervalId=setInterval(()=>
    {
        // the rotate is true it delete the racoon img and set rotate false
        if(rotate)
        {
            setImg.style.display="none";
            rotate=false;
        }
        // the method is used to create the random number
        randomNumber=Math.floor(Math.random()*pic.length);
        sendNumber(randomNumber);
        // console.log(randomNumber);
    },speed);
};

