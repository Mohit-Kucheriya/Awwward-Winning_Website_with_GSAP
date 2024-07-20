function mainAnimation() {
    var tl = gsap.timeline();

    tl.to(".loader", {
        opacity: 0,
        duration: 1,
        delay: 0.7,
        display: "none",
    });
    tl.from(
        ".left-nav",
        {
            y: -100,
            duration: 1,
            opacity: 0,
        },
        "nav"
    )
        .from("nav .center-nav a", {
            y: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            delay: -0.2,
        })
        .from("nav .right-nav ", {
            opacity: 0,
            duration: 0.5,
        })

        .from(
            ".main-left h1",
            {
                y: 100,
                opacity: 0,
                duration: 0.8,
            },
            "main"
        )
        .from(".main-left p", {
            x: 90,
            opacity: 0,
            duration: 0.5,
        })
        .from(".btn-div", {
            x: -60,
            opacity: 0,
            delay:-0.2,
            duration: 0.5,
        })

        .from(
            ".main-right video",
            {
                y: -150,
                opacity: 0,
                duration: 0.8,
            },
            "main"
        );
}
mainAnimation();
