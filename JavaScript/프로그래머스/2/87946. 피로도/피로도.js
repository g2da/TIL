function solution(k, dungeons) {
  let maxCount = 0;

  function dfs(k, count, visited) {
    maxCount = Math.max(maxCount, count);
    for (let i = 0; i < dungeons.length; i++) {
      const [최소필요피로도, 소모피로도] = dungeons[i];

      if (!visited[i] && k >= 최소필요피로도) {
        visited[i] = true;
        dfs(k - 소모피로도, count + 1, visited);
        visited[i] = false;
      }
    }
  }

  let visitedArr = Array(dungeons.length).fill(false)
  dfs(k, 0, visitedArr);

  return maxCount;
}
