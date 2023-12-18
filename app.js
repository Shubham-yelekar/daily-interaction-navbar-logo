let t1 = gsap.timeline({scrollTrigger: {
    trigger: "#main",
    markers: true,
    start: "75% 80%",
    end: "75% 80%",
    scrub: 5,
    duration: 0.4,
    pin:true,
}});
t1
.to(".image",{
    width:"100vw",
    height: "100vh",
})