// Lets write a function for the given problem using javascript


function convertTime(time) {
  
  var time_12 = s.split(":")
  var ans_time = []
  var str_time = ''

  if (time_12[2].includes("AM")) {

    if (time_12[0] == 12) {
        var new_hr = "00"    
    }else{
        var new_hr = time_12[0]
      }

    var new_sec = time_12[2].slice(0, -2)
    var new_min = time_12[1]
    str_time = `${new_hr}:${new_min}:${new_sec}`
  } else if (time_12[2].includes("PM")) {
    
      if (time_12[0] == 12) {
          var new_hr = "12"
      } else{
          var hr_conv =  parseInt(time_12[0])
          hr_conv += 12
          var new_hr = hr_conv
        }


      var new_min = time_12[1]
      var new_sec = time_12[2].slice(0, -2)
      str_time = `${new_hr}:${new_min}:${new_sec}`
    }  

  return str_time
}

// Test Case 1
var s = "12:40:22AM"
var output = convertTime(s)
console.log(output);


// Test Case 2
var s = "12:38:59PM"
var output = convertTime(s)
console.log(output);


// Test Case 3
var s = "06:00:07AM"
var output = convertTime(s)
console.log(output);


// Test Case 4
var s = "04:12:17PM"
var output = convertTime(s)
console.log(output);
