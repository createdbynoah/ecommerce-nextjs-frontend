import confetti from 'canvas-confetti';

export const celebrate = () => {
  var count = 200;
  var defaults = {
    origin: { y: 0.19 },
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const formatPrice = (price) => {
  // add commas to price if it's over 1000, price is in dollars
  const priceString = price.toString();
  if (priceString.length > 3) {
    return `$${priceString.slice(0, -3)},${priceString.slice(-3)}`;
  } else {
    return `$${priceString}`;
  }
};
