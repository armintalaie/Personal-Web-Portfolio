/*var info = document.querySelectorAll(".info");
var nav = document.querySelector("#navbar");
*/
var controller = new ScrollMagic.Controller();

$(".start").each(function() {
    var tl3 = new TimelineMax();

    tl3.fromTo(
        this,
        0.8, { transform: "translateX(-100%)" }, { transform: "translateX(0)", ease: Power2.easeInOut }
    );
});

$("#navbar").each(function() {
    var tl3 = new TimelineMax();
    tl3.fromTo(
        this,
        0.8, { transform: "translateY(-300%)" }, { transform: "translateY(0)", ease: Power2.easeInOut }
    );
});

$(".project").each(function() {
    var tl = new TimelineMax();

    var scene = new ScrollMagic.Scene({
        triggerElement: this, // starting scene, when reaching this element
        duration: 200, // pin the element for a total of 400px
    });
    tl.fromTo(
        $(this),
        0.8, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }
    );
    //tl.to($(this), 0.5, { backgroundColor: "#fdc7b0" }, "-=1.5");

    scene.setTween(tl);
    scene.addTo(controller);
});

var is_dark = localStorage.getItem("is_dark");
console.log(localStorage.getItem("is_dark"));

if ("true" == localStorage.getItem("is_dark")) {
    console.log("is dark");
    $("body").addClass("dark-theme");
    $(".mode-switch").text("Dark Mode: ON");
    $(".mode-switch").addClass("dark");
    $(".mode-switch").removeClass("light");
} else {
    console.log("is not dark");
    $(".mode-switch").text("Dark Mode: OFF");
    $("body").removeClass("dark-theme");
    $(".mode-switch").removeClass("dark");
    $(".mode-switch").addClass("light");
}

let glitches = document.querySelectorAll(".glitch");

console.log(glitches);
var time = new TimelineMax({ repeat: -1 });

var words = [
    "Armin",
    "Armin",
    "A Software developer",
    "A Full-stack developer",
    "A machine learning enthusiast",
    "A student",
    "A programmer",
];

var current = 0;

function change_text() {
    if (current >= words.length) current = 0;
    $(".glitch")
        .children()
        .each(function() {
            $(this).text(words[current]);

            if (words[current] == "Armin") {
                $(this).css({});
            } else {
                $(this).css({});
            }
        });
    current++;
}

time.to(glitches, 2, {}).call(change_text, []);

$(".mode-switch").on("click", function() {
    if (is_dark == "true") {
        $("body").removeClass("dark-theme");
        $(".mode-switch").text("Dark Mode: OFF");

        $(".mode-switch").removeClass("dark");
        $(".mode-switch").addClass("light");
        is_dark = "false";
    } else {
        $("body").addClass("dark-theme");
        $(".mode-switch").text("Dark Mode: ON");
        $(".mode-switch").addClass("dark");
        $(".mode-switch").removeClass("light");

        is_dark = "true";
    }
    localStorage.removeItem("is_dark");
    localStorage.setItem("is_dark", is_dark);
    console.log(localStorage.getItem("is_dark"));
});