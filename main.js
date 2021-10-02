status = "";
video = "";
function preload()
{
    video = createVideo("video.mp4");
    video.hide();
}

function setup()
{
    canvas = createCanvas(400, 300);
    canvas.center();
}
function start()
{
    objectdetection = ml5.objectDetector("cocossd", modelLoaded); 
    document.getElementById("ststuss").innerHTML = "Status: Object detecting";
}
function modelLoaded()
{
    console.log("Model has loaded");
    video.loop();
    video.speed(1);
    video.volume(1);
}
function draw()
{
    image(video, 0, 0, 400, 300) 
}