// Lets write a function for the given problem using javascript

function gradeSystem(grade) {
  var final_grade = []

  for(let i = 0; i< grade.length; i++) {
      
      if (grade[i] < 38) {
          final_grade.push(grade[i])
      } else{
          let grade_mul = grade[i]
          while(grade_mul % 5 != 0 ) {
                  
              grade_mul++
          }
          if (grade_mul - grade[i] < 3) {
              final_grade.push(grade_mul)
          }else {
              final_grade.push(grade[i])
          }
      }
  }

  return final_grade
}

// Test Case 1
var grades = [73, 67, 38, 33]
var output = gradeSystem(grades)
console.log(output);



// Test Case 2
grades = [84, 29, 57]
output = gradeSystem(grades)
console.log(output);