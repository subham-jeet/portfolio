/*=========== toggle icon navbar ===========*/ 
let menuIon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIon.onclick = () => {
    menuIon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*=========== scroll section active link ===========*/ 
let sections = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*=========== sticky navbar===========*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrolly > 100);

    /*=========== remove toggle icon and navbar when click navbar link (scroll)===========*/ 
    menuIon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// Expand More Info in Experience Section
function showInfo(id) {
    const infoBox = document.getElementById(`info${id}`);
    if (infoBox.style.display === "block") {
        infoBox.style.display = "none";
    } else {
        infoBox.style.display = "block";
    }
}
// Testimonials Carousel
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".testimonials-wrapper");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let index = 0;
    const totalItems = document.querySelectorAll(".testimonial").length;
    const visibleItems = 2; // Show only 2 testimonials at a time

    function updateSlider() {
        const translateValue = -(index * (100 / visibleItems)) + "%";
        wrapper.style.transform = `translateX(${translateValue})`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < totalItems - visibleItems) {
            index++;
        } else {
            index = 0; // Loop back to the first testimonial
        }
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = totalItems - visibleItems; // Move to last set of testimonials
        }
        updateSlider();
    });

    updateSlider(); // Initialize
});

/*=========== scroll reveal=========*/
ScrollReveal({
    // reset: true,
    distance: '88px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading' ,{ origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-box, .contact form, .timeline-item, .testimonials-container, .social-media' ,{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image, .prev-btn, .contact-text' ,{ origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .next-btn, .contact-info' ,{ origin: 'right' });

/*=========== typed js=========*/
const typed = new Typed(".multiple-text", {
    strings: ["Software engineer", "Frontend Developer","Web App Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*=========== Resume download =========*/

document.getElementById("downloadResume").addEventListener("click", function(event) {
    event.preventDefault();
    const resumeLink = "https://drive.google.com/file/d/1OtfuZ0VFBCknkwLbqI3dGz0D_2V4xxPl/view?usp=sharing" ;  // Replace with your actual resume file path
    const win = window.open(resumeLink, "_blank");

    if (win) {
        win.focus();
    } else {
        alert("Please allow pop-ups for this website.");
    }
});



// Open Modal Function
function openModal(imageSrc, title, description, githubLink) {
    const modal = document.getElementById("projectModal");
    modal.style.display = "flex";
    modal.querySelector(".modal-image").src = imageSrc;
    modal.querySelector(".modal-title").textContent = title;
    modal.querySelector(".modal-description").textContent = description;

    // Set the GitHub repository link
    const githubIcon = modal.querySelector("#githubLink");
    githubIcon.href = githubLink;
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

// Event Listeners for Project Links
document.querySelectorAll('.projects-box a').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior

        // Add details for each project
        const projectDetails = [
            {
                image: 'images/CMS1.jpg',
                title: 'Complaint Management System',
                description: 'Designed and implemented a comprehensive (CMS) for internal use, leading a team of 10 to enhance customer support processes. Utilizing technologies like Node.js, Express, MongoDB, bcrypt, and multer, I optimized backend operations, resulting in a 45% improvement in grievance handling efficiency and a 30% reduction in complaint resolution time.',
                githubLink: 'https://github.com/subham-jeet/CMS-IndianRailways'
            },
            {
                image: 'images/fitflex1.jpg',
                title: 'FitFlex Tracker',
                description: 'Created FitFlex, a dynamic fitness tracking platform designed to enhance user fitness levels through personalized goal setting and customized workout routines. Developed a user-friendly prototype using HTML, CSS, and JavaScript, which improved user engagement by 40%. The platform also offers tailored fitness plans, including exercise routines, diet plans, and walking goals based on age, leading to a 25% increase in physical activity and a 20% boost in healthy eating habits.',
                githubLink: 'https://github.com/subham-jeet/Fitness_FitFlex'
            },
            {
                image: 'images/Gadgetweb1.jpg',
                title: 'Gadget DekhloJi',
                description: 'A dynamic webpage showcasing electronic device information using HTML, CSS, and JavaScript. Focused on responsive design to improve user experience and interface. Successfully completed tasks by adding new features and refining front-end development skills during my OctaNet Services Pvt Ltd. internship.',
                githubLink: 'https://github.com/subham-jeet/GadgetDekhloJi-Octanet'
            },
            {
                image: 'images/Doc1.jpg',
                title: 'Doctor Searching System',
                description: 'The Doctor Searching System is a dynamic web application designed to help users efficiently find doctors based on specialties, locations, and patient reviews. Built with Java Servlets, HTML, CSS, and JavaScript, it improves user engagement by 20% with seamless appointment scheduling and real-time availability checks. Leveraging Oracle Database for secure data management, it reduces data retrieval time by 15%, ensuring a smooth healthcare experience focused on patient care.',
                githubLink: 'https://github.com/subham-jeet/Doctor-Searching-System'
            },
            {
                image: 'images/portfolio2.jpg',
                title: 'Portfolio',
                description: 'My Portfolio is a dynamic and visually appealing website that highlights my professional journey, including my skills, experiences, and projects. It offers an intuitive layout for easy navigation, allowing visitors to learn more about me effortlessly. With integrated contact options, it ensures seamless communication for collaborations and opportunities.',
                githubLink: 'https://github.com/subham-jeet/portfolio.git'
            }
        ];

        // Call openModal with project-specific data
        const project = projectDetails[index];
        openModal(project.image, project.title, project.description, project.githubLink);
    });
});


