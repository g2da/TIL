const [CACHE_HIT, CACHE_MISS] = [1, 5]

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * CACHE_MISS;

  let cache = [];
  let time = 0;

  for (let city of cities) {
    city = city.toLowerCase();

    if (cache.includes(city)) {
      time += CACHE_HIT;
      cache.splice(cache.indexOf(city), 1);
    } else {
      time += CACHE_MISS;
      if (cache.length >= cacheSize) cache.splice(0, 1);
    }

    cache.push(city);
  }

  return time;
}