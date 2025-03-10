//toggle page
const moveToQuestionPage = document.getElementById("to-question-page");
moveToQuestionPage.addEventListener("click", function () {
  window.location.href = "questionPage.html";
});
//date adding
const date = document.getElementById("current-date");
const today = new Date();
const currentTime = new Intl.DateTimeFormat("en-us", {
  dateStyle: "full",
});
date.textContent = currentTime.format(today);
//BG change
const bgChangeButton = document.getElementById("bg-btn");
bgChangeButton.addEventListener("click", function () {
  const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
  document.body.style.background = `#${hexVal}`;
});
//Complete button functionality
const container = document.getElementById("container");

const completeBtn1 = document.getElementById("complete-btn1");
completeBtn1.addEventListener("click", function () {
  completeBtn1.disabled = true;
  completeBtn1.style.background = "#bbb";
  const totalTask = document.getElementById("total-task");
  let totalTaskValue = totalTask.textContent;
  totalTask.textContent = `0${(totalTaskValue -= 1)}`;
  let headerTask = document.getElementById("header-task");
  headerTask.innerText++;
  const title1 = document.getElementById("title1");
  let title = title1.innerText;
  const newP = document.createElement("p");
  newP.textContent = `You have completed the task '${title}' at ${today.getHours()}:${today.getMinutes()}`;
  container.append(newP);
  alert("Board Updated Successfully!");
});

const completeBtn2 = document.getElementById("complete-btn2");
completeBtn2.addEventListener("click", function () {
  completeBtn2.disabled = true;
  completeBtn2.style.background = "#bbb";
  const totalTask = document.getElementById("total-task");
  let totalTaskValue = totalTask.textContent;
  totalTask.textContent = `0${(totalTaskValue -= 1)}`;
  let headerTask = document.getElementById("header-task");
  headerTask.innerText++;
  const title1 = document.getElementById("title2");
  let title = title1.innerText;
  const newP = document.createElement("p");
  newP.textContent = `You have completed the task '${title}' at ${today.getHours()}:${today.getMinutes()}`;
  container.append(newP);
  alert("Board Updated Successfully!");
});

const completeBtn3 = document.getElementById("complete-btn3");
completeBtn3.addEventListener("click", function () {
  alert("Board Updated Successfully!");
  completeBtn3.disabled = true;
  completeBtn3.style.background = "#bbb";
  const totalTask = document.getElementById("total-task");
  let totalTaskValue = totalTask.textContent;
  totalTask.textContent = `0${(totalTaskValue -= 1)}`;
  let headerTask = document.getElementById("header-task");
  headerTask.innerText++;
  const title1 = document.getElementById("title3");
  let title = title1.innerText;
  const newP = document.createElement("p");
  newP.textContent = `You have completed the task '${title}' at ${today.getHours()}:${today.getMinutes()}`;
  container.append(newP);
});

const completeBtn4 = document.getElementById("complete-btn4");
completeBtn4.addEventListener("click", function () {
  alert("Board Updated Successfully!");
  completeBtn4.disabled = true;
  completeBtn4.style.background = "#bbb";
  const totalTask = document.getElementById("total-task");
  let totalTaskValue = totalTask.textContent;
  totalTask.textContent = `0${(totalTaskValue -= 1)}`;
  let headerTask = document.getElementById("header-task");
  headerTask.innerText++;
  const title1 = document.getElementById("title4");
  let title = title1.innerText;
  const newP = document.createElement("p");
  newP.textContent = `You have completed the task '${title}' at ${today.getHours()}:${today.getMinutes()}`;
  container.append(newP);
});

const completeBtn5 = document.getElementById("complete-btn5");
completeBtn5.addEventListener("click", function () {
  alert("Board Updated Successfully!");
  completeBtn5.disabled = true;
  completeBtn5.style.background = "#bbb";
  const totalTask = document.getElementById("total-task");
  let totalTaskValue = totalTask.textContent;
  totalTask.textContent = `0${(totalTaskValue -= 1)}`;
  let headerTask = document.getElementById("header-task");
  headerTask.innerText++;
  const title1 = document.getElementById("title5");
  let title = title1.innerText;
  const newP = document.createElement("p");
  newP.textContent = `You have completed the task '${title}' at ${today.getHours()}:${today.getMinutes()}`;
  container.append(newP);
});

const completeBtn6 = document.getElementById("complete-btn6");
completeBtn6.addEventListener("click", function () {
  alert("Board Updated Successfully!");
  completeBtn6.disabled = true;
  completeBtn6.style.background = "#bbb";
  const totalTask = document.getElementById("total-task");
  let totalTaskValue = totalTask.textContent;
  totalTask.textContent = `0${(totalTaskValue -= 1)}`;
  let headerTask = document.getElementById("header-task");
  headerTask.innerText++;
  const title1 = document.getElementById("title6");
  let title = title1.innerText;
  const newP = document.createElement("p");
  newP.textContent = `You have completed the task '${title}' at ${today.getHours()}:${today.getMinutes()}`;
  container.append(newP);
});

//Clear button
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function () {
  container.innerHTML = "";
  completeBtn1.disabled = false;
  completeBtn1.style.backgroundColor = "#2248e7";
  completeBtn2.disabled = false;
  completeBtn2.style.backgroundColor = "#2248e7";
  completeBtn3.disabled = false;
  completeBtn3.style.backgroundColor = "#2248e7";
  completeBtn4.disabled = false;
  completeBtn4.style.backgroundColor = "#2248e7";
  completeBtn5.disabled = false;
  completeBtn5.style.backgroundColor = "#2248e7";
  completeBtn6.disabled = false;
  completeBtn6.style.backgroundColor = "#2248e7";
});
