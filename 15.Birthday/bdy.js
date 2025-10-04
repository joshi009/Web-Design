function showWish() {
  document.getElementById("wishMessage").style.display = "block";
}

// Confetti effect
for (let i = 0; i < 50; i++) {
  let confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.top = Math.random() * -100 + "px";
  confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
  confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(confetti);
}

// heart
// Floating hearts effect
for (let i = 0; i < 30; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 4 + 's';
  heart.style.opacity = Math.random();
  document.body.appendChild(heart);
}
