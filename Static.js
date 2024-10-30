var cont = document.getElementById("emojis");
var ctx = cont.getContext("2d");

var cols = 4;
var rows = 4;

cont.width = rows * 100 - 10;
cont.height = cols * 100 - 10;

ctx.fillStyle = "#615a5a";
ctx.strokeStyle = "#615a5a";
ctx.lineCap = "round";
ctx.lineWidth = "3";

function begin(ctx) {
  ctx.beginPath();
}

function close(ctx) {
  ctx.closePath();
}

//--------------------------------------------------------------First Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(45, 45, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(29, 35, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(61, 35, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(45, 45, 25, 0.9, 2.3);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Second Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(145, 45, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(129, 35, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(161, 36, 5, 3, 6.5);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(145, 45, 25, 0.9, 2.3);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Third Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(245, 45, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(229, 35, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(261, 35, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.moveTo(217, 46);
ctx.lineTo(272, 46);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(245, 46, 28, 0, 3.1);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Fourth Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(345, 45, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(329, 36, 5, 3, 6.5);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(361, 36, 5, 3, 6.5);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(345, 45, 25, 0.9, 2.3);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Fifth Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(45, 145, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(29, 135, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(61, 135, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(45, 190, 25, 4.1, -0.9);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Sixth Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(145, 145, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(129, 135, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(161, 135, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.moveTo(129, 162);
ctx.lineTo(161, 162);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Seventh Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(245, 145, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(229, 134, 5, 0, 3);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(261, 134, 5, 0, 3);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(245, 190, 25, 4.1, -0.9);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Eighth Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(345, 145, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(329, 136, 5, 3, 6.5);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(361, 136, 5, 3, 6.5);
ctx.stroke();

close(ctx);
begin(ctx);

close(ctx);
begin(ctx);

ctx.moveTo(317, 146);
ctx.lineTo(372, 146);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(345, 146, 28, 0, 3.1);
ctx.stroke();

//--------------------------------------------------------------Ninth Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(45, 245, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(29, 236, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(61, 237, 5, 3, 6.5);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(45, 245, 25, 0.9, 2.3);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.moveTo(37, 270);
ctx.lineTo(37, 275);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.moveTo(52.9, 270);
ctx.lineTo(52.9, 275);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(45, 275, 8, 0, 3);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Tenth Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(145, 245, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(129, 235, 5, 3, 6.5);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(161, 236, 5, 3, 6.5);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(145, 245, 25, 0.9, 2.3);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(155, 268, 6, -0.5, 2.6);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Eleventh Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(245, 245, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(229, 236, 5, 3, 6.5);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(261, 236, 5, 3, 6.5);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.moveTo(217, 246);
ctx.lineTo(272, 246);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(245, 246, 28, 0, 3.1);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.moveTo(223, 240);
ctx.lineTo(208, 245);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.moveTo(223, 240);
ctx.lineTo(214, 255);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.moveTo(267, 240);
ctx.lineTo(282, 245);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.moveTo(267, 240);
ctx.lineTo(276, 255);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(210, 251, 6, 1, 4);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(280, 251, 6, -1, 2);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Twelfth Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(345, 245, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(329, 235, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(361, 235, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(345, 260, 10, 0, 8);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Thirteenth Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(45, 345, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(29, 335, 5, 0.5, 3.6);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(61, 335, 5, 6, 2.8);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(45, 390, 25, 4.1, -0.9);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Fourteenth Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(145, 345, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(129, 335, 5, 0.5, 3.6);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(161, 335, 5, 6, 2.8);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(145, 345, 25, 0.9, 2.3);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Fifteenth Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(245, 345, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(229, 345, 5, 5.8, 3);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(261, 345, 5, 6.5, 3.6);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(245, 395, 25, 4.1, -0.9);
ctx.stroke();

close(ctx);

//--------------------------------------------------------------Sixteenth Emoji---------------------------------------------------------------------

begin(ctx);

ctx.arc(345, 345, 40, 0, 7);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(329, 335, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(361, 335, 5, 0, 7);
ctx.fill();

close(ctx);
begin(ctx);

ctx.arc(345, 390, 25, 4.1, -0.9);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.moveTo(365, 341);
ctx.lineTo(359, 356);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.moveTo(365, 341);
ctx.lineTo(371, 356);
ctx.stroke();

close(ctx);
begin(ctx);

ctx.arc(365, 357, 6, 0, 3.2);
ctx.stroke();

close(ctx);
