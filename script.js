// Set your launch date here
const launchDate = new Date('2025-12-31T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;

  if (diff <= 0) {
    document.getElementById('countdown').textContent = "We're live!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('countdown').innerHTML =
    `<span>${days}d</span> : <span>${hours}h</span> : <span>${minutes}m</span> : <span>${seconds}s</span>`;
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);
