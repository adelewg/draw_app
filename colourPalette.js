//Displays and handles the colour palette.
function ColourPalette() {
	//a list of web colour strings
	this.colours = ["black", "silver", "gray", "white", "maroon", "red", "purple",
		"orange", "pink", "fuchsia", "green", "lime", "olive", "yellow", "navy",
		"blue", "teal", "aqua"
	];
	//make the start colour be black
	this.selectedColour = "black";
    //this.selectedColour = "#000000";
    //this.alpha = 1;

	var self = this;

	var colourClick = function() {
		//remove the old border
		var current = select("#" + self.selectedColour + "Swatch");
		current.style("border", "0");

		//get the new colour from the id of the clicked element
		var c = this.id().split("Swatch")[0];

		//set the selected colour and fill and stroke
		self.selectedColour = c;
		fill(c);
		stroke(c);

		//add a new border to the selected colour
		this.style("border", "2px solid blue");
	}

	//load in the colours
	this.loadColours = function() {
		//set the fill and stroke properties to be black at the start of the programme
		//running
		fill(this.colours[0]);
		stroke(this.colours[0]);

		//for each colour create a new div in the html for the colourSwatches
		for (var i = 0; i < this.colours.length; i++) {
			var colourID = this.colours[i] + "Swatch";

			//using p5.dom add the swatch to the palette and set its background colour
			//to be the colour value.
			var colourSwatch = createDiv()
			colourSwatch.class('colourSwatches');
			colourSwatch.id(colourID);

			select(".colourPalette").child(colourSwatch);
			select("#" + colourID).style("background-color", this.colours[i]);
			colourSwatch.mouseClicked(colourClick)
		}

		select(".colourSwatches").style("border", "2px solid blue");
	};
	//call the loadColours function now it is declared
	this.loadColours();
}

/*

//I will probably need to make some changes to the code below becuase it uses jquery and not the dom library

function ColourPalette(){
    this.selectedColour = "#000000";
    this.alpha = 1;
    
    //load the users selected colour
    this.loadColours = function(){
        //set the selected colour to the colour input value with the correct alpha value
        this.setColour(this.colorAlpha($('#colourInput").val(), this.alpha));
        
    };
    
    this.setColour = function(color){
        this.selecctedColour = colour;
        
        //set the fill and stroke to the selected colour value
        d.fill(this.selectedColour);
        d.stroke(this.selectedColour);
        
        //Create hex colour string and pass it into the colour input element
        //to make sure it is set to the currently selected colour
        //needed for when the colour is set from another class
        
        var redHex = red(this.selectedColour).toString(16);
        if(redHex.length == 1)
            {
                redHex = "0" + redHex;
            }
            
        var GreenHex = green(this.selectedColour).toString(16);
        if(greenHex.length == 1)
            {
                greenHex = "0" + greenHex;
            }
            
        var blueHex = blue(this.selectedColour).toString(16);
        if(blueHex.length == 1)
            {
                blueHex = "0" + blueHex;
            }
            
        $("#colourInput).val("#" + redHex + greedHex + blueHex);
    }
    
    //creates a new colour with RGB values from aColor and A value from alpha
    this.coloralpha = function(acolor, alpha){
        var c  = color(acolor);
        return color('rgba(' +[red(c), green(c), blue(c), alpha].join(',') + ')');
    }
    
    //call the loadColours function now it is declared
    this.loadColours();
    
    //load the colour every time the colour input is changed
    $("#colourInput").change(() => {this.loadColours();});
    
}

*/