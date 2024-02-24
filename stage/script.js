//gsap
const tl = gsap.timeline();
tl
.fromTo(".triangle2", 0.5, { y:"-30vh" }, { y:"0vh", ease: Power2.easeInOut })
.fromTo(".triangle1", 0.5, { y:"-30vh" }, { y:"0vh", ease: Power2.easeInOut }, "-=0.4")
.fromTo(".title-outer", 0.3, { x:"20px", opacity:0 }, { x:"0", opacity:1, ease: Power2.easeInOut })
.fromTo(".timesche", 0.3, { x:"20px", opacity:0 }, { x:"0", opacity:1, ease: Power2.easeInOut }, "-=0.3")
.fromTo(".subtitle-outer", 0.3, { x:"-20px", opacity:0 }, { x:"0", opacity:1, ease: Power2.easeInOut })
.fromTo(".image-outer", 0.3, { x:"20px", opacity:0 }, { x:"0", opacity:1, ease: Power2.easeInOut })
.fromTo(".tagname", 0.3, { x:"-20px", opacity:0 }, { x:"0", opacity:1, ease: Power2.easeInOut })