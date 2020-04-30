let rad2Grad = 180. / Math.PI;

function setup() {
    
    let walls = [
        [ 100, 100, 200, 110 ],
        [ 200, 110, 180, 230 ],
        [ 180, 230, 80, 230 ],
        [ 80, 230, 100, 100 ]
    ];

    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(720, 400);
    background(0);
    noSmooth();
  
    translate(140, 0);
  
    // Draw gray box
    stroke(153);
  
    let wallsSize = Object.keys(walls).length;
    let last, next;
    for( let i = 0; i < wallsSize; i++ ){
        line(...walls[i]);  // Draw Line
        last = i === 0              ? walls[ wallsSize - 1 ] : walls[i-1]; 
        next = i === wallsSize - 1  ? walls[0]               : walls[i+1]; 
        let n = newOuterPoint( walls[i], last, next);
    
    }
    
  }

  let newOuterPoint = function( p, pLast, pNext ){

    //let tetha1 = Math.atan2(pLast[0]-p[0],pLast[1]-p[1]);

    let v0 = createVector( p[0]     , p[1] );
    let v1 = createVector( pNext[0] , pNext[1] );
    let v2 = createVector( pLast[0] , pLast[1] );

    //draw( [v0,v1,v2]);

    drawArrow( v0, v1, 'red' );
    drawArrow( v0, v2, 'blue' );
  
    console.log( v0, v1, v2 );
 
    let tetha1 = v1.angleBetween(v2);

    console.log("actuel: ", p, "before: ", pLast, degrees(tetha1), "next: ", pNext);

};
  
let newInnerPoint = function( p, pLeft, pRight ){

};

function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  }
