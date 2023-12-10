function videoconAnimation(){
    const videocon = document.querySelector("#video-container")
    const plybtn = document.querySelector("#play")

videocon.addEventListener("mouseenter", function(){
    gsap.to(plybtn,{
      scale:1,
     opacity:1
})

videocon.addEventListener("mouseleave", function(){
    gsap.to(plybtn,{
        scale:0,
       opacity:0
  })
}) 

videocon.addEventListener("mousemove", function(dets){
    gsap.to(plybtn, {
        left:dets.x-35,
        top:dets.y-40
    })
})
})
}
videoconAnimation()

function loadingAnimation(){
    gsap.from("#page1 h1", {
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.2
    })
    
    gsap.from(" #page1 #video-container", {
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.5,
    })
}
loadingAnimation()