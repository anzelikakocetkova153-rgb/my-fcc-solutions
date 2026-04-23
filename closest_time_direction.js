function getDirection(time1, time2) {
  let [h1, m1] = time1.split(":");
  let [h2, m2] = time2.split(":");
  h1 = Number(h1);
  m1 = Number(m1);
  h2 = Number(h2);
  m2 = Number(m2);
  let start = h1 * 60 + m1;
  let end = h2 * 60 + m2;
  let forward;
  if (end >= start) {
    forward = end - start;
  } else {
    forward = (end + 1440) - start;
  }
  let backward = 1440 - forward;

  if(forward < backward) {
    return "forward";
  } else if (backward < forward) {
    return "backward"
  } else {
    return "equal"
  }
}
