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


// Driver Code