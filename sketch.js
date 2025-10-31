let slide
let savebutton
let picker
let pmouse_x
let pmouse_y
let slider;
let create_square;
let w_input // for resizing canvas width
let h_input // canvas height resizing based on user input
let w_text // text to show what the user is resizing
let h_text
let stroke_select
let color_text
let clear_text
let slider_amount
let clear_button
let open_image
// functions for main project logic
function setup() {
  let canva = createCanvas(400, 400,);
  //colour picker 
  picker = createColorPicker("blue")
  //Position of picker
  picker.position(500,150);

  color_text = createP("Colour picker")
  color_text.position(500,110)
  
  // What the brush head will look like
  //strokeCap(ROUND) 
  savebutton = createButton("Save your art")
  savebutton.position(500,210)

  savebutton.mousePressed(savework);
  // for slider outside of canvas
  slider_text = createP("Use the slider to change brush thickness (0-60)")
  slider_text.position(500,2)
  //Creating a slider starting at 0 with a max value of 60 stepping once
  slider = createSlider(0,60,0)
  slider.position(500,0)
  
  // text and input to change width of canvas createP creates paragraph tag outside of canvas
  w_text = createP("Width of canvas")
  w_text.position(500,260)
  h_text = createP("Height of canvas")
  h_text.position(500,310)
  w_input = createInput("")
  w_input.position(500,300)
  h_input = createInput("")
  h_input.position(500,350)

  // accessing input function in variables using dot notation

  w_input.input(canvaschange)
  h_input.input(canvaschange)

  // slider function to be called based on slider input 
  slider.input(strokeStrength)
  // creating a border around canvas using css
  canva.elt.style.border = `5px dashed turquoise`;
  
  brush_text = createP("Select Brush head");
  brush_text.position(500,390)
  stroke_select = createSelect();

  stroke_select.position(500,430);
  stroke_select.option("SQUARE Brush",PROJECT);
  stroke_select.option("ROUND Brush",ROUND);
  stroke_select.option("Brush head unavailable",SQUARE);

  stroke_select.disable("Brush head unavailable",SQUARE);

  clear_button = createButton("Clear Canvas");
  clear_button.position(500,80);
  clear_button.mouseClicked(clear_all);
  // Allows user to open and view images
  open_image = createFileInput(preload);
  open_image.position(500,250);
}
// draws stroke cap everyframe to update stroke cap type
function draw() {
  let st = stroke_select.value();
  strokeCap(st)
  
 
}

 if (img){
     image(img, 0,0, width, height);
  }


// To draw strokes when mouse is dragged and making the stroke dependend on colour picker value
  function mouseDragged(){
  line(pmouse_x,pmouse_y,mouseX,mouseY); 
  let c = picker.color(); // returns current colour selected on the picker 
  stroke(c);
}

// draw stroke when user clicks mouse
function mouseClicked(){
  line(pmouse_x,pmouse_y,mouseX,mouseY);
}

// saves canvas
function savework(){
  saveCanvas("User Artwork");
}

// Function to allow user to adjust strokeweight based on slider value
function strokeStrength(){
  let s = slider.value();
  strokeWeight(s);
}
// When the user presses the button it clears the entire canvas
function clear_all(){
  clear();
  
  }


// function to change canvas size based on user input
function canvaschange(){ 
  let w = w_input.value();
  let h = h_input.value();
  resizeCanvas(w,h); // returns the input value passing it into the resizeCanvas function to resize the canvas

}

function preload(file){
 if (file.type === "image"){
  img = createImg(file.data, ''); //creates an image element in the DOM 
 }else{
  img = null;
 }
  

}