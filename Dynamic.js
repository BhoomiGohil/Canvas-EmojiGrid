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
  return context.stroke();
}

function fill(context) {
  return context.fill();
}

// Helper function to draw individual emojis
function drawEmojiOutline(x, y) {
  begin(context);

  context.arc(x, y, size, circleStart, circleEnd); // Face
  stroke(context);

  close(context);
}

// Helper function to draw emojis eyes
function eyes(x, y, eyeType, position) {
  var eyeX = size / 2.6;
  var eyeY = size / 5;
  var eyeSize = size / 9;
  begin(context);

  var eyeArcStarts, eyeArcEnds, fillOrStroke;

  if (eyeType === "blink") {
    eyeArcStarts = 3;
    eyeArcEnds = 6.5;
    fillOrStroke = "stroke";
  } else if (eyeType === "sad") {
    eyeArcStarts = circleStart;
    eyeArcEnds = 3;
    fillOrStroke = "stroke";
  } else if (eyeType === "half") {
    if (position === "left") {
      eyeArcStarts = 0.5;
      eyeArcEnds = 3.6;
    } else if (position === "right") {
      eyeArcStarts = 6;
      eyeArcEnds = 2.8;
    }
    fillOrStroke = "fill";
  } else if (eyeType === "extraSad") {
    if (position === "left") {
      eyeArcStarts = 5.8;
      eyeArcEnds = 3;
    } else if (position === "right") {
      eyeArcStarts = 6.5;
      eyeArcEnds = 3.6;
    }
    fillOrStroke = "fill";
  } else {
    eyeArcStarts = circleStart;
    eyeArcEnds = circleEnd;
    fillOrStroke = "fill";
  }

  if (position === "left") {
    context.arc(x - eyeX, y - eyeY, eyeSize, eyeArcStarts, eyeArcEnds);
    fillOrStroke === "fill" ? fill(context) : stroke(context);
  } else if (position === "right") {
    context.arc(x + eyeX, y - eyeY, eyeSize, eyeArcStarts, eyeArcEnds);
    fillOrStroke === "fill" ? fill(context) : stroke(context);
  }

  close(context);
}

// Helper function to draw emojis mouth expression
function mouth(x, y, mouthType) {
  var mouthY = 0;
  var mouthSize = size / 1.6;
  var sadY = size / 1;
  var happyY = size / 8;
  var blankXY = size / 2.5;
  var oY = size / 2.5;
  var oSize = size / 5;
  begin(context);

  if (mouthType === "smile") {
    context.arc(x, y + mouthY, mouthSize, 0.9, 2.3);
    stroke(context);
  } else if (mouthType === "happy") {
    context.moveTo(x - mouthSize, y + happyY);
    context.lineTo(x + mouthSize, y + happyY);
    stroke(context);

    close(context);
    begin(context);

    context.arc(x, y + happyY, mouthSize, circleStart, 3.1);
    stroke(context);
  } else if (mouthType === "sad") {
    context.arc(x, y + sadY, mouthSize, 4.1, -0.9);
    stroke(context);
  } else if (mouthType === "blank") {
    context.moveTo(x - blankXY, y + blankXY);
    context.lineTo(x + blankXY, y + blankXY);
    stroke(context);
  } else if (mouthType === "o") {
    context.arc(x, y + oY, oSize, circleStart, circleEnd);
    stroke(context);
  }

  close(context);
}

function tougue(x, y) {
  var tougueMoveLineX = size / 5;
  var touguemoveY = size / 1.7;
  var tougueLineY = size / 1.4;
  var tougueY = size / 1.4;
  var tougueSize = size / 5;
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

function sidetougue(x, y) {
  var sideTougueX = size / 5;
  var sideTougueY = size / 1.7;
  var tougueSize = size / 5;

  begin(context);

  context.arc(x + sideTougueX, y + sideTougueY, tougueSize, -0.5, 2.9);
  stroke(context);

  close(context);
}

function laughTear(x, y, position) {
  var laughTearMoveX = size / 2;
  var laughTearMoveY = size / 9;
  var laughTearLineX1 = size / 1;
  var laughTearLineY1 = size / 6;
  var laughTearLineX2 = size / 1.3;
  var laughTearLineY2 = size / 2.5;

  var laughTearArcX = size / 1.1;
  var laughTearArcY = size / 3.2;

  var laughTearArcSize = size / 6;
  begin(context);

  if (position === "left") {
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
  } else if (position === "right") {
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

    context.arc(
      x + laughTearArcX,
      y + laughTearArcY,
      laughTearArcSize,
      -1,
      2.5
    );
    stroke(context);
  }

  close(context);
}

function tear(x, y, position) {
  var tearMoveX = size / 2;
  var tearMoveY = size / 10;

  var tearLineX1 = size / 1.5;
  var tearLineX2 = size / 3;
  var tearLineY = size / 3;

  var tearCircleX = size / 2;
  var tearCircleY = size / 3;
  var tearCircleSize = size / 6;

  begin(context);

  if (position === "left") {
    context.moveTo(x - tearMoveX, y - tearMoveY);
    context.lineTo(x - tearLineX1, y + tearLineY);
    stroke(context);

    close(context);
    begin(context);

    context.moveTo(x - tearMoveX, y - tearMoveY);
    context.lineTo(x - tearLineX2, y + tearLineY);
    stroke(context);

    close(context);
    begin(context);

    context.arc(
      x - tearCircleX,
      y + tearCircleY,
      tearCircleSize,
      circleStart,
      3.2
    );
    stroke(context);
  } else if (position === "right") {
    context.moveTo(x + tearMoveX, y - tearMoveY);
    context.lineTo(x + tearLineX1, y + tearLineY);
    stroke(context);

    close(context);
    begin(context);

    context.moveTo(x + tearMoveX, y - tearMoveY);
    context.lineTo(x + tearLineX2, y + tearLineY);
    stroke(context);

    close(context);
    begin(context);

    context.arc(
      x + tearCircleX,
      y + tearCircleY,
      tearCircleSize,
      circleStart,
      3.2
    );
    stroke(context);
  }

  close(context);
}

const emojiConfigs = {
  1: (x, y) => {
    eyes(x, y, "eye", "left");
    eyes(x, y, "eye", "right");
    mouth(x, y, "smile");
  },
  2: (x, y) => {
    eyes(x, y, "eye", "left");
    eyes(x, y, "blink", "right");
    mouth(x, y, "smile");
  },
  3: (x, y) => {
    eyes(x, y, "eye", "left");
    eyes(x, y, "eye", "right");
    mouth(x, y, "happy");
  },
  4: (x, y) => {
    eyes(x, y, "blink", "left");
    eyes(x, y, "blink", "right");
    mouth(x, y, "smile");
  },
  5: (x, y) => {
    eyes(x, y, "eye", "left");
    eyes(x, y, "eye", "right");
    mouth(x, y, "sad");
  },
  6: (x, y) => {
    eyes(x, y, "eye", "left");
    eyes(x, y, "eye", "right");
    mouth(x, y, "blank");
  },
  7: (x, y) => {
    eyes(x, y, "sad", "left");
    eyes(x, y, "sad", "right");
    mouth(x, y, "sad");
  },
  8: (x, y) => {
    eyes(x, y, "blink", "left");
    eyes(x, y, "blink", "right");
    mouth(x, y, "happy");
  },
  9: (x, y) => {
    eyes(x, y, "eye", "left");
    eyes(x, y, "blink", "right");
    mouth(x, y, "smile");
    tougue(x, y);
  },
  10: (x, y) => {
    eyes(x, y, "blink", "left");
    eyes(x, y, "blink", "right");
    mouth(x, y, "smile");
    sidetougue(x, y);
  },
  11: (x, y) => {
    eyes(x, y, "blink", "left");
    eyes(x, y, "blink", "right");
    mouth(x, y, "happy");
    laughTear(x, y, "left");
    laughTear(x, y, "right");
  },
  12: (x, y) => {
    eyes(x, y, "eye", "left");
    eyes(x, y, "eye", "right");
    mouth(x, y, "o");
  },
  13: (x, y) => {
    eyes(x, y, "half", "left");
    eyes(x, y, "half", "right");
    mouth(x, y, "sad");
  },
  14: (x, y) => {
    eyes(x, y, "half", "left");
    eyes(x, y, "half", "right");
    mouth(x, y, "smile");
  },
  15: (x, y) => {
    eyes(x, y, "extraSad", "left");
    eyes(x, y, "extraSad", "right");
    mouth(x, y, "sad");
  },
  16: (x, y) => {
    eyes(x, y, "eye", "left");
    eyes(x, y, "eye", "right");
    mouth(x, y, "sad");
    tear(x, y, "right");
  },
};

var id = 0;

// Draw all emojis in a grid, centered
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    let x = startX + col * emojiSizeSpace;
    let y = startY + row * emojiSizeSpace;

    id++;
    drawEmojiOutline(x, y);
    if (emojiConfigs[id]) {
      emojiConfigs[id](x, y);
    }
  }
}
