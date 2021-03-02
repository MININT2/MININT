/*FRAMELIMITER START*/
var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

startAnimating(15);

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    console.log(startTime);
    animate();
}
function animate() {
    // stop
    if (stop) {
        return;
    }
    // request another frame
    requestAnimationFrame(animate);
    // calc elapsed time since last loop
    now = Date.now();
    elapsed = now - then;
    // if enough time has elapsed, draw the next frame
    if (elapsed > fpsInterval) {
        // Get ready for next frame by setting then=now, but...
        // Also, adjust for fpsInterval not being multiple of 16.67
        then = now - (elapsed % fpsInterval);
        // draw stuff here
        generate_noise(ctx); 
        // TESTING...Report #seconds since start and achieved fps.
        /*var sinceStart = now - startTime;
        var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;*/
    }
}
/*FRAMELIMITER END*/
var canvas = document.getElementById('canvass'),                
/* The getContext() method returns an object  
that provides methods and properties for  
drawing on the canvas. */
ctx = canvas.getContext('2d'); 
/* Setting canvas width and height equal to 
window screen width and height. */
function resize() { 
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 
} 
resize(); 
window.onresize = resize; 
// Function to generate noise effect 
function generate_noise(ctx) { 
    var w = ctx.canvas.width, 
    h = ctx.canvas.height, 
    /* This creates a new ImageData object 
    with the specified dimensions(i.e canvas 
    width and height). All pixels are set to 
    transparent black (i.e rgba(0,0,0,0)). */
    idata = ctx.createImageData(w, h),          
    // Creating Uint32Array typed array 
    buffer32 = new Uint32Array(idata.data.buffer),  
    buffer_len = buffer32.length, 
    i = 0 
    for ( ; i < buffer_len; i++) 
        buffer32[i] =  
            ((255 * Math.random()) | 0) << 24;      
    /* The putImageData() method puts the image 
    data (from a specified ImageData object) 
    back onto the canvas. */
    ctx.putImageData(idata, 0, 0);  
} 
// Creating animation effect 
var toggle = true; 
(function loop() { 
    toggle = !toggle; 
    if (toggle) {          
        // Loop function is called each time 
        // before next repaint. 
        requestAnimationFrame(loop);  
        return; 
    } 
/*requestAnimationFrame(loop);*/ 
})(); 