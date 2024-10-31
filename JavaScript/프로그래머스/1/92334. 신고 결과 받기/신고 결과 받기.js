function solution(id_list, reports, k) {
  const reportMap = new Map(id_list.map(id => [id, new Set()]));
  const resultMap = new Map(id_list.map(id => [id, 0]));

  reports.forEach(report => {
      const [reporter, reported] = report.split(' ');
      reportMap.get(reported).add(reporter);
  });

  reportMap.forEach((reporters, _) => {
      if (reporters.size >= k) {
          reporters.forEach(reporter => {
              resultMap.set(reporter, resultMap.get(reporter) + 1);
          });
      }
  });

  return Array.from(id_list, id => resultMap.get(id));
}
