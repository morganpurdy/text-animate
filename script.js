const colors = ['#DA304C','#F4A15D','#163D57', '#F9DCE1'];
var blobs = document.querySelectorAll("#background path");

blobs.forEach(blob => {
    blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
});
