// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed nav
                behavior: 'smooth'
            });
        });

    document.querySelectorAll('.read-more-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = '';
            content.style.overflow = 'hidden';
            content.style.display = '-webkit-box';
            button.textContent = 'Read More';
        } else {
            content.style.maxHeight = 'none';
            content.style.overflow = 'visible';
            content.style.display = 'block';
            button.textContent = 'Show Less';
        }
    });
});

    });

    

    // Animate Skills Progress Bars when in View
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress');

    window.addEventListener('scroll', () => {
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionPos < windowHeight - 100) {
            progressBars.forEach(bar => {
                bar.style.width = bar.parentElement.querySelector('.progress').getAttribute('style').split('width: ')[1];
            });
        }
    });

    // Modal Functionality
    const modal = document.getElementById("modal");
    const closeModalBtn = document.querySelector(".modal-content .close");

    // Open Modal Function
    function openModal(title, description, image) {
        const modalTitle = document.getElementById("modal-title");
        const modalDescription = document.getElementById("modal-description");
        const modalImage = document.getElementById("modal-image");

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalImage.src = image;

        modal.style.display = "flex";
    }

    // Close Modal Function
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close Modal by Clicking Outside
    window.addEventListener("click", (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    // Example: Attach Modal to Project Items
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('h3').textContent;
            const description = item.querySelector('p').textContent;
            const image = item.querySelector('img').src;

            openModal(title, description, image);
        });
    });
});

// Function to show Key Highlights
function showHighlights() {
    document.getElementById('intro').style.display = 'none'; // Hide Intro
    document.getElementById('highlights').style.display = 'block'; // Show Highlights
    document.getElementById('vision').style.display = 'none'; // Hide Vision
}

function showIntro() {
    document.getElementById('highlights').style.display = 'none'; // Hide Highlights
    document.getElementById('vision').style.display = 'none'; // Hide Vision
    document.getElementById('intro').style.display = 'block'; // Show Intro
}

function showVision() {
    document.getElementById('highlights').style.display = 'none'; // Hide Highlights
    document.getElementById('vision').style.display = 'block'; // Show Vision
}
