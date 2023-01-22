function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(500,490);
    canvas.position(560,160);
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotePoses);
    }
    
    function modelLoaded(){
    console.log('PoseNet is Initialized!');
    }
    
    function gotePoses(results)
    {
    if(results.length>0){
    console.log(results);
    }
    }
    
    function draw(){
    background('#969A97');
    }