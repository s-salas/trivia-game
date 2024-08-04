const categories = [
  "CKM Team Trivia",
  "Fields / Tabs in Change Manager",
  "Procedures",
  "RDM Trivia",
];

const questions = [
  // CKM Team Trivia
  [
    "Question 1 placeholder text.", // answer
    "Question 2 placeholder text.", // answer
    "Question 3 placeholder text.", // answer
    "Question 4 placeholder text.", // answer
    "Question 5 placeholder text.", // answer
  ],
  // Fields / Tabs in Change Manager
  [
    "Question 1 placeholder text.", // answer
    "Question 2 placeholder text.", // answer
    "Question 3 placeholder text.", // answer
    "Question 4 placeholder text.", // answer
    "Question 5 placeholder text.", // answer
  ],
  // Procedures
  [
    "Question 1 placeholder text.", // answer
    "Question 2 placeholder text.", // answer
    "Question 3 placeholder text.", // answer
    "Question 4 placeholder text.", // answer
    "Question 5 placeholder text.", // answer
  ],
  // RDM Trivia
  [
    "Question 1 placeholder text.", // answer
    "Question 2 placeholder text.", // answer
    "Question 3 placeholder text.", // answer
    "Question 4 placeholder text.", // answer
    "Question 5 placeholder text.", // answer
  ],
];

const answers = [
  // CKM Team Trivia
  [
    "Answer to question 1",
    "Answer to question 2",
    "Answer to question 3",
    "Answer to question 4",
    "Answer to question 5",
  ],
  // Fields / Tabs in Change Manager
  [
    "Answer to question 1",
    "Answer to question 2",
    "Answer to question 3",
    "Answer to question 4",
    "Answer to question 5",
  ],
  // Procedures
  [
    "Answer to question 1",
    "Answer to question 2",
    "Answer to question 3",
    "Answer to question 4",
    "Answer to question 5",
  ],
  // RDM Trivia
  [
    "Answer to question 1",
    "Answer to question 2",
    "Answer to question 3",
    "Answer to question 4",
    "Answer to question 5",
  ],
];

const players = [
  ["Team Antonio", 0],
  ["Team Deepa", 0],
  ["Team Eugene", 0],
  ["Team Tami", 0],
];

$(document).ready(function () {
  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");
  const resetBtn = document.getElementById("reset-btn");

  let timer;
  let milliseconds = 0;
  let seconds;

  // Set up timer
  startBtn.addEventListener("click", function () {
    if (!timer) {
      timer = setInterval(updateStopwatch, 10); // Update the stopwatch every 10 milliseconds
    }
  });

  stopBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
  });

  resetBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    milliseconds = 0;
    seconds = 20;
    updateDisplay();
  });

  function updateStopwatch() {
    milliseconds -= 10;

    if (milliseconds < 0) {
      milliseconds = 990;
      seconds--;
    }

    if (seconds === 0 && milliseconds === 0) {
      clearInterval(timer);
      timer = null;
    }

    updateDisplay();
  }

  function updateDisplay() {
    let totalMilliseconds = seconds * 1000 + milliseconds;
    let remainingSeconds = Math.floor(totalMilliseconds / 1000);
    let remainingMilliseconds = totalMilliseconds % 1000;

    let remainingMillisecondsString = (remainingMilliseconds / 1000)
      .toFixed(2)
      .slice(2);

    const secString =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
    const msString = remainingMillisecondsString.padStart(2, "0");

    document.getElementById("stopwatch").textContent =
      secString + "." + msString;
  }

  function setupBoard() {
    for (let i = 0; i < categories.length; i++) {
      let col = document.createElement("div");
      col.className = "col-sm text-center";
      let card = document.createElement("div");
      card.className = "card";

      const cardHeader = document.createElement("div");
      cardHeader.className = "card-header";
      const header = document.createElement("h2");
      const headerText = document.createTextNode(categories[i]);
      header.appendChild(headerText);

      const list = document.createElement("ul");
      list.className = "list-group list-group-flush";
      for (let j = 0; j < questions[i].length; j++) {
        const link = document.createElement("a");
        link.setAttribute("href", "");
        link.setAttribute("data-toggle", "modal");
        link.setAttribute("data-target", "#questionModal");
        link.setAttribute("data-category", i.toString());
        link.setAttribute("data-points", ((j + 1) * 100).toString());
        link.setAttribute("data-questionid", j.toString());
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        const amount = document.createTextNode((j + 1) * 100);
        listItem.appendChild(amount);

        list.append(link);
        link.append(listItem);
      }

      $("#gameBoard").append(col);
      col.append(card);
      card.append(cardHeader);
      cardHeader.append(header);
      card.append(list);
    }
  }

  function setScoreboard() {
    $("#scoreboard").empty();
    players.forEach(function (player) {
      let s = "<p class='player-text'>" + player[0] + ": " + player[1] + "</p>";
      $("#scoreboard").append(s);
    });
  }

  function nextQuestion() {
    $("#questionModal").modal("hide");
    setScoreboard();
  }

  setupBoard();
  setScoreboard();

  $("a").click(function () {
    $(this).addClass("opacity");
    $(this).children().addClass("opacity");
  });

  $("#questionModal").on("shown.bs.modal", function (event) {
    let link = $(event.relatedTarget);
    let category = link.data("category");
    let points = parseInt(link.data("points"));
    let questionid = link.data("questionid");

    let modal = $(this);
    modal
      .find(".modal-title")
      .text(categories[category] + " for " + points + " points");
    modal.find(".modal-body p").text(questions[category][questionid]);

    // set the timer based on points
    if (points === 100 || points === 200) {
      seconds = 10;
    } else if (points === 300) {
      seconds = 20;
    } else if (points === 400 || points === 500) {
      seconds = 30;
    }
    milliseconds = 0; // reset milliseconds

    updateDisplay(); // update display with the new time

    $("#answer-btn").show(); // show the answer button
    $("#stopwatch-btns").show(); // show the stopwatch
    $("#player-btns").hide(); // hide the player buttons initially
    $("#incorrect").hide(); // hide incorrect button initially
  });

  $("#answer-btn").click(function () {
    let modal = $("#questionModal");
    modal.find(".modal-body p").text(answers[category][questionid]); // show the answer
    $("#answer-btn").hide(); // hide the answer button
    $("#hint-btn").hide(); // hide the hint button
    $("#multiple-btn").hide(); // hide the multiple choice button
    $("#stopwatch-btns").hide(); // hide the stopwatch
    $("#player-btns").show(); // show the player buttons
    $("#incorrect").show(); // show the incorrect button
  });

  // modify player button click handlers to update score after answer is revealed
  $("#player-1").click(function () {
    players[0][1] += parseInt(points);
    nextQuestion();
  });

  $("#player-2").click(function () {
    players[1][1] += parseInt(points);
    nextQuestion();
  });

  $("#player-3").click(function () {
    players[2][1] += parseInt(points);
    nextQuestion();
  });

  $("#player-4").click(function () {
    players[3][1] += parseInt(points);
    nextQuestion();
  });

  $("#incorrect").click(function () {
    nextQuestion();
  });
});
