//toggle page
let moveToQuestionPage = document.getElementById("to-question-page");
moveToQuestionPage.addEventListener('click', function(){
    window.location.href = "questionPage.html";
})
//date adding
let date = document.getElementById('current-date');
const today = new Date();
const f = new Intl.DateTimeFormat(('en-us'), {
    dateStyle: "full",
})
date.textContent = f.format(today);
//BG change
let bgChangeButton = document.getElementById('bg-btn');
bgChangeButton.addEventListener('click', function(){
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.background = `#${hexVal}`;
})