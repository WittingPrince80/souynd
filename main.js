selection = ["otherside.mp3, rev.mp3, strad.mp3 "]
song = "";


rn = Math.floor(Math.random()*2);
console.log(rn);

function preload()
{
   song = loadSound(selection[rn]);

}
function setup()
{
  canvas = createCanvas(600,500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function selectre()
{

    
    rn = Math.floor(Math.random()*2);
    console.log(rn);
    song = loadSound(selection[rn]);
}

function play()
{
    song.play;
    song.setVolume(1);
    song.rate(1);
    selectre();
}