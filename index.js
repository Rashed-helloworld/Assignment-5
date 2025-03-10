//toggle page
const moveToQuestionPage = document.getElementById("to-question-page");
moveToQuestionPage.addEventListener('click', function(){
    window.location.href = "questionPage.html";
})
//date adding
const date = document.getElementById('current-date');
const today = new Date();
const currentTime = new Intl.DateTimeFormat(('en-us'), {
    dateStyle: "full",
})
date.textContent = currentTime.format(today);
//BG change
const bgChangeButton = document.getElementById('bg-btn');
bgChangeButton.addEventListener('click', function(){
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.background = `#${hexVal}`;
})
//Complete button functionality
let completeBtn = document.getElementById("complete-btn1");
function mainTask() {
    //alert
    alert('Board Updated Successfully!');
    //task assigned decreases
    const totalTask = document.getElementById('total-task');
    let totalTaskValue = totalTask.textContent;
    totalTask.textContent = `0${totalTaskValue -= 1}`
    //header Task increases
    let headerTask = document.getElementById('header-task');
    headerTask.innerText++;
    //Activity Log updation, I added title class to all card titles
    const title1 = document.getElementById("title1");
    let title = title1.innerText;
    let container = document.getElementById('container');
    const newP = document.createElement('p');
    console.log(title);
    newP.textContent = `You have completed the task ${title} at ${today.getHours()}:${today.getMinutes()}`;
    container.append(newP);
}
mainTask();
