var element = document.getElementById("emo");
var context = element.getContext("2d");

var size = 40;
var cols = 4;
var rows = 4;
var sideSpace = 10;

element.width = rows * 100;
element.height = cols * 100;

// Calculate canvas center coordinates
var canvasWidth = element.width;
var canvasHeight = element.height;
var centerX = canvasWidth / 2;
var centerY = canvasHeight / 2;

// Offset values to align all emojis in the center region
var xOffset = canvasWidth / rows; // Horizontal spacing between emojis
var yOffset = canvasHeight / cols; // Vertical spacing between rows
var startX = centerX - (rows * 100) / 2 + size + sideSpace; // Adjust this value for central alignment of all emojis
var startY = centerY - (cols * 100) / 2 + size + sideSpace;

// Styles for drawing
context.fillStyle = "#615a5a";
context.strokeStyle = "#615a5a";
context.lineCap = "round";
context.lineWidth = "3";

// Helper function to draw individual emojis
function drawEmojiOutline(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, 7); // Face
  context.stroke();
  context.closePath();
}

function leftEye(x, y) {
  context.beginPath();
  context.arc(x - 15, y - 10, 5, 0, 7);
  context.fill();
  context.closePath();
}

function rightEye(x, y) {
  context.beginPath();

  context.arc(x + 15, y - 10, 5, 0, 7);
  context.fill();

  context.closePath();
}

function rightEyeBlink(x, y) {
  context.beginPath();

  context.arc(x + 15, y - 10, 5, 3, 6.5);
  context.stroke();

  context.closePath();
}

function leftEyeBlink(x, y) {
  context.beginPath();

  context.arc(x - 15, y - 10, 5, 3, 6.5);
  context.stroke();

  context.closePath();
}

function rightSadEye(x, y) {
  context.beginPath();

  context.arc(x + 15, y - 10, 5, 0, 3);
  context.stroke();

  context.closePath();
}

function leftSadEye(x, y) {
  context.beginPath();

  context.arc(x - 15, y - 10, 5, 0, 3);
  context.stroke();

  context.closePath();
}

function rightHalfEye(x, y) {
  context.beginPath();

  context.arc(x + 15, y - 10, 5, 6, 2.8);
  context.fill();

  context.closePath();
}

function leftHalfEye(x, y) {
  context.beginPath();

  context.arc(x - 15, y - 10, 5, 0.5, 3.6);
  context.fill();

  context.closePath();
}

function rightExtraSadEye(x, y) {
  context.beginPath();

  context.arc(x + 15, y - 10, 5, 6.5, 3.6);
  context.fill();

  context.closePath();
}

function leftExtraSadEye(x, y) {
  context.beginPath();

  context.arc(x - 15, y - 10, 5, 5.8, 3);
  context.fill();

  context.closePath();
}

function smile(x, y) {
  context.beginPath();

  context.arc(x, y, 25, 0.9, 2.3);
  context.stroke();

  context.closePath();
}

function sad(x, y) {
  context.beginPath();

  context.arc(x, y + 45, 25, 4.1, -0.9);
  context.stroke();

  context.closePath();
}

function happy(x, y) {
  context.beginPath();

  context.moveTo(x - 28, y + 1);
  context.lineTo(x + 28, y + 1);
  context.stroke();

  context.closePath();
  context.beginPath();

  context.arc(x, y + 1, 28, 0, 3.1);
  context.stroke();

  context.closePath();
}

function blank(x, y) {
  context.beginPath();

  context.moveTo(x - 17, y + 17);
  context.lineTo(x + 17, y + 17);
  context.stroke();

  context.closePath();
}

function tougue(x, y) {
  context.beginPath();

  context.moveTo(x + 8, y + 25);
  context.lineTo(x + 8, y + 30);
  context.stroke();

  context.closePath();
  context.beginPath();

  context.moveTo(x - 8, y + 25);
  context.lineTo(x - 8, y + 30);
  context.stroke();

  context.closePath();
  context.beginPath();

  context.arc(x, y + 30, 8, 0, 3);
  context.stroke();

  context.closePath();
}

function sidetougue(x, y) {
  context.beginPath();

  context.arc(x + 11, y + 23, 6, -0.5, 2.6);
  context.stroke();

  context.closePath();
}

function rightLaughTear(x, y) {
  context.beginPath();

  context.moveTo(x - 22, y - 7);
  context.lineTo(x - 35, y + 3);
  context.stroke();

  context.closePath();
  context.beginPath();

  context.moveTo(x - 22, y - 7);
  context.lineTo(x - 25, y + 10);
  context.stroke();

  context.closePath();

  context.beginPath();

  context.arc(x - 31, y + 8, 6, 1, 4);
  context.stroke();

  context.closePath();
}

function leftLaughTear(x, y) {
  context.beginPath();

  context.moveTo(x + 22, y - 7);
  context.lineTo(x + 35, y + 3);
  context.stroke();

  context.closePath();
  context.beginPath();

  context.moveTo(x + 22, y - 7);
  context.lineTo(x + 25, y + 10);
  context.stroke();

  context.closePath();
  context.beginPath();

  context.arc(x + 31, y + 8, 6, -1, 2);
  context.stroke();

  context.closePath();
}

function o(x, y) {
  context.beginPath();

  context.arc(x, y + 15, 10, 0, 8);
  context.stroke();

  context.closePath();
}

function rightTear(x, y) {
  context.beginPath();

  context.moveTo(x + 20, y - 5);
  context.lineTo(x + 14, y + 10);
  context.stroke();

  context.closePath();
  context.beginPath();

  context.moveTo(x + 20, y - 5);
  context.lineTo(x + 26, y + 10);
  context.stroke();

  context.closePath();
  context.beginPath();

  context.arc(x + 20, y + 11, 6, 0, 3.2);
  context.stroke();

  context.closePath();
}

// Draw all emojis in a grid, centered
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    let x = startX + col * xOffset;
    let y = startY + row * yOffset;

    let leftEyeDisplay =
      (row === 0 && col === 0) ||
      (row === 0 && col === 1) ||
      (row === 0 && col === 2) ||
      (row === 1 && col === 0) ||
      (row === 1 && col === 1) ||
      (row === 2 && col === 0) ||
      (row === 2 && col === 3) ||
      (row === 3 && col === 3);

    let rightEyeDisplay =
      (row === 0 && col === 0) ||
      (row === 0 && col === 2) ||
      (row === 1 && col === 0) ||
      (row === 1 && col === 1) ||
      (row === 2 && col === 3) ||
      (row === 3 && col === 3);

    let rightEyeBlinkDisplay =
      (row === 0 && col === 1) ||
      (row === 0 && col === 3) ||
      (row === 1 && col === 3) ||
      (row === 2 && col === 0) ||
      (row === 2 && col === 1) ||
      (row === 2 && col === 2);

    let leftEyeBlinkDisplay =
      (row === 0 && col === 3) ||
      (row === 1 && col === 3) ||
      (row === 2 && col === 1) ||
      (row === 2 && col === 2);

    let rightSadEyeDisplay = row === 1 && col === 2;

    let leftSadEyeDisplay = row === 1 && col === 2;

    let rightHalfEyeDisplay =
      (row === 3 && col === 0) || (row === 3 && col === 1);

    let leftHalfEyeDisplay =
      (row === 3 && col === 0) || (row === 3 && col === 1);

    let rightExtraSadEyeDisplay = row === 3 && col === 2;

    let leftExtraSadEyeDisplay = row === 3 && col === 2;

    let smileDisplay =
      (row === 0 && col === 0) ||
      (row === 0 && col === 1) ||
      (row === 0 && col === 3) ||
      (row === 2 && col === 0) ||
      (row === 2 && col === 1) ||
      (row === 3 && col === 1);

    let sadDisplay =
      (row === 1 && col === 0) ||
      (row === 1 && col === 2) ||
      (row === 3 && col === 0) ||
      (row === 3 && col === 2) ||
      (row === 3 && col === 3);

    let happyDisplay =
      (row === 0 && col === 2) ||
      (row === 1 && col === 3) ||
      (row === 2 && col === 2);

    let blankDisplay = row === 1 && col === 1;

    let tougueDisplay = row === 2 && col === 0;

    let sideTougueDisplay = row === 2 && col === 1;

    let rightLaughTearDisplay = row === 2 && col === 2;

    let leftLaughTearDisplay = row === 2 && col === 2;

    let oDisplay = row === 2 && col === 3;

    let rightTearDisplay = row === 3 && col === 3;

    drawEmojiOutline(x, y);
    if (leftEyeDisplay) leftEye(x, y);
    if (rightEyeDisplay) rightEye(x, y);
    if (rightEyeBlinkDisplay) rightEyeBlink(x, y);
    if (leftEyeBlinkDisplay) leftEyeBlink(x, y);
    if (rightSadEyeDisplay) rightSadEye(x, y);
    if (leftSadEyeDisplay) leftSadEye(x, y);
    if (rightHalfEyeDisplay) rightHalfEye(x, y);
    if (leftHalfEyeDisplay) leftHalfEye(x, y);
    if (rightExtraSadEyeDisplay) rightExtraSadEye(x, y);
    if (leftExtraSadEyeDisplay) leftExtraSadEye(x, y);
    if (smileDisplay) smile(x, y);
    if (sadDisplay) sad(x, y);
    if (happyDisplay) happy(x, y);
    if (blankDisplay) blank(x, y);
    if (tougueDisplay) tougue(x, y);
    if (sideTougueDisplay) sidetougue(x, y);
    if (rightLaughTearDisplay) rightLaughTear(x, y);
    if (leftLaughTearDisplay) leftLaughTear(x, y);
    if (oDisplay) o(x, y);
    if (rightTearDisplay) rightTear(x, y);
  }
}
