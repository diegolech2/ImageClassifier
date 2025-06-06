// Classifier Variable
let classifier;
// Model URL
let imageModelURL = "https://teachablemachine.withgoogle.com/models/mKvvNR7o9/";


// A variable to hold the video we want to classify
let video;

// Variable for displaying the results on the canvas
let label = "Model loading...";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');


    // Load images from the "images" folder
    iphoneImg = loadImage("data/nophone.png");
    yetiImg = loadImage("data/yeti.jpg");
    bookImg = loadImage("data/quiubole.jpg");
    nothingImg = loadImage("data/detective.jpg");
   

}

function setup() {
  createCanvas(640, 480);
  background(255);

  // Using webcam feed as video input, hiding html element to avoid duplicate with canvas
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();


  classifier.classifyStart(video, gotResult);
}

function draw() {
  // Each video frame is painted on the canvas
  image(video, 0, 0);

  // Printing class with the highest probability on the canvas
    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
    print(label);


  //State Machine
  //cambiar condicional de etiqeta (label) basado en las clases de Teachable Machine para ejecutar cadena interactiva

    if (label == 'iPhone') {

      image(iphoneImg, 500, 100, 100, 100);    

      fill(255);
      textSize(16);
      textAlign(CENTER);
      text(label, width / 2, height - 4);
      print(label);
      print('pasaste por etiqueta1');


  } else if(label == 'Yeti'){
      image(video, 0, 0);

      image(yetiImg, 500, 100, 100, 100);

      fill(255,0,0,100);
      rect(0,0,640,480);

      fill(255);
      textSize(16);
      textAlign(CENTER);
      text(label, width / 2, height - 4);

      print(label);
      print('pasaste por etiqueta2');

  }else if(label == 'Book'){
      image(video, 0, 0);
      image(bookImg, 500, 100, 100, 100);
      fill(0,255,0,100);
      rect(0,0,640,480);

      fill(255);
      textSize(16);
      textAlign(CENTER);
      text(label, width / 2, height - 4);

      print(label);
      print('pasaste por etiqueta3');

  }else if(label == 'Nothing'){
      image(video, 0, 0);
      image(nothingImg, 500, 100, 100, 100);

      fill(0,0,255,100);
      rect(0,0,640,480);

      fill(255);
      textSize(16);
      textAlign(CENTER);
      text(label, width / 2, height - 4);

      print(label);
      print('pasaste por etiqueta4');  
      
  }else if(label == 'Andres'){
    image(video, 0, 0);

    fill(0,0,255,100);
    rect(0,0,640,480);
 
    
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);

    print(label);
    print('pasaste por etiqueta4');  
    

}
  
}

// Callback function for when classification has finished
function gotResult(results) {
  // Update label variable which is displayed on the canvas
  label = results[0].label;
}

  
