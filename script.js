

// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll("nav ul a");

// window.addEventListener("scroll", function () {
//   let current = "";

//   sections.forEach(function (section) {
//     if (window.scrollY >= section.offsetTop - 100) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach(function (link) {
//     link.style.color = "#94a3b8";
//     if (link.getAttribute("href") === "#" + current) {
//       link.style.color = "#38bdf8";
//     }
//   });
// });




// const cards = document.querySelectorAll(".card, .timeline-item, .contact-box");


// cards.forEach(function (card) {
//   card.style.opacity = "0";
//   card.style.transform = "translateY(20px)";
//   card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
// });

// function revealOnScroll() {
//   cards.forEach(function (card) {
//     var cardTop = card.getBoundingClientRect().top;
//     if (cardTop < window.innerHeight - 60) {
//       card.style.opacity = "1";
//       card.style.transform = "translateY(0)";
//     }
//   });
// }

// window.addEventListener("scroll", revealOnScroll);
// revealOnScroll(); 




// navLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     var targetId = link.getAttribute("href").replace("#", "");
//     var target = document.getElementById(targetId);
//     if (target) {
//       window.scrollTo({
//         top: target.offsetTop - 70,
//         behavior: "smooth"
//       });
//     }
//   });
// });











window.onscroll = () => {
  const scrollPos = window.scrollY + 100;

  
  document.querySelectorAll("section").forEach(sec => {
    if (scrollPos >= sec.offsetTop) {
      document.querySelectorAll("nav a").forEach(link => {
        link.style.color = link.hash === "#" + sec.id ? "#38bdf8" : "#94a3b8";
      });
    }
  });

  
  document.querySelectorAll(".card, .timeline-item, .contact-box").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};


document.querySelectorAll(".card, .timeline-item, .contact-box").forEach(el => {
  el.style.transition = "0.5s";
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
});

document.querySelectorAll("nav a").forEach(link => {
  link.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: document.querySelector(link.hash).offsetTop - 70, behavior: "smooth" });
  };
});