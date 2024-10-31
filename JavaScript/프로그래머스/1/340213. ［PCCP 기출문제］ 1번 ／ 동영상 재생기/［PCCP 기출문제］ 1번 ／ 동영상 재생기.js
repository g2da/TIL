const timeToSec = (timestamp) => {
  const [m, s] = timestamp.split(":").map(Number);
  return 60 * m + s;
};

function solution(video_len, pos, op_start, op_end, commands) {
  let posSec = timeToSec(pos);
  let videoLenSec = timeToSec(video_len);
  let opStartSec = timeToSec(op_start);
  let opEndSec = timeToSec(op_end);

  if (opStartSec <= posSec && posSec <= opEndSec) {
    posSec = opEndSec;
  }

  for (let cmd of commands) {
    if (cmd === "prev") {
      posSec -= 10;
    } else {
      posSec += 10;
    }

    if (posSec < 0) {
      posSec = 0;
    } else if (posSec > videoLenSec) {
      posSec = videoLenSec;
    }

    if (opStartSec <= posSec && posSec <= opEndSec) {
      posSec = opEndSec;
    }

    console.log(`pos: ${posSec}`);
  }

  const minutes = Math.floor(posSec / 60);
  const seconds = posSec % 60;
  const answer = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return answer;
}
