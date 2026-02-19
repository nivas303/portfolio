const canvas = document.getElementById("frameCanvas");
const context = canvas.getContext("2d");

/* TOTAL NUMBER OF FRAMES */
const frameCount = 240;

/* IMAGE PATH FORMAT */
const currentFrame = (index) =>
  `frames/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;

/* STORE IMAGES */
const images = [];
const animation = { frame: 1 };

/* PRELOAD IMAGES */
for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

/* SET CANVAS SIZE */
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

/* DRAW FRAME */
function render() {
  const img = images[animation.frame - 1];
  if (!img) return;

  context.clearRect(0, 0, canvas.width, canvas.height);

  /* Maintain aspect ratio */
  const scale = Math.max(
    canvas.width / img.width,
    canvas.height / img.height
  );

  const x = (canvas.width / 2) - (img.width / 2) * scale;
  const y = (canvas.height / 2) - (img.height / 2) * scale;

  context.drawImage(
    img,
    x,
    y,
    img.width * scale,
    img.height * scale
  );
}

/* SCROLL-BASED FRAME CONTROL */
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const maxScroll =
    document.querySelector(".animation-container").offsetHeight - window.innerHeight;

  const scrollFraction = scrollTop / maxScroll;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  animation.frame = frameIndex + 1;
  requestAnimationFrame(render);
});

/* ENSURE FIRST FRAME LOADS */
images[0].onload = render;
