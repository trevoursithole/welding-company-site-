document.addEventListener("DOMContentLoaded", function() {
    // 1. Image Zoom Setup
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const closeBtn = document.querySelector(".close-modal");
    const galleryImages = document.querySelectorAll(".zoomable");

    galleryImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    // 2. Modal Close Logic
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // 3. Smooth Spark Movement
    const spark = document.querySelector('.floating-tool');
    document.addEventListener('mousemove', (e) => {
        if(spark) {
            const x = (e.clientX - window.innerWidth / 2) / 60;
            const y = (e.clientY - window.innerHeight / 2) / 60;
            spark.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
});