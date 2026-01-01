// 3. SKILL CARDS 3D TILT EFFECT
        const skillCards = document.querySelectorAll('.arsenal-card');
        
        skillCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate rotation based on cursor position
                const xRotation = -((y - rect.height/2) / 10); // Rotate X axis
                const yRotation = ((x - rect.width/2) / 10);  // Rotate Y axis
                
                // Apply the transform
                card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.05)`;
            });

            // Reset on mouse leave
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            });
        });