/*var info = document.querySelectorAll(".info");
var nav = document.querySelector("#navbar");

var tl = new TimelineMax();

tl.fromTo(
    $(".slider"),
    0.5, { margin: "0" }, { margin: "100rem", ease: Power2.easeInOut }
);

var scene1 = new ScrollMagic.Scene({
    triggerElement: $(".slider"), // starting scene, when reaching this element
    //duration: 400, // pin the element for a total of 400px
});
scene1.setTween(tl);
scene1.addIndicators();
scene1.addTo(controller);

var controller = new ScrollMagic.Controller();
var i = 1;
$(".info").each(function() {
    console.log(i);

    i++;
    if (i > 0) {
        var tl = new TimelineMax();

        tl.fromTo(
            $(this),
            0.5, { margin: "0" }, { margin: "4rem", ease: Power2.easeInOut }
        );

        tl.fromTo(
            $(this).children(),
            0.5, { fontSize: "1rem" }, { fontSize: "10rem", ease: Power2.easeInOut },
            "-=0.5"
        );
        var scene = new ScrollMagic.Scene({
            triggerElement: this, // starting scene, when reaching this element
            //duration: 400, // pin the element for a total of 400px
        });
        scene.setTween(tl);
        scene.addIndicators();
        scene.addTo(controller);
    }
});

$(".project").each(function() {
    console.log(i);

    i++;
    if (i > 0) {
        var tl = new TimelineMax();

        tl.to($(this), 1, { padding: "5rem", ease: Power2.easeInOut });
        var scene = new ScrollMagic.Scene({
            triggerElement: this, // starting scene, when reaching this element
            //duration: 400, // pin the element for a total of 400px
        });
        tl.fromTo($(this), 0.5, { opacity: "0.3" }, { opacity: "1" }, "-=1");
        //tl.to($(this), 0.5, { backgroundColor: "#fdc7b0" }, "-=1.5");

        scene.setTween(tl);
        scene.addIndicators();
        scene.addTo(controller);
    }
});

function start() {
    info.forEach((part, index) => {});
}*/

let glitches = document.querySelectorAll(".glitch");

console.log(glitches);
var time = new TimelineMax({ repeat: -1 });

var words = [
    "Armin",
    "Armin",
    "A Software developer",
    "A Full-stack developer",
    "A student",
    "A programmer",
];

var current = 0;

function change_text() {
    console.log("UMMM");
    if (current >= words.length) current = 0;
    $(".glitch")
        .children()
        .each(function() {
            $(this).text(words[current]);

            if (words[current] == "Armin") {
                $(this).css({
                    color: "#000000",
                });
            } else {
                $(this).css({
                    color: "#000000",
                });
            }
        });
    current++;
}

time.to(glitches, 2, {}).call(change_text, []);