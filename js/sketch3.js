var table;
var pluto;

function preload() {
  table = loadTable("data/pluto2.csv","csv","header");
}

function setup() {


  for (var i = 0; i < table.getRowCount(); i++) {
    //get the value from row i, column 0
    var price_per_sqft = table.get(i, 0)
    var subwaydist = table.get(i,1)
    print(price_per_sqft);
  }
}

function draw() {
  for (var i = 0; i < table.getRowCount(); i++) {
    //get the value from row i, column 0
    var price_per_sqft = table.get(i, 0)
    var subwaydist = table.get(i,1)
    createCanvas(480,280);
    background(200);
    stroke(155);

    textSize(15);
    text('price per sqft (H) / subway dist (V)',100,220);

    textSize(10);
    text('average num of price per sqft Inversely proportional to dist. subway',70,250);


    line(10,200,10,20);
    line(10,200,460,200);


    ellipse(table.get(1,0)*10,50,10,10);
    ellipse(table.get(2,0)*10,50,10,10);
    ellipse(table.get(3,0)*10,50,10,10);
    ellipse(table.get(4,0)*10,50,10,10);
    ellipse(table.get(5,0)*10,50,10,10);
    ellipse(table.get(6,0)*10,50,10,10);
    ellipse(table.get(7,0)*10,50,10,10);
    ellipse(table.get(8,0)*10,50,10,10);
    ellipse(table.get(9,0)*10,50,10,10);
    ellipse(table.get(10,0)*10,50,10,10);
    ellipse(table.get(11,0)*10,50,10,10);
    ellipse(table.get(12,0)*10,50,10,10);
    ellipse(table.get(13,0)*10,100,10,10);
    ellipse(table.get(14,0)*10,50,10,10);
    ellipse(table.get(15,0)*10,100,10,10);
    ellipse(table.get(16,0)*10,100,10,10);
    ellipse(table.get(17,0)*10,100,10,10);
    ellipse(table.get(18,0)*10,100,10,10);
    ellipse(table.get(19,0)*10,100,10,10);

    print(table.get(1,0));


  }
}
