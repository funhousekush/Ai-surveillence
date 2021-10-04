object = [];
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
    document.getElementById("statuss").innerHTML = "Status: Object detecting";
}
function modelLoaded()
{
    console.log("Model has loaded");
    video.loop();
    video.speed(1);
    video.volume(0);
    status = true
}
function draw()
{
    image(video, 0, 0, 400, 300);
    if (status != "")
    {
        objectdetection.detect(video, gotresults);
        for(i=0; i<object.length ; i++)
        {
            document.getElementById("statuss").innerHTML = "Objects Detectd";
            document.getElementById("detected").innerHTML = "Objects detected are :" + object.length;
            fill(255, 0, 109);
            noFill();
            stroke(255,0,109);
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

function gotresults(error, results)
{
    if (error)
    {
        console.error(error);
    }
    if (results)
    {
        console.log(results);
        object = results;
    }
}