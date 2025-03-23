<script src="script.js" defer></script>
document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
                this.textContent = "+ " + this.dataset.title;
            } else {
                content.style.display = "block";
                this.textContent = "- " + this.dataset.title;
            }
        });
    });
});
