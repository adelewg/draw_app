/* 

1. Plot out a shape a series of vertices
* Add a button for switching between creating new vertices and editing
* Click the canvas to add a vertex
* dont draw right away - add vertex to an array
2. Edit the vertices using a mouse drag
3. Confirm the final shape

*/



function CustomShapeTool() {
    this.name = "customShapeTool";
    
    //this is a link to a jpeg image of the tool and I need to update it
    this.id = "assets/freehand.jpg";
        
    var editButton = createButton('Edit Shape');
    var finishButton = createButton('Finish Shape');
    var editMode = false;
    var currentShape;
    
    finishButton.mousePressed(function(){
        loadPixels();
        currentShape = [];
    })
    
    var editMode = false;
    var currentShape = [];
    
    this.draw = function(){
         updatePixels();
        if(mousePressOnCanvas(c) && mouseIsPressed){
            if(!editMode)
                {
                    currentShape.push({x:mouseX, y:mouseY});
                }
            else
                {
                    for(var i = 0; i < currentShape.length; i++)
                        {
                            if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15)
                                {
                                    currentShape[i].x = mouseX;
                                    currentShape[i].y = mouseY;
                                }
                        }
                }

        }

        beginShape();
        for (var i = 0; i < currentShape.length; i++)
            {
                vertex(currentShape[i].x, currentShape[i].y);
                if(editMode)
                    {
                        fill('red');
                        ellipse(currentShape[i].x, currentShape[i].y, 5,5);
                        noFill();
                    }
            }
        endShape();
        
        
    }
    
    //add this to helper functions
    this.mousePressOnCanvas = function(canvas) {
        if (mouseX > canvas.elt.offsetLeft && 
            mouseX < (canvas.elt.offsetLeft + canvas.width) && 
            mouseY > canvas.elt.offsetTop && 
            mouseY < (canvas.elt.offsetTop + canvas.height))
            {
                return true;
            }
                return false;
    }

}


var editButton;
var finishButton;

var editMode = false;
var currentShape = [];

var c;

function setup()
{
	c = createCanvas(800, 700);
    background(200);
    noFill();
    loadPixels();
    editButton = createButton('Edit Shape');
    editButton.mousePressed(function(){
        if(editMode){
            editMode = false;             
            editButton.html("Edit Shape");
        }
        else{
            editMode = true;
            editButton.html("Add Vertices");
            
        }
    })
    finishButton = createButton("Finish Shape");
    
    finishButton.mousePressed(function(){
        editMode = false;   
        draw();
        loadPixels();
        currentShape = [];
    })
}





function mousePressOnCanvas(canvas) {
    if (mouseX > canvas.elt.offsetLeft && 
        mouseX < (canvas.elt.offsetLeft + canvas.width) && 
        mouseY > canvas.elt.offsetTop && 
        mouseY < (canvas.elt.offsetTop + canvas.height))
        {
            return true;
        }
            return false;
}