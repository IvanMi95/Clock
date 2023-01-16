window.onload = () => {
  const setHours = document.getElementById("hours")
  const setMinutes = document.getElementById("minutes")
  const setSeconds = document.getElementById("seconds")
  const setAmPm = document.getElementById("amPm")

  setInterval(watch, 1000);

  function watch() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    minutes < 10 ? setMinutes.innerText = `0${minutes}` : setMinutes.innerText = minutes
    seconds < 10 ? setSeconds.innerText = `0${seconds}` : setSeconds.innerText = seconds

    if (hours < 12) {
      setAmPm.innerText = "AM"
      hours < 10 ? setHours.innerText = `0${hours}` : setHours.innerText = hours
    } else {
      hours - 12 < 10 ? setHours.innerText = `0${hours - 12}` : setHours.innerText = hours - 12
      setAmPm.innerText = "PM"
    }
  }


}