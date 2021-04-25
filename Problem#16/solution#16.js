var countMatches = function(items, ruleKey, ruleValue) {
  var checkInd;
  var count = 0;
  
  if(ruleKey == 'type') {
      checkInd = 0;
  }else if (ruleKey == 'color') {
      checkInd = 1;
  }else if (ruleKey == 'name') {
      checkInd = 2;
  }
  
  for(let i=0; i<items.length; i++) {
      if(items[i][checkInd] == ruleValue) {
          count++;
      }
  }
  return count;
};



// Test Case 1
var items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];
var ruleKey = "color";
var ruleValue = "silver";

console.log(countMatches(items, ruleKey, ruleValue));



// Test Case 2
items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]];
ruleKey = "type";
ruleValue = "phone";

console.log(countMatches(items, ruleKey, ruleValue));

