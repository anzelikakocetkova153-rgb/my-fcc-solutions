function getCleanupScore(items) {
  const values = {
    bottle: 10,
    can: 6,
    bag: 8,
    tire: 35,
    straw: 4,
    cardboard: 3,
    newspaper: 3,
    shoe: 12,
    electronics: 25,
    battery: 18,
    mattress: 38
  };

  let total = 0;
  let previousItem = null;
  let streak = 0;

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let points = 0;

    let isRare = Array.isArray(item) && item[0] === "rare";

    if (isRare) {
      points = item[1];
      previousItem = null;
      streak = 0;
    } else {
      let base = values[item];

      if (item === previousItem) {
        streak += 1;
      } else {
        streak = 1;
      }

      points = base + (streak - 1);
      previousItem = item;
    }

    let position = i + 1;

    if (position % 5 === 0) {
      let multiplier = position / 5 + 1;
      points *= multiplier;
    }

    total += points;
  }

  return total;
}