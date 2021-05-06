const html_reset = document.getElementById("reset");
const html_easy = document.getElementById("easy");
const html_hard = document.getElementById("hard");
const html_num1 = document.getElementById("num1");
const html_num2 = document.getElementById("num2");
const html_btn = document.querySelectorAll(".btn");
const html_message = document.querySelector(".message");
let Answer;
let options = 2;

init();
reset();

function init(){
    html_reset.addEventListener("click", function(){
        html_message.innerText = "";
        reset();
    });
    html_easy.addEventListener("click", function(){ 
        html_message.innerText = "";
        options = 2; 
        reset();
    });
    html_hard.addEventListener("click", function(){ 
        html_message.innerText = "";
        options = 4; 
        reset();
    });

    html_btn.forEach( one => {
        one.addEventListener("click", function(){
            if( this.innerText == Answer){
                html_message.innerText = "Correct!";
                html_message.style.color = "green";
                const div = document.createElement("div");
                div.classList.add("flying");
                html_message.append(div);
                for(let i=0; i<5; i++){
                    const img = document.createElement("img");
                    img.src = "imgs/ballon.png";
                    img.style.height = "150px";
                    img.classList.add('floating');
                    div.appendChild(img);
                }

            } else {
                html_message.innerText = "Try Again!";
                html_message.style.color = "red";
            }
        });
    });
    
}

function reset(){
    const num1 = generateRandomNumber(10);
    const num2 = generateRandomNumber(10);
    Answer = num1 + num2;

    html_num1.innerText = num1;
    html_num2.innerText = num2;

    let answers = [ Answer ];
    while(answers.length < options){
        let r = generateRandomNumber(20);
        if(answers.indexOf(r) === -1) {
            answers.push(r);
        } 
    }

    const swap_num = generateRandomNumber(options);
    let temp = answers[0];
    answers[0] = answers[swap_num]
    answers[swap_num] = temp;

    html_btn.forEach( one => {one.style.display = "none"; } );
    for(let i=0; i<options; i++){
        html_btn[i].innerText = answers[i];
        html_btn[i].style.display = "inline-block";
    }
}

function generateRandomNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
}