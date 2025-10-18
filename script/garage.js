document.addEventListener("DOMContentLoaded", () => {
    const showcaseImages = [
        "img/showcase-1.png",
        "img/showcase-2.png",
        "img/showcase-3.png",
        "img/showcase-4.png"
    ];

    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.querySelector(".close-modal");
    const detailButtons = document.querySelectorAll(".detail-button");

    // Add click event to each detail button
    detailButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const index = button.getAttribute("data-index");
            modalImage.src = showcaseImages[index];
            modal.classList.add("active");
        });
    });

    // Close modal when clicking X
    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.classList.remove("active");
        }
    });
});
