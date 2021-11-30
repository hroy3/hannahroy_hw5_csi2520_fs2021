//Server Landing Page
const express = require("express");
const ejs = require("ejs");


var counter = 0;

//Create express app
const app = express();

//Middleware: Body parser, view engine, set static folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));



//Server Route handlers (for every page?)
app.get("/", (req, res) => {
    res.render("index");
  });

app.get("/my_resume", (req, res) => {
    res.render("./html/my_resume");
  });

app.get("/my_fun_facts", (req, res) => {
    res.render("./html/my_fun_facts");
  });

  app.get("/trivia", (req, res) => {
    res.render("./html/trivia");
  });

//Routes for each question and answer on the trivia page
app.post("/answerq1", (req, res) => {
  let correctAnswer1 = "C";
  let question1Answer = req.body.q1Input;

  //If else to check if submitted answer is correct
  //If so, increment counter
  if (question1Answer === correctAnswer1) {
    res.send("Answer Submitted");
    counter++;
  } else {
    res.send("Answer Submitted");
  }
  
  console.log(question1Answer);
  console.log(counter);
});

app.post("/answerq2", (req, res) => {
  let correctAnswer2 = "A";
  let question2Answer = req.body.q2Input;

  //If else to check if submitted answer is correct
  //If so, increment counter
  if (question2Answer === correctAnswer2) {
    res.send("Answer Submitted");
    counter++;
  } else {
    res.send("Answer Submitted");
  }
  
  console.log(question2Answer);
  console.log(counter);
});

app.post("/answerq3", (req, res) => {
  let correctAnswer3 = "B";
  let question3Answer = req.body.q3Input;

  //If else to check if submitted answer is correct
  //If so, increment counter
  if (question3Answer === correctAnswer3) {
    res.send("Answer Submitted");
    counter++;
  } else {
    res.send("Answer Submitted");
  }
  
  console.log(question3Answer);
  console.log(counter);
});

app.post("/answerq4", (req, res) => {
  let correctAnswer4 = "D";
  let question4Answer = req.body.q4Input;

  //If else to check if submitted answer is correct
  //If so, increment counter
  if (question4Answer === correctAnswer4) {
    res.send("Answer Submitted");
    counter++;
  } else {
    res.send("Answer Submitted");
  }
  
  console.log(question4Answer);
  console.log(counter);
});


app.post("/answerq5", (req, res) => {
  let correctAnswer5 = "C";
  let question5Answer = req.body.q5Input;

  //If else to check if submitted answer is correct
  //If so, increment counter
  if (question5Answer === correctAnswer5) {
    res.send("Answer Submitted");
    counter++;
  } else {
    res.send("Answer Submitted");
  }
  
  console.log(question5Answer);
  console.log(counter);
});


//readData Route to display the final score in the counter
app.post("/finalscore", (req, res) => {
  res.send("Final Score: " + counter);
});

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));