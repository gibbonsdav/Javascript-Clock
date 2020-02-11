function Clock() {
  let time = new Date()

  let hours = time.getHours()
  hours = hours > 12 ? hours - 12 : hours
  hours = hours == 0 ? 12 : hours

  let minutes = time.getMinutes()
  let seconds = time.getSeconds()

  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds
  hours = hours < 10 ? "0" + hours : hours

  let Display = hours + ":" + minutes + ":" + seconds

  document.getElementById("JSclock").firstChild.nodeValue = Display

  minutes = (minutes < 10 ? "0" : "") + minutes
  seconds = (seconds < 10 ? "0" : "") + seconds
}
