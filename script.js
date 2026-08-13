const toggle=document.getElementById("mobileToggle");
const sidebar=document.getElementById("sidebar");
const links=document.querySelectorAll(".nav-link");
toggle.addEventListener("click",()=>sidebar.classList.toggle("open"));
links.forEach(link=>link.addEventListener("click",()=>sidebar.classList.remove("open")));

const sections=[...document.querySelectorAll("section[id]")];
const setActive=()=>{
    const y=window.scrollY+180;
    let current="home";
    sections.forEach(section=>{if(y>=section.offsetTop) current=section.id;});
    links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+current));
};
window.addEventListener("scroll",setActive);
setActive();

// Typed.js with colored tags
var typed = new Typed('#typed', {
    strings: [
        '<span style="color: var(--accent)">Laravel</span> PHP <span style="color: var(--accent)">Developer</span> <i style="color: var(--accent)">·</i> <span style="color: var(--accent)">Web</span> Developer',
        '<span style="color: var(--accent)">PHP</span> <span style="color: var(--accent)">Developer</span>',
        '<span style="color: var(--accent)">Full</span> Stack Developer',
        '<span style="color: var(--accent)">IT</span> Officer'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    contentType: 'html'
});

document.getElementById("contactForm").addEventListener("submit",(e)=>{
    const button = e.target.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
});
