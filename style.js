// Get the header element
const header = document.getElementById('header');

// Function to add/remove glass effect on scroll
window.addEventListener('scroll', function() {
    // Get the vertical position of the scroll
    const scrollPosition = window.scrollY;

    // Check if the user has scrolled past the first section (adjust the value if needed)
    if (scrollPosition > window.innerHeight) {
        header.classList.add('glass');
    } else {
        header.classList.remove('glass');
    }
});

    
const navbar = document.querySelector(".navbar");
document.querySelector("#menu").onclick = () =>{
    navbar.classList.toggle('active');
}

const closebtn = document.getElementById('close');
closebtn.addEventListener('click', ()=>{
  navbar.classList.remove('active');
});

function camera(){
    const canvas = document.querySelector('.hero canvas');
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index){
        let data = `img/ezgif-frame-001.png
                img/ezgif-frame-002.png
                img/ezgif-frame-003.png
                img/ezgif-frame-004.png
                img/ezgif-frame-005.png
                img/ezgif-frame-006.png
                img/ezgif-frame-007.png
                img/ezgif-frame-008.png
                img/ezgif-frame-009.png
                img/ezgif-frame-010.png
                img/ezgif-frame-011.png
                img/ezgif-frame-012.png
                img/ezgif-frame-013.png
                img/ezgif-frame-014.png
                img/ezgif-frame-015.png
                img/ezgif-frame-016.png
                img/ezgif-frame-017.png
                img/ezgif-frame-018.png
                img/ezgif-frame-018.png
                img/ezgif-frame-020.png
                img/ezgif-frame-021.png
                img/ezgif-frame-022.png
                img/ezgif-frame-023.png
                img/ezgif-frame-024.png
                img/ezgif-frame-025.png
                img/ezgif-frame-026.png
                img/ezgif-frame-027.png
                img/ezgif-frame-028.png
                img/ezgif-frame-029.png
                img/ezgif-frame-030.png
                img/ezgif-frame-031.png
                img/ezgif-frame-031.png
                img/ezgif-frame-032.png
                img/ezgif-frame-033.png
                img/ezgif-frame-034.png
                img/ezgif-frame-035.png
                img/ezgif-frame-036.png
                img/ezgif-frame-037.png
                img/ezgif-frame-038.png
                img/ezgif-frame-039.png
                img/ezgif-frame-040.png
                img/ezgif-frame-041.png
                img/ezgif-frame-042.png
                img/ezgif-frame-043.png
                img/ezgif-frame-044.png
                img/ezgif-frame-045.png
                img/ezgif-frame-046.png
                img/ezgif-frame-047.png
                img/ezgif-frame-048.png
                img/ezgif-frame-049.png
                img/ezgif-frame-050.png
                img/ezgif-frame-051.png
                img/ezgif-frame-052.png
                img/ezgif-frame-053.png
                img/ezgif-frame-054.png
                img/ezgif-frame-055.png
                img/ezgif-frame-056.png
                img/ezgif-frame-057.png
                img/ezgif-frame-058.png
                img/ezgif-frame-059.png
                img/ezgif-frame-060.png
                img/ezgif-frame-061.png
                img/ezgif-frame-062.png
                img/ezgif-frame-063.png
                img/ezgif-frame-064.png
                img/ezgif-frame-065.png
                img/ezgif-frame-066.png
                img/ezgif-frame-067.png
                img/ezgif-frame-068.png
                img/ezgif-frame-069.png
                img/ezgif-frame-070.png
                img/ezgif-frame-071.png
                img/ezgif-frame-072.png
                img/ezgif-frame-073.png
                img/ezgif-frame-074.png
                img/ezgif-frame-075.png
                img/ezgif-frame-076.png
                img/ezgif-frame-077.png
                img/ezgif-frame-078.png
                img/ezgif-frame-079.png
                img/ezgif-frame-080.png
                    `;
        return data.trim().split("\n")[index];
    }

    const frameCount = 80;
    const images = [];
    const imageseq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

    function render() {
        scaleImage(images[imageseq.frame], context);
    }

    images[0].onload = render;

    gsap.to(imageseq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 5, // Increased value to slow down the scroll animation
            trigger: ".hero",
            start: "top 0%",
            end: "bottom 0%"
        },
        onUpdate: render
    });

    gsap.to(".hero canvas", {
        scrollTrigger: {
            scrub: 5, // Increased value to slow down the scroll animation
            trigger: ".hero",
            start: "bottom 0%",
            ease: "none"
        }
    });

    ScrollTrigger.create({
        trigger: ".hero",
        pin: true,
        start: "top 0%"
    });
}

camera();

const video = document.getElementById("customVideo");
const playButton = document.getElementById("customPlayButton");

playButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  } else {
    video.pause();
    playButton.style.display = "block";
  }
});

video.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  } else {
    video.pause();
    playButton.style.display = "block";
  }
});

// Optional for a slower scroll speed
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});


// Detect when the "Work" section is in the viewport
window.addEventListener('scroll', function() {
  const workSection = document.getElementById('footer');
  const icon = document.querySelector('.uppericon');
  
  const sectionPosition = workSection.getBoundingClientRect();
  
  // Check if the Work section is in view
  if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
      icon.style.display = 'block';  // Show the icon
  } else {
      icon.style.display = 'none';   // Hide the icon when out of view
  }
});

let loader = document.querySelector(".loading");

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("dispper");
}

document.addEventListener("DOMContentLoaded", function () {
  // Create the custom circle cursor
  const circleCursor = document.createElement('div');
  circleCursor.classList.add('circle-cursor');
  document.body.appendChild(circleCursor);

  // Update cursor position on mouse move
  document.addEventListener('mousemove', (e) => {
      circleCursor.style.left = e.pageX + 'px';
      circleCursor.style.top = e.pageY + 'px';
  });
});






