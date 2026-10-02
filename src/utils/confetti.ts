import confetti from 'canvas-confetti';

/**
 * Fires multi-stage celebratory confetti effects for new high records
 */
export function fireCelebrationConfetti() {
  // Left and Right cannons
  const count = 200;
  const defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#FFE135', '#FF4E50', '#FC913A', '#F9D423', '#EDE574']
  });

  fire(0.2, {
    spread: 60,
    colors: ['#00F260', '#0575E6', '#e056fd', '#f0932b', '#22a6b3']
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    colors: ['#FFD700', '#FFA500', '#FF1493']
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45
  });

  // Secondary star burst cannons after 400ms
  setTimeout(() => {
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.6 },
      colors: ['#ffd700', '#ff007f', '#00e5ff'],
      shapes: ['star', 'circle']
    });

    confetti({
      particleCount: 80,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.6 },
      colors: ['#ffd700', '#00ff66', '#a855f7'],
      shapes: ['star', 'circle']
    });
  }, 450);
}
