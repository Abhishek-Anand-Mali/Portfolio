document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact form");
  
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Message sent successfully!");
            form.reset();
        });
    }
  
    const hireButtons = document.querySelectorAll(".hire-btn, .btn.primary");
  
    hireButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const contactSection = document.querySelector("#contact");
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
  
    // Optional: Adding functionality to download resume
    const downloadBtn = document.querySelector(".btn.secondary");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            window.location.href = "path/to/your/resume.pdf"; // Replace with actual resume file path
        });
    }
});
