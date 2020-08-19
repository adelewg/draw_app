//global variables that will store the toolbox colour palette
//amnd the helper functions
//add an option to change the colour of the canvas
var toolbox = null;
var colourP = null;
var helpers = null;
var backcol;
var canvSlider;



function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");
    
    var controlsDiv = select(".header")
    //create a slider to set the colour of the canvas
    canvSlider = createSlider(0, 255, 0,0);
    canvSlider.parent(controlsDiv); 
    backcol = canvSlider.value();
    canvSlider.style('width', '80px');
    

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	//background(255);
    //background(backcol);
    

}

function draw() {
    background(backcol);
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}