var searchElement = "";
var flag = false;
var finalTools = [];
var toolString = "k,g,i,n,u,e,f,a,b,s";
var tools = ["knife", "gun", "bomb", "poison"];
var toolList = [
  {
    name: "gun",
    weight: 5,
    power: 250
  },
  {
    name: "knife",
    weight: 1,
    power: 50
  },
  {
    name: "shotgun",
    weight: 7,
    power: 300
  },
  {
    name: "bomb",
    weight: 10,
    power: 500
  },
  {
    name: "arrow",
    weight: 2,
    power: 100
  }
];
var targetWeight = 100;
var tempToolList = [];
var temptoolListObj = {
  weight: 0,
  power: 0,
  list: []
};
function myNewFunction() {
  var tempToolString = toolString.split(",");
  tools.forEach(element => {
    var count = 0;
    var tempTools = element.split("");
    tempTools.forEach(innerElement => {
      searchElement = innerElement;
      if (tempToolString.find(isFindElement)) {
        count++;
      }
    });
    if (count === element.length) {
      finalTools.push(element);
    }
  });
  console.log(finalTools);
}

function isFindElement(element) {
  return element === searchElement;
}

function myFunction() {
  var value = toolList.length - 2;
  var counter = 0;
  var dummyArray = [];
  var dummyWeight = 0;
  var dummyPower = 0;
  for (let index = 0; index < toolList.length; index++) {
    const element = toolList[index];
    dummyArray.push(element);
    dummyWeight = dummyWeight + element.weight;
    dummyPower = dummyPower + element.power;
  }
  if (dummyWeight <= targetWeight) {
    var dummy = { ...temptoolListObj };
    dummy.list = dummyArray;
    dummy.weight = dummyWeight;
    dummy.power = dummyPower;
    tempToolList.push(dummy);
  }
  for (let outerIndex = 0; outerIndex < toolList.length - 1; outerIndex++) {
    for (let index = 0; index < toolList.length; index++) {
      const element = toolList[index];
      var weight = element.weight;
      var power = element.power;
      var tempArray = [];
      tempArray.push(element);
      for (
        let innerindex = 0;
        innerindex < toolList.length - value;
        innerindex++
      ) {
        if (index + innerindex + 1 >= toolList.length) {
          counter = index + innerindex + 1 - toolList.length;
        } else {
          counter = index + innerindex + 1;
        }
        const innerElement = toolList[counter];
        tempArray.push(innerElement);
        weight = weight + innerElement.weight;
        power = power + innerElement.power;
      }
      if (weight <= targetWeight) {
        var dummyObj = { ...temptoolListObj };
        dummyObj.list = tempArray;
        dummyObj.weight = weight;
        dummyObj.power = power;
        tempToolList.push(dummyObj);
      }
    }
    value++;
  }
  tempToolList.forEach(element => {
    console.log("Weight : " + element.weight);
    console.log("Items : " + element.list.length);
  });

  tempToolList.sort(function(a, b) {
    return b.power - a.power;
  });
}

myFunction();
