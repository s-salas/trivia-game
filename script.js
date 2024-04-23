const categories = ["Fiesta", "The Team", "Come Sail Away", "Taylor Swift Wrote A Song About Me", "Based On A Book", "Music Legends"];
const questions = [
  [
    // Fiesta
    "The oldest Fiesta event is the Battle of the ______ parade.", // Flowers
    "What does 'NIOSA' stand for?", // A Night In Old San Antonio
    "What collectible items are traded and worn during Fiesta to commemorate various events and organizations?", // Medals
    "Since it began, the first year Fiesta wasn't held was in 1918 due to which event going on at the time?", // WW1
    "Proceeds raised during Oyster Bake go directly to students at which university?", // St. Mary's University
  ],
  [
    // The Team
    "Eugene is a fan of which NFL Team?", // San Francisco 49ers
    "What's the name of Luis' dog?", // Rue
    "What's the name of Shelby's older gray cat?", // Motley
    "Evonn has two dogs. Name the breed for at least one of them.", // Daschund or Beagle
    "How many sons does Michael have?", // One
  ],
  [
    // Come sail away
    "'You're gonna need a bigger boat' is a line from which movie?", // Jaws
    "Which country did Christopher Columbus set sail from before he came to America?", // Spain
    "What's the name of Tom Hanks' volleyball friend in the movie 'Cast Away'?",
    "How many oceans are there in the world?", // Five
    "What's the name of the ship's captain in 20,000 Leagues Under the Sea?", // Captain Nemo
  ],
  [
    // Taylor Swift
    "Which boy band is Harry Styles a former member of?", // One Direction
    "Which rapper infamously interrupted Taylor's acceptance speech at the 2009 VMAs?", // Kanye West
    "Who is believed to be the inspiration for the song 'Dear John'?", // John Mayer
    "Which well-known popstar's real name is Katheryn Hudson?", // Katy Perry
    "Actor Jake Gyllenhaal received his first and only Oscar nomination for his role in which movie?", // Brokeback Mountain?
  ],
  [
    // Based on a book
    "What was the name of Michael Crichton's novel about dinosaurs and theme parks that later became a successful movie franchise?", // Jurassic Park
    "Shakespeare's Hamlet heavily inspired the story for which animated Disney film?", // The Lion King
    "'The Body' by Stephen King was adapted into which movie?", // Stand By Me
    "Which 2014 movie involves a man that becomes the prime suspect in his wife's disappearance?", // Gone Girl
    "Which movie tells the true story about the CIA operation to rescue six Americans during the Iran hostage crisis by pretending to be a Hollywood film crew?", // Argo
  ],
  [
    // Music Legends
    "'Graceland' is a mansion in Memphis, TN that was once owned by which rock legend?", // Elvis Presley
    "Which rock guitarist played on Michael Jackson's song 'Beat It'?", // Van Halen
    "Which musician performed the Star Spangled Banner at Woodstock in 1969?", // Jimi Hendrix
    "Who is the alien alter ego of David Bowie?", // Ziggy Stardust
    "Which member of the Beatles wrote 'Here Comes The Sun'?", // George Harrison
  ],
];

const answers = [
  [
    // Fiesta
    "Flowers",
    "A Night In Old San Antonio",
    "Medals",
    "World War 1",
    "St. Mary's University"
  ],
  [
    // The Team
    "San Francisco 49ers",
    "Rue",
    "Motley",
    "Beagle and Dachshund",
    "One"
  ],
  [
    // Come sail away
    "Jaws",
    "Spain",
    "Wilson",
    "Five: Arctic, Atlantic, Indian, Pacific, and Southern (Antarctic)",
    "Captain Nemo",
  ],
  [
    // Taylor Swift
    "One Direction",
    "Kanye West",
    "John Mayer",
    "Katy Perry",
    "Brokeback Mountain"
  ],
 [
  // Based on a book
    "Jurassic Park",
    "The Lion King",
    "Stand By Me",
    "Gone Girl",
    "Argo"
 ],
 [
  // Music legends
    "Elvis Presley",
    "Eddie Van Halen",
    "Jimi Hendrix",
    "Ziggy Stardust",
    "George Harrison"
 ],
]

const hints = [
  [
    // Fiesta
    "This is a plant that's often used as gifts for various occasions.",
    "This event showcases the cultural HISTORY of San Antonio.",
    "These items are used as accessories to showcase unique designs and themes.",
    "This massive event resulted in conflict and catastrophe all over the world.",
    "This university has the only law school in San Antonio."
  ],
  [
    // The Team
    "This team made an appearance in the Super Bowl this year.",
    "Rhymes with 'Blue.'",
    "His name is a nod to a rock band.",
    "They are both small breeds.",
    "He has five kids in total with more girls than boys."
  ],
  [
    // Come sail away
    "This movie involves a shark.",
    "This country is located south of France.",
    "The volleyball is named after the company it was made by.",
    "There are less oceans than there are continents.",
    "The captain shares a name with a certain underwater Pixar character.",
  ],
  [
    // Taylor Swift
    "This group became famous after appearing on The X Factor.",
    "He used to be married to a Kardashian.",
    "This person has dated other famous women including Jessica Simpson and Jennifer Aniston.",
    "She once had a backup dancer that became an internet sensation known as 'Left Shark'.",
    "The movie also starred Heath Ledger."
  ],
  [
    // Based on a book
    "The first movie was released in the 1990's and directed by Steven Spielberg.",
    "In Hamlet, the main character sets out to avenge the death of his father.",
    "Even though Stephen King is known for horror, this movie is actually considered a drama.",
    "The book that the movie's based on was written by Gillian Flynn.",
    "Ben Affleck directed and starred in the movie, which ended up winning several awards."
  ],
  [
    // Music legends
    "This person was known as the King of Rock and Roll.",
    "His band had the same name as him.",
    "This person is sometimes referred to as the 'Voodoo Child.'",
    "This alter ego character is known for his lightning bolt makeup and glamorous outfits.",
    "He was known as 'the quiet one'."
  ]
]

const multipleChoice = [
  [
    // Fiesta
    "A) Cactus, B) Fruit, C) Flowers, D) Palm trees",
    "A) Never-ending Indulgence of Salsa and Avocados, B) A Night in Old San Antonio, C) A Night in Overcrowded Street Assembly, D) Nonstop Intake of Snacks and Alcohol",
    "A) Coins, B) Hats, C) Masks, D) Medals",
    "A) The Black Plague, B) The Great Depression, C) World War I, D) World War II",
    "A) Incarnate Word, B) Our Lady of the Lake, C) St. Mary's, D) Trinity"
  ],
  [
    // The Team
    "A) Dallas Cowboys, B) Kansas City Chiefs, C) Los Angeles Rams, D) San Francisco 49ers",
    "A) Drew, B) Lou, C) Rue, D) True",
    "A) Bono, B) Motley, C) Weezer, D) Zeppelin",
    "A) Beagle, B) Daschund, C) Pomeranian, D) Shih Tzu",
    "A) 0, B) 1, C) 2, D) 3"
  ],
  [
    // Come sail away
    "A) Deep Blue Sea, B) Jaws, C) Open Water, D) Sharknado",
    "A) Italy, B) Mexico, C) Portugal, D) Spain",
    "A) Easton, B) Nike, C) Spalding, D) Wilson",
    "A) Three, B) Four, C) Five, D) Six",
    "A) Captain Dory, B) Captain Luca, C) Captain Marlin, D) Captain Nemo",
  ],
  [
    // Taylor Swift
    "A) Backstreet Boys, B) The Jonas Brothers, C) One Direction, D) The Wanted",
    "A) Drake, B) Jay Z, C) Kanye West, D) Travis Scott",
    "A) Johnny Depp, B) John Legend, C) John Mayer, D) John Stamos",
    "A) Ariana Grande, B) Katy Perry, C) Lady Gaga, D) Pink",
    "A) Brokeback Mountain, B) Donnie Darko, C) Prisoners, D) Zodiac"
  ],
  [
    // Based on a book
    "A) Ice Age: Dawn of the Dinosaurs, B) Jurassic Park, C) The Land Before Time, D) Tammy and the T-Rex",
    "A) Bambi, B) Finding Nemo, C) The Lion King, D) Mulan",
    "A) Gerald's Game, B) Hearts in Atlantis, C) Shawshank Redemption, D) Stand By Me",
    "A) Big Little Lies, B) The Girl on the Train, C) Gone Girl, D) The Lovely Bones",
    "A) Argo, B) Black Hawk Down, C) Munich, D) Zero Dark Thirty"
  ], 
  [
    // Music Legends
    "A) Bob Dylan, B) Elvis Presley, C) Jim Morrison, D) Kurt Cobain",
    "A) Alice Cooper, B) Bon Jovi, C) Tom Petty, D) Van Halen",
    "A) Eric Clapton, B) Kurt Cobain, C) Jimi Hendrix, D) Paul McCartney",
    "A) Major Tom, B) Sgt. Pepper, C) Slim Shady, D) Ziggy Stardust",
    "A) George Harrison, B) John Lennon, C) Paul McCartney, D) Ringo Starr"
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
    let s = "<p class='player-text'>" + player[0] + ": " + player[1] + "</p>";
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
    let questionText = (questions[category][questionid]); // get the question text
    let hintText = hints[category][questionid]; // get hint text
    let questionPara = $("<p>").text(questionText);
    let hintPara = $("<p>").text("Hint: " + hintText);
    modal.find(".modal-body p").empty().append(questionPara, hintPara); // show question and hint
    $("#hint-btn").hide(); // hide the hint button
    $("#answer-btn").show(); // show the answer button
    $("#multiple-btn").show(); // show the multiple choice button
    points = halfPoints; // update points awarded to half
  });

  $("#multiple-btn").click(function () {
    let modal = $("#questionModal");
    let quarterPoints = Math.floor(parseInt(points) / 2); // calculate quarter of the points
    let questionText = (questions[category][questionid]); // get the question text
    let hintText = hints[category][questionid]; // get hint text
    let questionPara = $("<p>").text(questionText);
    let hintPara = $("<p>").text("Hint: " + hintText);
    let choices = multipleChoice[category][questionid].split(', '); // split the multiple choices by comma and space
    let choicesHtml = ""; // initialize an empty string to store HTML for choices
    choices.forEach(choice => {
      choicesHtml += "<p>" + choice + "</p>"; // create paragraph element for each choice
    });
    modal.find(".modal-body p").empty().append(questionPara, hintPara, choicesHtml); // show multiple choices
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