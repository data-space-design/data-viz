function setup() {
    createCanvas(700,700);
    console.log('Setup complete');
}

function draw() {

    for(var i = 0; i < 50 ; i++) {

        var hue = 0;
        var baseline = 10;
        var increment = 2;

        for(var j = 0; j < 50 ; j++) {

            colorMode(HSB, 100);
            c1 = color(hue , 5 + (increment * i), 100);
            noStroke();
            fill(c1);
            rect(baseline * j, baseline * i, 10, 10);
            hue += 2;
        }
    }
}
