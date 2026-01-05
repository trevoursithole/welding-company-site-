document.addEventListener("DOMContentLoaded", () => {
    // 1. Workshop Status
    const status = document.getElementById('workshop-status');
    const hr = new Date().getHours();
    const day = new Date().getDay();
    if (day >= 1 && day <= 5 && hr >= 8 && hr <= 17) {
        status.innerHTML = `<i class="fas fa-circle" style="color:#25d366"></i> Open - Klip Rd`;
    } else {
        status.innerHTML = `<i class="fas fa-circle" style="color:red"></i> WhatsApp for Quote`;
    }

    // 2. Animated Stats
    const counters = document.querySelectorAll('.count');
    counters.forEach(c => {
        const target = +c.getAttribute('data-target');
        const update = () => {
            const count = +c.innerText;
            const inc = target / 50;
            if (count < target) {
                c.innerText = Math.ceil(count + inc);
                setTimeout(update, 30);
            } else { c.innerText = target + '+'; }
        };
        update();
    });

    // 3. Image Zoom
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    document.querySelectorAll(".zoomable").forEach(img => {
        img.onclick = () => { modal.style.display = "block"; modalImg.src = img.src; }
    });
    document.querySelector(".close-modal").onclick = () => modal.style.display = "none";

    // 4. Dynamic Form
    const form = document.getElementById('dynamic-form');
    form.onsubmit = async (e) => {
        e.preventDefault();
        document.getElementById('submit-btn').innerText = "Sending...";
        const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        if (response.ok) {
            form.reset();
            document.getElementById('submit-btn').style.display = "none";
            document.getElementById('form-response').style.display = "block";
        }
    };
});
