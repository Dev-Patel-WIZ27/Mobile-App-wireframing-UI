document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links li');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const submitBtn = document.getElementById('submit-btn');
    const successOverlay = document.getElementById('success-overlay');
    const closeOverlay = document.getElementById('close-overlay');

    // Tab Switching Logic
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const target = link.getAttribute('data-tab');
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === target) pane.classList.add('active');
            });
        });
    });

    // Figma Artboard Switching
    const artBtns = document.querySelectorAll('.art-btn');
    const figmaImg = document.getElementById('figma-img');

    artBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetImg = btn.getAttribute('data-img');
            
            // Update active btn
            artBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update Image
            figmaImg.src = `assets/${targetImg}`;
        });
    });

    // Mock Submit Logic
    submitBtn.addEventListener('click', () => {
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Submitting...</span>';
        
        setTimeout(() => {
            successOverlay.classList.remove('hidden');
            submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> <span>Submit Work</span>';
        }, 1500);
    });

    // Close Overlay
    closeOverlay.addEventListener('click', () => {
        successOverlay.classList.add('hidden');
    });

    // Subtle Hover Effects for Glass Cards
    const glassCards = document.querySelectorAll('.glass');
    glassCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    console.log('Premium Workspace Initialized');
});
