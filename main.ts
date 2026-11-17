const gameCanvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const ctx = gameCanvas.getContext("2d")!;

function initCanvas() {
  gameCanvas.style.border = "5px solid red";
  gameCanvas.style.display = "block";
  gameCanvas.style.width = "100vw";
  gameCanvas.style.height = "100vh";

  //gameCanvas.width = window.innerWidth;
  //gameCanvas.height = window.innerHeight;
}

initCanvas();
