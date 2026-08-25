// ===========================
// PORTFOLIO JS
// Sumit Singh Portfolio
// ===========================

// ===========================
// MOBILE MENU
// ===========================

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

if(menuIcon){

    menuIcon.addEventListener("click",()=>{

        navbar.classList.toggle("active");

        const icon = menuIcon.querySelector("i");

        if(navbar.classList.contains("active")){

            icon.classList.remove("bx-menu");
            icon.classList.add("bx-x");

        }else{

            icon.classList.remove("bx-x");
            icon.classList.add("bx-menu");
        }
    });
}

// Close menu on click

document.querySelectorAll(".navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("bx-x");
        icon.classList.add("bx-menu");
    });
});

// ===========================
// DARK / LIGHT MODE
// ===========================

const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){

    const currentTheme = localStorage.getItem("theme");

    if(currentTheme === "light"){

        document.body.classList.add("light-mode");

        themeBtn.innerHTML =
            "<i class='bx bx-sun'></i>";
    }

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){

            localStorage.setItem("theme","light");

            themeBtn.innerHTML =
                "<i class='bx bx-sun'></i>";

        }else{

            localStorage.setItem("theme","dark");

            themeBtn.innerHTML =
                "<i class='bx bx-moon'></i>";
        }
    });
}

// ===========================
// TYPING EFFECT
// ===========================

const typingElement =
document.querySelector(".typing-text");

const typingWords = [

    "AI & ML Engineer",
    "Java Developer",
    "Data Analytics Enthusiast",
    "Problem Solver",
    "Tech Explorer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingAnimation(){

    if(!typingElement) return;

    const currentWord =
    typingWords[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(
                typingAnimation,
                1800
            );

            return;
        }

    }else{

        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= typingWords.length){

                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typingAnimation,
        deleting ? 60 : 120
    );
}

typingAnimation();

// ===========================
// ACTIVE NAV LINK
// ===========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ){

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{

        link.classList.remove("active-link");

        if(
            link.getAttribute("href") ===
            "#" + current
        ){

            link.classList.add("active-link");
        }
    });
});

// ===========================
// HEADER SHADOW
// ===========================

const header =
document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow = "none";
    }
});

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================

const revealElements =
document.querySelectorAll(

    ".hero-content,\
     .hero-image,\
     .about-card,\
     .skill-card,\
     .timeline-item,\
     .project-card,\
     .contact-card,\
     .section-title"

);

const revealObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show-animation"
            );
        }
    });

},
{
    threshold:0.15
}

);

revealElements.forEach(el=>{

    el.classList.add("hidden-animation");

    revealObserver.observe(el);
});

// ===========================
// COUNTER ANIMATION
// ===========================

const counters =
document.querySelectorAll("[data-count]");

const counterObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter =
entry.target;

const target =
+counter.dataset.count;

let current = 0;

const speed = target / 80;

const updateCounter = ()=>{

if(current < target){

current += speed;

counter.innerText =
Math.ceil(current);

requestAnimationFrame(
updateCounter
);

}else{

counter.innerText = target;
}
};

updateCounter();

counterObserver.unobserve(counter);
}

});

},
{
threshold:0.5
}

);

counters.forEach(counter=>{

counterObserver.observe(counter);
});

// ===========================
// PARALLAX EFFECT
// ===========================

window.addEventListener("mousemove",(e)=>{

const blur1 =
document.querySelector(".blur-1");

const blur2 =
document.querySelector(".blur-2");

if(!blur1 || !blur2) return;

const x =
e.clientX / window.innerWidth;

const y =
e.clientY / window.innerHeight;

blur1.style.transform =
`translate(${x * 40}px,
${y * 40}px)`;

blur2.style.transform =
`translate(${-x * 40}px,
${-y * 40}px)`;
});

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

window.scrollTo({

top:
target.offsetTop - 70,

behavior:"smooth"

});
}

});
});

// ===========================
// PAGE LOADER EFFECT
// ===========================

window.addEventListener("load",()=>{

document.body.classList.add(
"loaded"
);

console.log(
"Portfolio Loaded Successfully 🚀"
);

});

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log(
"%cWelcome To Sumit Singh Portfolio 🚀",
"color:#38bdf8;font-size:18px;font-weight:bold;"
);

console.log(
"%cAI & ML Engineer",
"color:#8b5cf6;font-size:14px;"
);