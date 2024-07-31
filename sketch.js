// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v



// The video
let video;
// For displaying the label
let label = "esperando...";
let mensaje = "No hay...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/3P5ug79ZJ/';
//let modelURL = 'https://teachablemachine.withgoogle.com/models/3P5ug79ZJ/';


// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}


function setup() {
  //ctx.fillRect(50, 50, 500, 500);
  createCanvas(640, 520);
  //createCanvas(640, 520);
  
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  
  textAlign(CENTER, CENTER);
  fill(255);
  

  // Pick an emoji, the "default" is train
  let emoji = "⏳";
  if (label == "Libro") {
    emoji = "🌞";
	mensaje= "Libro";
  } else if (label == "Leer") {
    emoji = "🦄";
	mensaje= "Leer";
  } else if (label == "Escribir") {
    emoji = "🎸";
	mensaje= "Escribir";
  } else if (label == "Perdon") {
    emoji = "🎸";
	mensaje= "Perdon";
  } else if (label == "Lunes") {
    emoji = "🎸";
	mensaje= "Lunes";
  }
  else if (label == "Martes") {
    emoji = "🎸";
	mensaje= "Martes";
  }
  else if (label == "Chao") {
    emoji = "🎸";
	mensaje= "Chao";
  }
  else if (label == "Si") {
    emoji = "🎸";
	mensaje= "Si";
  }
  else if (label == "8") {
    emoji = "🎸";
	mensaje= "8";
  }
  else if (label == "Octubre") {
    emoji = "🎸";
	mensaje= "Octubre";
  }
  
  
  
  // Draw the emoji
  textSize(256);
  //text(emoji, width / 2, height / 2);
  textSize(32);
  text(label, width / 2, height - 16);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}
