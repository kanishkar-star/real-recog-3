function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    val="";
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uONnW2aTI/model.json', modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function draw(){
image(video, 0, 0, 300, 300);
classifier.classify(video, gotresults);
if(val == 'THRESHOLD'){
    filter(THRESHOLD);
}
if(val == 'GRAY'){
    filter(GRAY);
}
if(val == 'OPAQUE'){
    filter(OPAQUE);
}
if(val == 'INVERT'){
    filter(INVERT);
}
if(val == 'POSTERIZE'){
    filter(POSTERIZE, 3);
}
if(val == 'DILATE'){
    filter(DILATE);
}
if(val == 'BLUR'){
    filter(BLUR, 3);
}
if(val == 'ERODE'){
    filter(ERODE);
}
}

function gotresults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_person_name").innerHTML = results[0].label;
        document.getElementById("result_accuracy_name").innerHTML = results[0].confidence.toFixed(3);
    }
}

function threshold(){
    val="THRESHOLD";
    draw();
}

function opaque(){
    val="OPAQUE";
    draw();
}

function gray(){
    val="GRAY";
    draw();
}

function invert(){
    val="INVERT";
    draw();
}

function posterize(){
    val="POSTERIZE";
    draw();
}

function dilate(){
    val="DILATE";
    draw();
}

function blur(){
    val="BLUR";
    draw();
}

function erode(){
    val="ERODE";
    draw();
}