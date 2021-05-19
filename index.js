//Webcam.attach( livecam );
camera = document.getElementById("camera");
Webcam.set({
width  : 350,
height : 300,
image_format : 'png',
png_quality : 90
})
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap ( function (data_uri) {
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+ data_uri +'"/>';

    });
}
console.log('ml5 version:', ml5.version);
classifier.ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]' , modelLoaded);



camera = document.getElementById("camera");

function check()
{
    img = document.getElementById('camera');
    classifier.classify(img , gotResult);
}

function gotResult(error , Results) 
{
    if (error) {
        console.error(error);
    }
    else {
    console.log(Results);
  
    document.getElementById("result_object_name").innerHTML = results[0].label;
    
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
