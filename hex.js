function currentTime() {
  var date = new Date()
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()

  var array = [hours, minutes, seconds].map(function(num) {
    return num < 10 ? "0" + num : String(num)
  })

  hours = array[0]
  minutes = array[1]
  seconds = array[2]

  return hours + minutes + seconds
}

function clock(digit) {
  var color = " # " + digit
  document.body.bgColor = color
  document.querySelector("#time").textContent = color
}

setInterval(function() {
  clock(currentTime())
}, 1000)
