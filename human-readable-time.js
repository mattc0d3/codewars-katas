function humanReadable (seconds) {
    let time = ""
    const hours = Math.floor(seconds / 3600).toString()
    time += (hours[1] ? hours : "0" + hours) + ":"
    seconds = seconds % 3600
    const minutes = Math.floor(seconds / 60).toString()
    time += (minutes[1] ? minutes : "0" + minutes) + ":"
    seconds = (seconds % 60).toString()
    time += seconds[1] ? seconds : "0" + seconds
    return time;
  }

console.log(humanReadable(0)) // 00:00:00
console.log(humanReadable(59)) // 00:00:59
console.log(humanReadable(60)) // 00:01:00
console.log(humanReadable(90)) // 00:01:30
console.log(humanReadable(3599)) // 00:59:59
console.log(humanReadable(45296)) // 12:34:56
console.log(humanReadable(86399)) // 23:59:59
console.log(humanReadable(86400)) // 24:00:00
console.log(humanReadable(359999)) // 99:59:59