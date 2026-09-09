var solution = function(M) {
  M = JSON.parse(M);
  if (M.length === 0) {
    return 0;
  }

  let len = M.length;
  let result = [];
  let nestedRes = [];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (M[i][j] === 1) {
        nestedRes.push(j);
        M[i][j] = M[j][i] = "#";
      }
    }
    let finalResult = isSameSubset(result, nestedRes);
    if (finalResult === "push") {
      result.push(nestedRes);
    } else if (finalResult != "none") {
      result.pop();
      result.push(finalResult);
    }
    nestedRes = [];
  }
  return result.join("|");
};

function isSameSubset(nestedArr, arr) {
  if (arr.length == 1 && nestedArr.flat().indexOf(arr[0]) > -1) {
    return "none";
  }
  if (nestedArr.length) {
    for (var i = 0; i < arr.length; i++) {
      if (nestedArr.flat().indexOf(arr[i]) > -1) {
        let dummyArr = [...nestedArr];
        dummyArr.push(arr[i + 1]);
        nestedArr = dummyArr.flat();
        return nestedArr;
      } else {
        return "push";
      }
    }
  } else {
    return "push";
  }
}

let res = solution("[ [1,1,0,1], [1,1,1,0], [0,1,1,1], [0,1,0,1] ]");
