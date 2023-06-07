console.log('path connected!');

const video = document.getElementById('video');

function startVideo(){
    navigator.getUserMedia({video: {}}, (stream)=>{
        video.srcObject = stream;
        console.log('Permission allow!');
    }, ()=>{
        console.log('Permission deny!');
    })
}

startVideo();