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

  let newOuterPoint = function( p, pLast, pNext ){

    //let tetha1 = Math.atan2(pLast[0]-p[0],pLast[1]-p[1]);

    let v0 = createVector( p[0]     , p[1] );
    let v1 = createVector( pNext[0] , pNext[1] );
    let v2 = createVector( pLast[0] , pLast[1] );

    stroke(255,0,0); //rot
    line( p[0]      , pNext[0]+100  , p[1]   ,pNext[1]-100);
    line( pLast[0]  , p[2]+100, pLast[0] ,p[3]-100);


    stroke(0,0,255); //blau
    line( pLast[0]-100 , p[1], pLast[1]+100 ,p[1]);
    line( p[2]+100 , pNext[1], p[3]-100 ,pNext[1]);



    //drawArrow( v0, v1, 'red' );
    //drawArrow( v0, v2, 'blue' );
   
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
