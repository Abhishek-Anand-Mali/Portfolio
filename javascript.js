// Event listener for when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Selecting the contact form element (in case you want to add functionality later)
    const form = document.querySelector("#contact form");
  
    // Selecting all hire buttons (both main and primary buttons)
    const hireButtons = document.querySelectorAll(".hire-btn, .btn.primary");
  
    // Adding a click event listener to all hire buttons
    hireButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Scroll to the contact section smoothly when a hire button is clicked
            const contactSection = document.querySelector("#contact");
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
  
    // Optional: Adding functionality to download the resume when the download button is clicked
    const downloadBtn = document.querySelector(".btn.secondary");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            // Redirect to the resume file (make sure to replace the placeholder with the correct path)
            window.location.href = "path/to/your/resume.pdf"; // Replace with actual resume file path
        });
    }
});
