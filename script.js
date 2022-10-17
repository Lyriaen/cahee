const nav = document.querySelector("nav");
const sectionOne = document.querySelector("header");

const sectionFresh = {
    rootMargin: "-100px 0px 0px 0px"
};

const sectionFreshObserver = new IntersectionObserver(function (
    entries, secionFreshObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add("nav-scrolled");
        } else {
            nav.classList.remove("nav-scrolled");
        }
    })
}, sectionFresh);

sectionFreshObserver.observe(sectionOne);