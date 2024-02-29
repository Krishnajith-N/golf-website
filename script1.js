var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px" 
    
})
var blrcrsr = document.querySelector("#blrcursor")
document.addEventListener("mousemove",function(det){
  blrcrsr.style.left = det.x-150+"px"
  blrcrsr.style.top = det.y-140+"px"
})
var h4all = document.querySelectorAll("#nav h4")
 h4all.forEach(function(eleme) {
      eleme.addEventListener("mouseenter", function(){
         crsr.style.scale = 3
         crsr.style.border ="1px solid white"
         crsr.style.backgroundColor = "trasperent"
      })
      eleme.addEventListener("mouseleave",function(){
         crsr.style.scale = 1
         crsr.style.border = "0 solid #95C11E"
         crsr.style.backgroundColor = "#95C11E"
      })
 });

gsap.to("#nav",{
    backgroundColor:"#000",
 duration:0.6,
  height:"90px"
  ,scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
   // markers:true,
    start:"top -11%",
    end:"top -12%",
    scrub: 1
  }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
       trigger:"#main",
       scroller:"body",
      // markers:true,
       start:"top -27%",
       end:"top -89%",
       scrub:true
    }
} )
  gsap.from("#about-us img ,#about-h3",{
    y:50   ,
    opacity:0,
    duration:1,
    /*stagger: 0.5  ,*/    /* for applying one by one to multiple element */
    scrollTrigger:{
       trigger: "#about-us , #about-h3",
       scroll: "body",
       /*markers:true,*/
       start: "top 60%",
       end:"top 55%",
       scrub: 3
    }

  })
   gsap.to("#colon1", {
    y: 70,
    x: 70,
    scrollTrigger:{
      trigger:"#colon1",
      scroller:"body",
      
      start: "top 50%",
      end: "top 45%"
      ,scrub:4
    }
   })
   gsap.to("#colon2", {
    y: -70,
    x: -70,
    scrollTrigger:{
      trigger:"#colon2",
      scroller:"body",
    /*  markers:true,*/
      start: "top 85%",
      end: "top 80%"
      ,scrub:4
    }
   })
   gsap.from("#page4 h1" , {
    y: 80,
    scrollTrigger:{
      trigger:"#page4 h1",
      scroller:"body",
    /*  markers:true,*/
      start: "top 85%",
      end: "top 80%"
      ,scrub:4
    }
   })