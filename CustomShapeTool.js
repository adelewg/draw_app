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
        
    var editButton;
    var finishButton;
    
    var editMode = false;
    var currentShape = [];
    
    this.draw = function(){
        if(mouseIsPressed){
            currentShape.push({
                x: mouseX,
                y: mouseY
            });
        }
        
        beginShape()
        for(var i = 0; i < currentShape.length; i++) {
            vertex(currentShape[i].x, currentShape[i].y);
        }
        endShape()
        
        
    }

}