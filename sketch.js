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
    stroke(153);
    line(...walls[0]);  // Draw Line
    line(...walls[1]);  // Draw Line
    line(...walls[2]);  // Draw Line
    line(...walls[3]);  // Draw Line
  
    let wallsSize = Object.keys(walls).length;
    let last, next;
    for( let i = 0; i < 4; i++ ){
        //line(...walls[i]);  // Draw Line
        last = i === 0              ? walls[ wallsSize - 1 ] : walls[i-1]; 
        next = i === wallsSize - 1  ? walls[0]               : walls[i+1]; 
        let n = newOuterPoint( walls[i], last, next);
    
    }
    
  }

  let newOuterPoint = function( p, p1, p2 ){

    let tetha1 = Math.atan2(pLast[0]-p[0],pLast[1]-p[1]);


    stroke(255,0,0); //rot only if line in x-achse
    line( p[0], p[1] , p2[0] ,p[1]);
    line( p[0], p2[1], p2[0] ,p2[1]);
    
    stroke(255,100,0); // x achse mid line
    let middX = Math.abs((p[1]-p2[1])/2);
    line( p[0], p2[1]- middX, p2[0] ,p2[1]-middX);

    stroke(0,0,255); //blau only in y achse
    line( p1[0], p1[1], p1[0] ,p[1]);
    line( p[0] , p1[1], p[0]  ,p[1]);
    
    stroke(0,100,255); // y achse mid line
    let middY = Math.abs((p1[0]-p[0])/2);
    line( p[0] - middY , p1[1], p[0] - middY ,p[1]);


    console.log("actuel: ", p, "before: ", p1, "next: ", p2);

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
