// slider

const slider = document.querySelector(".hero-list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const mySiema = new Siema({
  selector: slider,
  loop: true,
  duration: 800,
});

function onNextClick() {
  mySiema.next();
}
function onPrevClick() {
  mySiema.prev();
}

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);

// for images

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});


// scroll 

AOS.init();

// need add to html data atributes