const categories = [
  { title: "CKM Team Trivia", subtitle: "Team members within CKM" },
  { title: "Fields / Tabs in Change Manager", subtitle: "" },
  { title: "CKM Procedures", subtitle: "Specific article titles or numbers" },
  { title: "RDM Trivia", subtitle: "Groups, locations and people within RDM" },
];

const questions = [
  // CKM Team Trivia
  [
    "What is Eugene's favorite football team?", // San Francisco 49ers
    "What is the name of Michael's miniature Dachshund?", // Elita
    "During Evonn's presentation on the Rainbow Queue Call, we learned she has two dogs. Name one of the dog breeds.", // Beagle and Dachshund
    "Name two games Karen has hosted on the Rainbow Queue Call.", // Word Chain and Taboo
    "What subject does Deepa have a PhD in?", // English
  ],
  // Fields / Tabs in Change Manager
  [
    "On what tab can you find the SME's name?", // Impact Details
    "Which tab will tell you if an article is mapped to legal?", // Approvals
    "What field will tell you if there is another impact publishing before your impact?", // In Flight Impacts
    "What do you review to determine which nuance to follow?", // Organization and Assessment Units
    "What three fields do you use to filter for new work assignments?", // RDD, Expedited/Urgent, Impact Action
  ],
  // CKM Procedures
  [
    "What is the firm's style guide called?", // Voice of Chase
    "Which procedure tells you how to download and use the Link Automation Tool?", // Link Automation Tool procedure (106548)
    "Which procedure serves as a style guide when writing?<br>Can answer with article for either Ops or CTO.", // Ops 39565 and CTO 73769
    "Which procedure provides details on how to create a PDF file for procedures with images?<br>Can answer with article for either Ops or CTO.", // Ops 101752 and CTO 106959
    "Which procedure provides details on how to republish a previous version of an article?<br>Can answer with article for either Ops or CTO.", // Ops 92605 and CTO 106959
  ],
  // RDM Trivia
  [
    "Which writing manager is the site lead for their location?", // Eugene
    "Which writing manager was recently featured on the Chase homepage?", // Antonio
    "Which two writers presented information about the CKM Knowledge Library in the CKM Town Hall?", // Amanda R and Amanda S
    "On what page can you find additional information on RDM interest groups?", // go/RDM
    "What are the six site locations where we have procedure writers?", // Columbus, Elgin, Mumbai, San Antonio, Tampa, Tempe
  ],
];

const answers = [
  // CKM Team Trivia
  [
    "San Francisco 49ers",
    "Elita",
    "Beagle<br>Dachshund",
    "Word Chain and Taboo",
    "English",
  ],
  // Fields / Tabs in Change Manager
  [
    "Impact Details",
    "Approvals",
    "In Flight Impacts",
    "Organization and Assessment Units",
    "RDD, Expedited/Urgent, Impact Action",
  ],
  // Procedures
  [
    "Voice of Chase",
    "Link Automation Tool procedure (106548)",
    "<strong>Ops:</strong> Knowledge Management - Procedure Writers: KM writing standards - A to Z (39565)<br><strong>CTO:</strong> Operations Documentation Style Guide CTOR00703 (73769)",
    "<strong>Ops:</strong> CKM - Writing functions in Word and KB Admin (101752)<br><strong>CTO:</strong> CKM CTO Writing Functions in MS Word and KB Admin CTOS06905 (106959)",
    "<strong>Ops:</strong> CKM - Document writer role (92605)<br><strong>CTO:</strong> CKM CTO Writing Functions in MS Word and KB Admin CTOS06905 (106959)",
  ],
  // RDM Trivia
  [
    "Eugene",
    "Antonio",
    "Amanda Ryan and Amanda Schleich",
    "go/RDM",
    "1) Columbus, OH <br>2) Elgin, IL <br>3) Mumbai, India <br>4) San Antonio, TX<br>5) Tampa, FL <br>6) Tempe, AZ",
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
  let seconds = 20;
  let currentPoints = 0; // Add this to track the current points

  // Function to reset the timer based on the current points
  function resetTimer() {
    if (currentPoints === 100 || currentPoints === 200) {
      seconds = 10;
    } else if (currentPoints === 300) {
      seconds = 20;
    } else if (currentPoints === 400 || currentPoints === 500) {
      seconds = 30;
    }
    milliseconds = 0;
    updateDisplay();
  }

  // Set up the timer
  startBtn.addEventListener("click", function () {
    if (!timer) {
      timer = setInterval(updateStopwatch, 10); // Update the stopwatch every 10 milliseconds
    }
  });

  stopBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null; // Reset the timer variable
  });

  resetBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    resetTimer(); // Call the resetTimer function
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
      
      // Create a header for the category title
      const header = document.createElement("h2");
      const headerText = document.createTextNode(categories[i].title);
      header.appendChild(headerText);
  
      // Create a subtitle element
      const subtitle = document.createElement("p");
      subtitle.className = "subtitle-text";
      const subtitleText = document.createTextNode(categories[i].subtitle);
      subtitle.appendChild(subtitleText);
  
      // Append title and subtitle to the card header
      cardHeader.appendChild(header);
      cardHeader.appendChild(subtitle);
  
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
    category = link.data("category");
    currentPoints = parseInt(link.data("points")); // Update current points
    questionid = link.data("questionid");
  
    let modal = $(this);
  
    // Set the modal title with category name and points, no subtitles
    modal
      .find(".modal-title")
      .html(categories[category].title + " for " + currentPoints + " points");
  
    // Set the modal body with the corresponding question
    modal.find(".modal-body p").html(questions[category][questionid]);
  
    resetTimer(); // Call resetTimer to set the timer correctly
  
    $("#answer-btn").show(); // Show the answer button
    $("#stopwatch-btns").show(); // Show the stopwatch
    $("#player-btns").hide(); // Hide the player buttons initially
    $("#incorrect").hide(); // Hide incorrect button initially
  });
  

  $("#answer-btn").click(function () {
    let modal = $("#questionModal");
    modal.find(".modal-body p").html(answers[category][questionid]); // show the answer
    $("#answer-btn").hide(); // hide the answer button
    $("#hint-btn").hide(); // hide the hint button
    $("#multiple-btn").hide(); // hide the multiple choice button
    $("#stopwatch-btns").hide(); // hide the stopwatch
    $("#player-btns").show(); // show the player buttons
    $("#incorrect").show(); // show the incorrect button
  });

  $("#player-1").click(function () {
    players[0][1] += currentPoints;
    nextQuestion();
  });

  $("#player-2").click(function () {
    players[1][1] += currentPoints;
    nextQuestion();
  });

  $("#player-3").click(function () {
    players[2][1] += currentPoints;
    nextQuestion();
  });

  $("#player-4").click(function () {
    players[3][1] += currentPoints;
    nextQuestion();
  });

  $("#incorrect").click(function () {
    nextQuestion();
  });
});
