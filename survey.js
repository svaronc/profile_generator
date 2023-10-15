const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name?",
  "have a Nickname?",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favorite (e.g., dinner, brunch, etc.)?",
  "What's your favorite thing to eat for that meal?",
  "Which sport is your absolute favorite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

const answers = [];

function askQuestion(index) {
  if (index < questions.length) {
    rl.question(questions[index], (answer) => {
      answers.push(answer);
      askQuestion(index + 1);
    });
  } else {
    generateProfile();
    rl.close();
  }
}

function generateProfile() {
  const profile = `
    Hi, I'm ${answers[0]}, but you can call me ${answers[1]}. I enjoy ${answers[2]} while ${answers[3]}. My favorite meal is ${answers[4]}, and I love to eat ${answers[5]} during that meal. When I'm not busy, you can find me watching ${answers[6]}, and I'm amazing at ${answers[7]}.
  `;
  console.log(profile);
}

askQuestion(0);