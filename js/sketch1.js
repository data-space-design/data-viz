function setup() {
    createCanvas(700,700);
    console.log('Setup complete');
}

function draw() {



    for(var i = 0; i < 20 ; i++) {

        var hue = 0;

        for(var j = 0; j < 20 ; j++) {

            var x1 = 20 * j;
            var y1 = 20 * i;
            var x2 = mouseX;
            var y2 = mouseY;
            var distance = dist(x1, y1, x2, y2);
            var rad = map(distance, 0, 250, 0, 10, true);


            var value = map(distance, 100, 150, 0, 85, true);

            colorMode(HSB, 100);
            c1 = color(0, 0, 100);
            noStroke();
            fill(c1);

            /* White background circles
            ---------------------*/
            ellipseMode(RADIUS);
            ellipse(10 + x1, 10 + y1, 10, 10);


            var hue = dist(x1, y1, x2, y2);
            colorMode(HSB, 100);
            c2 = color(0, 0, value);
            noStroke();
            fill(c2);
            ellipseMode(RADIUS);
            var baseline = 10;

            ellipse(baseline + x1, baseline + y1, rad, rad);
        }
    }
}
