//Getting Every Required Element!

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeUp = quiz_box.querySelector("header .time_text");

//If Start Quiz Button Is Clicked...
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //Show Info Box
}

//If Exit Button Is Clicked...
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //Hide Info Box
}

//If Continue Button Is Clicked...
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //Hide Info Box
    quiz_box.classList.add("activeQuiz"); //Show Quiz Box
    showQuestions(0);
    QCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let que_count = 0;
let que_number = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const  next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = () => {
    window.location.reload();
}

quit_quiz.onclick = () => {
    window.location.reload();
}

//If Next Button Is Clicked...
next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_number++;
        showQuestions(que_count);
        QCounter(que_number);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
        timeUp.textContent = "Time Left";
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResultBox();
    }
}

//Getting Questions & Options From Array...
showQuestions = (index) => {
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questions[index].number + ". " + questions[index].question + '</span>';
    let option_tag = 
    '<div class="option">' + questions[index].options[0] + '<span></span></div>' + 
    '<div class="option">' + questions[index].options[1] + '<span></span></div>' + 
    '<div class="option">' + questions[index].options[2] + '<span></span></div>' + 
    '<div class="option">' + questions[index].options[3] + '<span></span></div>';

    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");        
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

optionSelected = (answer) => {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //If Answers Are Incorrect, Select Answers Automatically...
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }    
        }
    }

    //Once User Has Chosen An Answer, Disable Remaining Options...
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");        
    }
    next_btn.style.display = "block";
}

function showResultBox() {
    info_box.classList.remove("activeInfo"); //Hide Info Box!
    quiz_box.classList.remove("activeQuiz"); //Hide Quiz Box!
    result_box.classList.add("activeResult"); //Show Result Box!
    const scoreText = result_box.querySelector(".score_text");
    if (userScore === questions.length) {
        let scoreTag = '<span>Wow! You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p>! Perfect score!</span>';
        scoreText.innerHTML = scoreTag;
    } else if (userScore >= questions.length - Math.floor(questions.length / 2)) {
        let scoreTag = '<span>You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p>! You Rock, Cancel That!</span>';
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = '<span>You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p>! Yeah... Stick To Arena.</span>';
        scoreText.innerHTML = scoreTag;
    }
}

startTimer = (time) => {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
            timeUp.textContent = "Time Up!"

            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAns) {
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }    
            }

            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");        
            }
            next_btn.style.display = "block";
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1;
        timeLine.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine);
        }
    }
}

QCounter = (index) => {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index + '</p>Out Of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}