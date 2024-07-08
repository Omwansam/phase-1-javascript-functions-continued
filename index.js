// code your solution here
function saturdayFun(activity) {
    if (activity === undefined) {
      activity = "roller-skate";
    }
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun("bathe my dog"));
  console.log(saturdayFun());
  
  function mondayWork(activity) {
    if (activity === undefined) {
      activity = "go to the office";
    }
    return `This Monday, I will ${activity}.`;
  }
  
  console.log(saturdayFun("work from home"));
  console.log(saturdayFun());
  
  function wrapAdjective(visual = "*") {
    return function(adj = "special") {
      return `You are ${visual}${adj}${visual}!`;
    };
  }
  
  const encouragingFunction = wrapAdjective("!!!")
  console.log(encouragingFunction(" Dedicated programmer"));
