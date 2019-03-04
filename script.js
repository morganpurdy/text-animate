const colors = ['#D0EDF1','#479AD1','#2D1832'];
var blobs = document.querySelectorAll("#background path");

blobs.forEach(blob => {
    blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
});
