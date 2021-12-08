function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: " + "Detecting Objects";
}

img="";
status="";
function modelLoaded()
{
    console.log("model is loaded");
    status="true";
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }else{
        console.log(results);
        array=results;
    }
    
}

function preload()
{
img=loadImage("bedroom.jpg");
}



array=[];
function draw()
{
    image(img, 0, 0, 300, 300);

    
if(status != "")
{
   

    for(var i=0; i<array.length; i++)
    {
        
        document.getElementById("status").innerHTML="Status: Object Detected";
        stroke("green");
        noFill();
        percentage=floor(array[i].confidence * 100);
        text(array[i].label + " " + percentage + "%" + " ", array[i].x, array[i].y);
        rect(array[i].x, array[i].y, array[i].width, array[i].height);
        document.getElementById("NumberOfObjects").innerHTML="There are 6 objects in the image from which cocossd model has detected 2."
    }
}
}

    
