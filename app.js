// Smooth scroll for all internal links 
document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener("click", function (e) { 
        e.preventDefault(); 
        const target = document.querySelector(this.getAttribute("href")); 
        if (target) { 
            target.scrollIntoView({ behavior: "smooth" }); 
        } 
    }); 
}); 
// Modal elements 
const modal = document.getElementById("imageModal"); 
const modalImg = document.getElementById("fullImage"); 
const closeBtn = document.querySelector(".close"); 
const resumeImg = document.getElementById("resumeImage"); 
// Show modal when clicking resume image 
resumeImg.addEventListener("click", () => { 
    modal.style.display = "block"; 
    modalImg.src = resumeImg.src; 
}); 
// Close modal when clicking close button 
closeBtn.addEventListener("click", () => { 
    modal.style.display = "none"; 
}); 
// Close modal when clicking outside the image 
modal.addEventListener("click", (e) => { 
    if (e.target === modal) { 
        modal.style.display = "none"; 
    } 
});