window.scroll({top: 0});

// ローディング処理
let main = document.getElementById("main");
let progress_bar = document.getElementById("progress_bar")
main.style.display = "none";
progress_bar.style.display = "block";

var bar = new ProgressBar.Circle(container, {
  color: '#000',
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'bounce',
  duration: 4000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#F5C615', width: 1 },
  to: { color: '#F5C615', width: 4 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(1.0);  // Number from 0.0 to 1.0

window.setTimeout(() => {

  main.style.display = "block";
  progress_bar.style.display = "none";

  //gsap
  const mountain = document.querySelector(".top-mountain");
  const moon = document.querySelector(".top-moon");
  const cloud1 = document.querySelector(".top-cloud1");
  const cloud2 = document.querySelector(".top-cloud2");
  const cloud3 = document.querySelector(".top-cloud3");
  const subtitle = document.querySelector(".top-subtitle");
  const yearpop = document.querySelector(".top-yearpop");
  const maintitle = document.querySelector(".top-maintitle");
  const scrolldown = document.querySelector(".top-scrolldown");

  const tl = gsap.timeline();

  tl.fromTo(mountain, 1, { y:"30vh" }, { y:"0vh", ease: Power2.easeInOut })
  .fromTo(moon, 1, { y:"50vh" }, { y:"0vh", ease: Power2.easeInOut }, "-=0.5")
  .fromTo(cloud1, 2, { x:"-20vw", opacity:0 }, { x:"0", opacity:1, ease: Power2.easeInOut }, "-=1")
  .fromTo(cloud2, 2, { x:"20vw", opacity:0 }, { x:"0", opacity:1, ease: Power2.easeInOut }, "-=2")
  .fromTo(cloud3, 2, { x:"-20vw", opacity:0 }, { x:"0", opacity:1, ease: Power2.easeInOut }, "-=2")
  .fromTo(maintitle, 1.5, { y:"10vh", opacity:0 }, { y:"0", opacity:1, ease: Power2.easeInOut }, "-=3")
  .fromTo(subtitle, 1, { y:"5vw", opacity:0 }, { y:"0", opacity:1, ease: Power2.easeInOut }, "-=2")
  .fromTo(yearpop, 1, { opacity:0 }, { opacity:1, ease: Power2.easeInOut }, "-=1")
  .fromTo(scrolldown, 1, { opacity:0 }, { opacity:1, ease: Power2.easeInOut }, "-=0.5");

  // scrollreveal
  ScrollReveal({
    reset: false, 
    distance: "50px"
  });
  ScrollReveal().reveal('.section-title, .slogan-shodo-bg', {
    delay: 500,
    duration: 2000,
    origin: "bottom" 
  });
  ScrollReveal().reveal('.slogan-shodo-img', {
    delay: 500,
    duration: 2000,
    origin: "right" 
  });
  ScrollReveal().reveal('.slogan-message, .uncho, .kancho, .somu', {
    delay: 500,
    duration: 2000,
    origin: "left" 
  });
  ScrollReveal().reveal('.message-namebox', {
    delay: 1000,
    duration: 1000,
    origin: "bottom" 
  });

}, 4000);


//rellax.js
// var rellax = new Rellax('.top-mountain-two');
// var rellax = new Rellax('.top-mountain-two-resp');
// var rellax = new Rellax('.top-moon');
// var rellax = new Rellax('.top-cloud1', {
//   horizontal: true
// });
// var rellax = new Rellax('.top-cloud2', {
//   horizontal: true
// });
// var rellax = new Rellax('.top-cloud3', {
//   horizontal: true
// });
// var rellax = new Rellax('.slogan-shodo-bg', {
//   speed: 1
// });


// ハンバーガーメニューボタントリガー
let hamburger_menu_btn = document.querySelector(".hamburger-menu-button");
let navigations_resp = document.querySelector(".navigations-resp");
hamburger_menu_btn.onclick = () => {
  hamburger_menu_btn.classList.toggle("open");
  if (navigations_resp.classList.contains("open")) {
    navigations_resp.classList.remove("open");
    navigations_resp.classList.add("closed");
  } else {
    navigations_resp.classList.remove("closed");
    navigations_resp.classList.add("open");
  }
};
let navigation_button1 = document.querySelector(".navigation-button1");
let navigation_button2 = document.querySelector(".navigation-button2");
let navigation_button3 = document.querySelector(".navigation-button3");
let navigation_button4 = document.querySelector(".navigation-button4");

navigation_button1.onclick = () => { onclickevent(); }
navigation_button2.onclick = () => { onclickevent(); }
navigation_button3.onclick = () => { onclickevent(); }
navigation_button4.onclick = () => { onclickevent(); }

function onclickevent() {
  hamburger_menu_btn.classList.remove("open");
  navigations_resp.classList.remove("open");
  navigations_resp.classList.add("closed");
}