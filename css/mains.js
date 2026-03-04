function launchConfetti() {
    for(let i = 0; i < 100; i++) {
        let c = document.createElement('div');
        c.textContent = ['🔦','✨','🌟','⚡'][Math.floor(Math.random()*4)];
        c.style.position = 'fixed';
        c.style.left = Math.random()*100 + 'vw';
        c.style.top = '-30px';
        c.style.fontSize = '25px';
        c.style.zIndex = '99999';
        c.style.transition = 'all 3s';
        document.body.appendChild(c);
        setTimeout(() => {
            c.style.transform = `translateY(${window.innerHeight + 200}px) rotate(${Math.random()*1000}deg)`;
            c.style.opacity = '0';
        }, 50);
        setTimeout(() => c.remove(), 3500);
    }
}
document.addEventListener('keydown', e => { if(e.key.toLowerCase() === 'l') launchConfetti(); });