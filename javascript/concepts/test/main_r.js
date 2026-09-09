var toolList = [
    {
    name: "shotgun",
    weight: 10,
    power: 300
  },
  {
    name: "bomb",
    weight: 7,
    power: 500
  },
  {
    name: "gun",
    weight: 5,
    power: 100
  },
  {
    name: "knife",
    weight: 1,
    power: 50
  }
];
var maxweight=17;
var combination=[];
var temp=[];
function addTwoitems(item2, item3, weight) {
  if(item2.name!=item3.name){
    var name1=""+item2.name+","+item3.name;
    var weight1=item2.weight+item3.weight;
    var power1= item2.power+item3.power;
    temp[0]={name:name1,weight:weight1,power:power1};
    if(temp[0].weight<=weight){
      combination[combination.length]=temp[0];
      return temp[0];  
    }
  }
}

function myFunction() {
  createcombinations();
  console.log(combination.length);
}

function createcombinations() {
  console.log("testing");
  for(i= 0; i<toolList.length; i++){
    var j=0;
    console.log("i"+toolList[i].name);
    if(toolList[i].weight<=maxweight){
          combination[combination.length]={name:toolList[i].name, weight:toolList[i].weight,power:toolList[i].power};
          if(toolList.length>i+j){
            for(j=0;j<toolList.length-1;j++){
              console.log(i+j);
              if(toolList.length<=i+j){
                break;
              }else{
                var temp1= addTwoitems(toolList[i],toolList[i+j],maxweight);
                console.log("temp1"+temp1);
                if(temp1){
                  for(k=toolList.length-1;k>i;k--){
                    if(toolList.length<=i+j+k){
                      break;
                    }else{
                    var temp2= addTwoitems(temp1,toolList[k],maxweight);
                    console.log("temp2"+temp2);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
        
      
  


