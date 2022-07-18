const s = "12:00:00AM";

function timeConversion(s) {
  const amOrPM = s.slice(s.length - 2);
  const trimmedStart = s.slice(2, s.length);
  let hours = Number(s.slice(0, 2));
  if (amOrPM === "PM") {
    if (hours !== 12) {
      hours += 12;
    }
  } else {
    if (hours <= 9) {
      hours = "0" + hours;
    }
    if (hours === 12) {
      hours = "00";
    }
  }
  return String(hours + trimmedStart).slice(0, s.length - 2);
}

timeConversion(s);
