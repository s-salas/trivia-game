const categories = ["Fiesta", "The Team", "Come Sail Away", "Taylor Swift Wrote A Song About Me", "Disney/Pixar", "Music Legends"];
const questions = [
  [
    // Fiesta
    "What are Frosty the Snowman's eyes made of?", // Coal
    "What does 'NIOSA' stand for?", // A Night In Old San Antonio
    "Who spies on naughty kids and reports them to Santa?", // Elf on the Shelf
    "Which reindeer shares a name with a household cleaner?", // Comet
    'This football (soccer) award given to The Best FIFA Men\'s Player is French for "Golden Ball."', // What is the Ballon d'Or?
  ],
  [
    // The Team
    "Eugene is a fan of which NFL Team?", // San Francisco 49ers
    "What's the name of Luis' dog?", // Rue
    "In It's A Wonderful Life, what happens every time a bell rings?", // An angel gets its wings
    "In the Christmas classic Die Hard, what's the name of the building that gets taken over by terrorists?", // Nakatomi Plaza
    "What is Patty's all-time favorite movie?", // Fast Times at Ridgmont High
  ],
  [
    // Come sail away
    "'You're gonna need a bigger boat' is a line from which movie?", // Jaws
    "Which country did Christopher Columbus set sail from before he came to America?", // Spain
    "How many oceans are there in the world?", // Five
    "What's the name of the ship's captain in 20,000 Leagues Under the Sea?", // Captain Nemo
    "2 to the 8th power", // What is 256?
  ],
  [
    // Taylor Swift
    "Which boy band is Harry Styles a former member of?", // One Direction
    "Which rapper infamously interrupted Taylor's acceptance speech at the 2009 VMAs?", // What is Gucci?
    "This is Weezy F. Baby's last name.", // What is Carter?
    "Which well-known popstar's real name is Katheryn Hudson?", // Katy Perry
    "Actor Jake Gyllenhaal received his first and only Oscar nomination for his role in which movie?", // Brokeback Mountain?
  ],
  [
    // Disney/Pixar
    "Even miracles take a little time.", // Who is the Fairy Godmother from Cinderella?
    "Ohana means family. Family means no one gets left behind.", // Who is Lilo from Lilo and Stitch?
    "You're braver than you believe, and stronger than you seem, and smarter than you think.", // Who is Winnie the Pooh?
    "The problem is not the problem. The problem is your attitude about the problem.", // Who is Jack Sparrow from Pirates of the Caribbean?
    "You control your destiny -- you don't need magic to do it. And there are no magical shortcuts to solving your problems.", // Who is Merida from Brave?
  ],
  [
    // Music Legends
    "Even miracles take a little time.", // Who is the Fairy Godmother from Cinderella?
    "Which rock guitarist played on Michael Jackson's song 'Beat It'?", // Who is Lilo from Lilo and Stitch?
    "You're braver than you believe, and stronger than you seem, and smarter than you think.", // Who is Winnie the Pooh?
    "The problem is not the problem. The problem is your attitude about the problem.", // Who is Jack Sparrow from Pirates of the Caribbean?
    "You control your destiny -- you don't need magic to do it. And there are no magical shortcuts to solving your problems.", // Who is Merida from Brave?
  ],
];

const answers = [
  [
    // Fiesta
    "Answer 1",
    "A Night In Old San Antonio",
    "Answer 3",
    "Answer 4",
    "Answer 5"
  ],
  [
    // The Team
    "San Francisco 49ers",
    "Rue",
    "Answer 3",
    "Answer 4",
    "Fast Times at Ridgmont High"
  ],
  [
    // Come sail away
    "Jaws",
    "Spain",
    "Five: Arctic, Atlantic, Indian, Pacific, and Southern (Antarctic)",
    "Captain Nemo",
    "Answer 5"
  ],
  [
    // Taylor Swift
    "One Direction",
    "Kanye West",
    "Answer 3",
    "Katy Perry",
    "Brokeback Mountain"
  ],
 [
  // Category 5
    "Answer 1",
    "Answer 2",
    "Answer 3",
    "Answer 4",
    "Answer 5"
 ],
 [
  // Music legends
    "Answer 1",
    "Eddie Van Halen",
    "Answer 3",
    "Answer 4",
    "Answer 5"
 ],
]

const hints = [
  [
    // Fiesta
    "Hint 1",
    "Hint 2",
    "Hint 3",
    "Hint 4",
    "Hint 5"
  ],
  [
    // The Team
    "This team made an appearance in the Super Bowl this year.",
    "Rhymes with 'Blue'",
    "Hint 3",
    "Hint 4",
    "Hint 5"
  ],
  [
    // Come sail away
    "This movie involves a shark.",
    "This country is located south of France.",
    "There are less oceans than there are continents.",
    "The captain shares a name with a certain underwater Pixar character.",
    "Hint 5"
  ],
  [
    // Taylor Swift
    "This group became famous after appearing on The X Factor.",
    "He used to be married to a Kardashian.",
    "Hint 3",
    "She once had a backup dancer that became an internet sensation known as 'Left Shark'.",
    "The movie also starred Heath Ledger."
  ],
  [
    // category
    "Hint 1",
    "His band had the same name as him.",
    "Hint 3",
    "Hint 4",
    "Hint 5"
  ],
  [
    // Music legends
    "Hint 1",
    "His band had the same name as him.",
    "Hint 3",
    "Hint 4",
    "Hint 5"
  ]
]

const multipleChoice = [
  [
    // Fiesta
    "A) text, B) text, C) text, D) text",
    "A) text, B) text, C) text, D) text",
    "A) text, B) text, C) text, D) text",
    "A) text, B) text, C) text, D) text",
    "A) text, B) text, C) text, D) text"
  ],
  [
    // The Team
    "A) Dallas Cowboys, B) Kansas City Chiefs, C) Los Angeles Rams, D) San Francisco 49ers",
    "A) Drew, B) Lou, C) Rue, D) True",
    "A) text, B) text, C) text, D) text",
    "A) text, B) text, C) text, D) text",
    "A) text, B) text, C) text, D) text"
  ],
  [
    // Come sail away
    "A) Deep Blue Sea, B) Jaws, C) Open Water, D) Sharknado",
    "A) Italy, B) Mexico, C) Portugal, D) Spain",
    "A) Three, B) Four, C) Five, D) Six",
    "A) Captain Dory, B) Captain Luca, C) Captain Marlin, D) Captain Nemo",
    "A) text, B) text, C) text, D) text"
  ],
  [
    // Taylor Swift
    "A) Backstreet Boys, B) The Jonas Brothers, C) One Direction, D) The Wanted",
    "A) Drake, B) Jay Z, C) Kanye West, D) Travis Scott",
    "A) text, B) text, C) text, D) text",
    "A) Ariana Grande, B) Katy Perry, C) Lady Gaga, D) Pink",
    "A) Brokeback Mountain, B) Donnie Darko, C) Prisoners, D) Zodiac"
  ],
  [
    // Category 5
    "A) text, B) text, C) text, D) text",
    "A) text, B) text, C) text, D) text",
    "A) text, B) text, C) text, D) text",
    "A) text, B) text, C) text, D) text",
    "A) text, B) text, C) text, D) text"
  ], 
  [
    // Music Legends
    "A) text, B) text, C) text, D) text",
    "A) Alice Cooper, B) Bon Jovi, C) Tom Petty, D) Van Halen",
    "A) text, B) text, C) text, D) text",
    "A) text, B) text, C) text, D) text",
    "A) text, B) text, C) text, D) text"
  ],
]

const players = [
  ["Eugene", 0],
  ["Evonn", 0],
  ["Kayla", 0],
  ["Lily", 0],
  ["Luis", 0],
  ["Mary", 0],
  ["Michael", 0],
  ["Patty", 0]
];

$(document).ready(function () {
  const startBtn = document.getElementById('start-btn');
  const stopBtn = document.getElementById('stop-btn');
  const resetBtn = document.getElementById('reset-btn');

let timer;
let milliseconds = 0;
let seconds = 20;

// set up timer

startBtn.addEventListener('click', function () { 
  // Start the stopwatch only if it's not already running
  if (!timer) {
    timer = setInterval(updateStopwatch, 10); // Update the stopwatch every 10 milliseconds
  }
});

stopBtn.addEventListener('click', function () { 
  // Stop the stopwatch
  clearInterval(timer);
  timer = null; // Reset the timer variable
});

resetBtn.addEventListener('click', function () { 
  // Reset the stopwatch
  clearInterval(timer);
  timer = null;
  milliseconds = 0;
  seconds = 20;
  updateDisplay();
});

function updateStopwatch() { 
  // decrement milliseconds
  milliseconds -= 10;

  // Check if milliseconds reach zero
  if (milliseconds < 0) {
    milliseconds = 990;
    seconds--;
  }

  // Check if the timer reaches zero
  if (seconds === 0 && milliseconds === 0) {
    clearInterval(timer);
    timer = null;
  }

  // Update the display
  updateDisplay();
}

function updateDisplay() {
  // Calculate total milliseconds
  let totalMilliseconds = (seconds * 1000) + milliseconds;

  // Calculate remaining seconds and milliseconds
  let remainingSeconds = Math.floor(totalMilliseconds / 1000);
  let remainingMilliseconds = totalMilliseconds % 1000;

  // Display remaining seconds and milliseconds with leading zeros
  const secString = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
  const msString = remainingMilliseconds < 100 ? '0' + remainingMilliseconds : remainingMilliseconds.toString().padStart(3, '0');

  // Update the HTML element with id 'stopwatch' with the formatted time
  document.getElementById('stopwatch').textContent = secString + '.' + msString;
}

});

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
    let s = "<p>" + player[0] + ": " + player[1] + "</p>";
    $("#scoreboard").append(s);
  });
}

function nextQuestion() {
  $("#questionModal").modal("hide");
  setScoreboard();
}

$(document).ready(function () {
  let category = "";
  let points = "";
  let questionid = "";

  setupBoard();
  setScoreboard();

  $("a").click(function () {
    $(this).addClass("opacity");
    $(this).children().addClass("opacity");
  });

  $("#questionModal").on("shown.bs.modal", function (event) {
    let link = $(event.relatedTarget);
    category = link.data("category");
    points = link.data("points");
    questionid = link.data("questionid");

    let modal = $(this);
    modal.find(".modal-title").text(categories[category] + " for " + points + " points");
    modal.find(".modal-body p").text(questions[category][questionid]);
    $("#answer-btn").show(); // show the answer button
    $("#hint-btn").show(); // show the hint button
    $("#stopwatch-btns").show(); // show the stopwatch
    $("#player-btns").hide(); // hide the player buttons initially
    $("#multiple-btn").hide(); // hide the multiple choice button initially
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

  $("#hint-btn").click(function () {
    let modal = $("#questionModal");
    let halfPoints = Math.floor(parseInt(points) / 2); // calculate half the points
    modal.find(".modal-body p").text(hints[category][questionid]); // show hint
    $("#hint-btn").hide(); // hide the hint button
    $("#answer-btn").show(); // show the answer button
    $("#multiple-btn").show(); // show the multiple choice button
    points = halfPoints; // update points awarded to half
  });

  $("#multiple-btn").click(function () {
    let modal = $("#questionModal");
    let quarterPoints = Math.floor(parseInt(points) / 2); // calculate quarter of the points
    let choices = multipleChoice[category][questionid].split(', '); // split the multiple choices by comma and space
    let choicesHtml = ""; // initialize an empty string to store HTML for choices
    choices.forEach(choice => {
      choicesHtml += "<p>" + choice + "</p>"; // create paragraph element for each choice
    });
    modal.find(".modal-body p").html(choicesHtml); // show multiple choices
    $("#multiple-btn").hide(); // hide the multiple choice button
    $("#answer-btn").show(); // show the answer button
    points = quarterPoints; // update points awarded to a quarter
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

  $("#player-5").click(function () {
    players[4][1] += parseInt(points);
    nextQuestion();
  });

  $("#player-6").click(function () {
    players[5][1] += parseInt(points);
    nextQuestion();
  });

  $("#player-7").click(function () {
    players[6][1] += parseInt(points);
    nextQuestion();
  });

  $("#player-8").click(function () {
    players[7][1] += parseInt(points);
    nextQuestion();
  });

  $("#incorrect").click(function () {
    nextQuestion();
  });
});
