const menu_link_1 = document.getElementById("menu_link_1");
const menu_link_2 = document.getElementById("menu_link_2");
const menu_link_3 = document.getElementById("menu_link_3");
const menu_link_4 = document.getElementById("menu_link_4");

const form_submit = document.getElementById("form_submit");
const paint_button = document.getElementById("paint_button");

const paintGif = document.getElementById("paintGif");
const cans = document.querySelector(".cans");

const g1 = document.getElementById("g1");
const g2 = document.getElementById("g2");
const g3 = document.getElementById("g3");
const g4 = document.getElementById("g4");

const gallery_image1 = document.getElementById("gallery_image1");
const gallery_image2 = document.getElementById("gallery_image2");
const gallery_image3 = document.getElementById("gallery_image3");
const gallery_image4 = document.getElementById("gallery_image4");

const gallery_image1Style = window.getComputedStyle(gallery_image1);

const screen_w = window.innerWidth;
const screen_h = window.innerHeight;

const spray = document.querySelector('.spray');

let count = 0;

function hiddenSpray(){
    spray.classList.add("hidden")
}

menu_link_1.addEventListener('mouseover', function(){
    let c = menu_link_1.getBoundingClientRect();
    spray.style.top = c.top-35 + "px";
    spray.style.left = c.left-45 + "px";
    spray.style.animation = "fade 0.3s";
    spray.style.opacity = "1"
    spray.classList.remove("hidden");
})

menu_link_1.addEventListener('mouseout', function(){
    spray.style.animation = "hidden 0.3s";
    spray.style.opacity = "0"
})

menu_link_2.addEventListener('mouseover', function(){
     let c = menu_link_2.getBoundingClientRect();
     spray.style.top = c.top-35 + "px";
     spray.style.left = c.left-75 + "px";
    spray.style.animation = "fade 0.3s";
    spray.style.opacity = "1"
     spray.classList.remove("hidden");
})

 menu_link_2.addEventListener('mouseout', function(){
    spray.style.animation = "hidden 0.3s";
    spray.style.opacity = "0"
})

 menu_link_3.addEventListener('mouseover', function(){
     let c = menu_link_3.getBoundingClientRect();
     spray.style.top = c.top-35 + "px";
     spray.style.left = c.left-65 + "px";
    spray.style.animation = "fade 0.3s";
    spray.style.opacity = "1"
     spray.classList.remove("hidden");
})

menu_link_3.addEventListener('mouseout', function(){
    spray.style.animation = "hidden 0.3s";
    spray.style.opacity = "0"
})

menu_link_4.addEventListener('mouseover', function(){
     let c = menu_link_4.getBoundingClientRect();
     spray.style.top = c.top-35 + "px";
     spray.style.left = c.left-55 + "px";
     spray.style.animation = "fade 0.3s";
    spray.style.opacity = "1"
     spray.classList.remove("hidden");
})

menu_link_4.addEventListener('mouseout', function(){
    spray.style.animation = "hidden 0.3s";
    spray.style.opacity = "0"
})

// cans.addEventListener('mouseover', function(){
//   let c = cans.getBoundingClientRect();
//   paintGif.style.left = c.left + "px";
//   paintGif.style.animation = "fade 0.3s";
//   paintGif.style.opacity = "1"
//   paintGif.classList.remove("hidden");
// })

// cans.addEventListener('mouseout', function(){
//  spray.style.animation = "hidden 0.3s";
//  spray.style.opacity = "0"
// })

let c = cans.getBoundingClientRect();
if (screen_w >= 1280 ) {
paintGif.style.left = c.left-10 + "px";
}
    
setTimeout(function() {
  g1.addEventListener('mouseover', function(){
    g1.style.animation = "fade 0.3s";
    g1.style.opacity = '1';
  }),
  g1.addEventListener('mouseout', function(){
    g1.style.animation = "hidden 0.3s";
    g1.style.opacity = '0';
  })

  g2.addEventListener('mouseover', function(){
    g2.style.animation = "fade 0.3s";
    g2.style.opacity = '1';
  })
  g2.addEventListener('mouseout', function(){
    g2.style.animation = "hidden 0.3s";
    g2.style.opacity = '0';
  })

  g3.addEventListener('mouseover', function(){
    g3.style.animation = "fade 0.3s";
    g3.style.opacity = '1';
  })
  g3.addEventListener('mouseout', function(){
    g3.style.animation = "hidden 0.3s";
    g3.style.opacity = '0';
  })

  g4.addEventListener('mouseover', function(){
    g4.style.animation = "fade 0.3s";
    g4.style.opacity = '1';
  })
  g4.addEventListener('mouseout', function(){
    g4.style.animation = "hidden 0.3s";
    g4.style.opacity = '0';
  })

}
, 1500)

form_submit.addEventListener('mouseover', function(){
    paint_button.style.animation = "changecolor 1s";
})

form_submit.addEventListener('mouseout', function(){
    paint_button.style.animation = "changecolorReverse 0.3s";
})

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('show');
      }
    });
  }

  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.cans');
  for (let elm of elements) {
    observer.observe(elm);
  }

  let options2 = { threshold: [0.5] };
  let observer2 = new IntersectionObserver(onEntry, options2);
  let elements2 = document.querySelectorAll('.form_text');
  for (let elm2 of elements2) {
    observer.observe(elm2);
  }

  let options3 = { threshold: [0.5] };
  let observer3 = new IntersectionObserver(onEntry, options3);
  let elements3 = document.querySelectorAll('.gallery_image1');
  for (let elm3 of elements3) {
    observer.observe(elm3);
  }

  let options5 = { threshold: [0.5] };
  let observer5 = new IntersectionObserver(onEntry, options5);
  let elements5 = document.querySelectorAll('.gallery_image3');
  for (let elm5 of elements5) {
    observer.observe(elm5);
  }

  let options6 = { threshold: [0.5] };
  let observer6 = new IntersectionObserver(onEntry, options6);
  let elements6 = document.querySelectorAll('.gallery_image4');
  for (let elm6 of elements6) {
    observer.observe(elm6);
  }

if (screen_w < 1280) {
  paintGif.style.left = 200 + "px";
}

  let options8 = { threshold: [0.5] };
  let observer8 = new IntersectionObserver(onEntry, options8);
  let elements8 = document.querySelectorAll('.paintGif');
  for (let elm8 of elements8) {
    observer.observe(elm8);
  }
