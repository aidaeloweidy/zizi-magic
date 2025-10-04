let answers = [
  "Yes",
  "No",
  "Yay",
  "Nay",
  "Perhaps",
  "Maybe",
  "All in good time",
  "طير في اليد \n خير من عشرة على الشجرة",
  "No, \n now is not the right time",
  "Yes, \n believe in yourself",
  "The answer already \n lies within you",
  "It is but the truth \n you'd once known \n but chosen to forget",
  "Yes. \n You are on the right path",
  "No. \n Find another way.",
  "No, remain grounded \n to who you truly are.",
  "Yes,\n it will lead you to unexpected \n and wonderful things.",
  "Do you really want to know?",
  "ابعد عن الشر وغنيله",
  "Yes, \n slow down and take things \n one step at a time.",
  "No, \n slow down and \n take things one step at a time.",
  "Clear your mind, focus, \n and ask your question again.",
  "Some things are impossible \n to predict in life.",
  "Yes, embody it \n and it will come to you",
  "No, \n you know you deserve better",
  "Yes, plant your seeds here",
  "No. A diseased branch may \n kill your entire tree. \n Cut it off.",
  "Truth is irrelevant here.",
  "It goes both ways.",
];

let currentAnswer = "Asking the muses...";
let isPaused = false;
let fontSize;
let flipDuration = 3000;
let anticipationDuration = 1000;
let answerRevealed = false;
let startTime = 0;
let sparkles = [];
let answerOpacity = 0;
let hasPickedAnswer = false;
let font;

// function preload() {
//   font = loadFont(
//     'https://cdn.glitch.global/b77d51ba-cdf5-4ba1-bf9a-8171fd2524e0/Changa-SemiBold.ttf?v=1728654731597'
//   );
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  fontSize = 50;
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(fontSize);
  // textFont(font);
  fill(255);
  frameRate(30);
  startTime = millis();
}

function draw() {
  background(0);

  generateSparkles();

  let elapsedTime = millis() - startTime;

  if (!answerRevealed && elapsedTime > flipDuration + anticipationDuration) {
    answerRevealed = true;
  }

  if (!hasPickedAnswer && elapsedTime > flipDuration) {
    pickRandomAnswer();
    hasPickedAnswer = true;
  }

  if (answerRevealed) {
    answerOpacity = min(answerOpacity + 5, 255);
  }

  if (elapsedTime <= flipDuration) {
    fill(247, 190, 186);
    text(currentAnswer, width / 2, height / 2);
  } else if (!answerRevealed) {
    fill(0);
  } else {
    textStyle(BOLDITALIC);
    fill(255, 255, 0, answerOpacity);
    text(currentAnswer, width / 2, height / 2);
  }

  drawSparkles();
}

function generateSparkles() {
  for (let i = 0; i < 2; i++) {
    let sparkle = {
      x: random(width),
      y: random(height),
      size: random(2, 10),
      lifetime: 60,
    };
    sparkles.push(sparkle);
  }
}

function drawSparkles() {
  for (let i = sparkles.length - 1; i >= 0; i--) {
    let sparkle = sparkles[i];

    noStroke();
    fill(255, 200, 255, 150);
    ellipse(sparkle.x, sparkle.y, sparkle.size);

    sparkle.lifetime--;

    if (sparkle.lifetime <= 0) {
      sparkles.splice(i, 1);
    }
  }
}

function pickRandomAnswer() {
  currentAnswer = answers[int(random(answers.length))];
}
