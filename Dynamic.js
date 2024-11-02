// Initialize the canvas element and context for drawing
var element = document.getElementById("emo");
var context = element.getContext("2d");

// Define emoji and grid settings
var size = 40; // Base emoji size
var cols = 4; // Number of columns in the grid
var rows = 4; // Number of rows in the grid
var space = 2.5; // Spacing multiplier between emojis

// Calculate dimensions for canvas based on grid and spacing
var emojiSizeSpace = size * space;
element.width = emojiSizeSpace * rows;
element.height = emojiSizeSpace * cols;

// Centering offsets
var startX = size * (space / 2); // Starting x position
var startY = size * (space / 2); // Starting y position

// Set style properties for drawing
context.fillStyle = "#615a5a";
context.strokeStyle = "#615a5a";
context.lineCap = "round";
context.lineWidth = 3;

// Arc range constants
var circleStart = 0; // Start angle for circles
var circleEnd = Math.PI * 2; // End angle for circles

function begin(context) {
  context.beginPath();
}

function close(context) {
  context.closePath();
}

function stroke(context) {
  context.stroke();
}

function fill(context) {
  context.fill();
}

// Helper function to draw individual emojis
function drawEmojiOutline(x, y) {
  begin(context);

  context.arc(x, y, size, circleStart, circleEnd); // Face
  stroke(context);

  close(context);
}

var eyeX = size / 3;
var eyeY = size / 5;
var eyeSize = size / 9;

function leftEye(x, y) {
  begin(context);

  context.arc(x - eyeX, y - eyeY, eyeSize, circleStart, circleEnd);
  fill(context);

  close(context);
}

function rightEye(x, y) {
  begin(context);

  context.arc(x + eyeX, y - eyeY, eyeSize, circleStart, circleEnd);
  fill(context);

  close(context);
}

function rightEyeBlink(x, y) {
  begin(context);

  context.arc(x + eyeX, y - eyeY, eyeSize, 3, 6.5);
  stroke(context);

  close(context);
}

function leftEyeBlink(x, y) {
  begin(context);

  context.arc(x - eyeX, y - eyeY, eyeSize, 3, 6.5);
  stroke(context);

  close(context);
}

function rightSadEye(x, y) {
  begin(context);

  context.arc(x + eyeX, y - eyeY, eyeSize, circleStart, 3);
  stroke(context);

  close(context);
}

function leftSadEye(x, y) {
  begin(context);

  context.arc(x - eyeX, y - eyeY, eyeSize, circleStart, 3);
  stroke(context);

  close(context);
}

function rightHalfEye(x, y) {
  begin(context);

  context.arc(x + eyeX, y - eyeY, eyeSize, 6, 2.8);
  fill(context);

  close(context);
}

function leftHalfEye(x, y) {
  begin(context);

  context.arc(x - eyeX, y - eyeY, eyeSize, 0.5, 3.6);
  fill(context);

  close(context);
}

function rightExtraSadEye(x, y) {
  begin(context);

  context.arc(x + eyeX, y - eyeY, eyeSize, 6.5, 3.6);
  fill(context);

  close(context);
}

function leftExtraSadEye(x, y) {
  begin(context);

  context.arc(x - eyeX, y - eyeY, eyeSize, 5.8, 3);
  fill(context);

  close(context);
}

var mouthY = 0;
var mouthSize = size / 1.6;

function smile(x, y) {
  begin(context);

  context.arc(x, y + mouthY, mouthSize, 0.9, 2.3);
  stroke(context);

  close(context);
}

var sadY = size / 1;

function sad(x, y) {
  begin(context);

  context.arc(x, y + sadY, mouthSize, 4.1, -0.9);
  stroke(context);

  close(context);
}

var happyY = size / 9;

function happy(x, y) {
  begin(context);

  context.moveTo(x - mouthSize, y + happyY);
  context.lineTo(x + mouthSize, y + happyY);
  stroke(context);

  close(context);
  begin(context);

  context.arc(x, y + happyY, mouthSize, circleStart, 3.1);
  stroke(context);

  close(context);
}

var blankXY = size / 3;

function blank(x, y) {
  begin(context);

  context.moveTo(x - blankXY, y + blankXY);
  context.lineTo(x + blankXY, y + blankXY);
  stroke(context);

  close(context);
}

var tougueMoveLineX = size / 5;
var touguemoveY = size / 1.7;
var tougueLineY = size / 1.4;
var tougueY = size / 1.4;
var tougueSize = size / 5;

function tougue(x, y) {
  begin(context);

  context.moveTo(x + tougueMoveLineX, y + touguemoveY);
  context.lineTo(x + tougueMoveLineX, y + tougueLineY);
  stroke(context);

  close(context);
  begin(context);

  context.moveTo(x - tougueMoveLineX, y + touguemoveY);
  context.lineTo(x - tougueMoveLineX, y + tougueLineY);
  stroke(context);

  close(context);
  begin(context);

  context.arc(x, y + tougueY, tougueSize, circleStart, 3);
  stroke(context);

  close(context);
}

var sideTougueX = size / 5;
var sideTougueY = size / 1.7;

function sidetougue(x, y) {
  begin(context);

  context.arc(x + sideTougueX, y + sideTougueY, tougueSize, -0.5, 2.9);
  stroke(context);

  close(context);
}

var laughTearMoveX = size / 2;
var laughTearMoveY = size / 9;
var laughTearLineX1 = size / 1;
var laughTearLineY1 = size / 6;
var laughTearLineX2 = size / 1.3;
var laughTearLineY2 = size / 2.5;

var laughTearArcX = size / 1.1;
var laughTearArcY = size / 3.2;

var laughTearArcSize = size / 6;

function rightLaughTear(x, y) {
  begin(context);

  context.moveTo(x - laughTearMoveX, y - laughTearMoveY);
  context.lineTo(x - laughTearLineX1, y + laughTearLineY1);
  stroke(context);

  close(context);
  begin(context);

  context.moveTo(x - laughTearMoveX, y - laughTearMoveY);
  context.lineTo(x - laughTearLineX2, y + laughTearLineY2);
  stroke(context);

  close(context);

  begin(context);

  context.arc(x - laughTearArcX, y + laughTearArcY, laughTearArcSize, 0.5, 4);
  stroke(context);

  close(context);
}

function leftLaughTear(x, y) {
  begin(context);

  context.moveTo(x + laughTearMoveX, y - laughTearMoveY);
  context.lineTo(x + laughTearLineX1, y + laughTearLineY1);
  stroke(context);

  close(context);
  begin(context);

  context.moveTo(x + laughTearMoveX, y - laughTearMoveY);
  context.lineTo(x + laughTearLineX2, y + laughTearLineY2);
  stroke(context);

  close(context);
  begin(context);

  context.arc(x + laughTearArcX, y + laughTearArcY, laughTearArcSize, -1, 2.5);
  stroke(context);

  close(context);
}

var oY = size / 2.5;
var oSize = size / 5;

function o(x, y) {
  begin(context);

  context.arc(x, y + oY, oSize, circleStart, circleEnd);
  stroke(context);

  close(context);
}

var rightTearMoveX = size / 2;
var rightTearMoveY = size / 10;

var rightTearLineX1 = size / 1.5;
var rightTearLineX2 = size / 3;
var rightTearLineY = size / 3;

var rightTearCircleX = size / 2;
var rightTearCircleY = size / 3;
var rigthTearCircleSize = size / 6;

function rightTear(x, y) {
  begin(context);

  context.moveTo(x + rightTearMoveX, y - rightTearMoveY);
  context.lineTo(x + rightTearLineX1, y + rightTearLineY);
  stroke(context);

  close(context);
  begin(context);

  context.moveTo(x + rightTearMoveX, y - rightTearMoveY);
  context.lineTo(x + rightTearLineX2, y + rightTearLineY);
  stroke(context);

  close(context);
  begin(context);

  context.arc(
    x + rightTearCircleX,
    y + rightTearCircleY,
    rigthTearCircleSize,
    circleStart,
    3.2
  );
  stroke(context);

  close(context);
}

function leftTear(x, y) {
  begin(context);

  context.moveTo(x - rightTearMoveX, y - rightTearMoveY);
  context.lineTo(x - rightTearLineX1, y + rightTearLineY);
  stroke(context);

  close(context);
  begin(context);

  context.moveTo(x - rightTearMoveX, y - rightTearMoveY);
  context.lineTo(x - rightTearLineX2, y + rightTearLineY);
  stroke(context);

  close(context);
  begin(context);

  context.arc(
    x - rightTearCircleX,
    y + rightTearCircleY,
    rigthTearCircleSize,
    circleStart,
    3.2
  );
  stroke(context);

  close(context);
}

// Draw all emojis in a grid, centered
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    let x = startX + col * emojiSizeSpace;
    let y = startY + row * emojiSizeSpace;

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

    let leftTearDisplay;

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
    if (leftTearDisplay) leftTear(x, y);
  }
}
