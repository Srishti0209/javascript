const ansArray = [];
const ans = arr.filter((row, index) => {
    let soldier =0;
    let civilians = 0;
    debugger;
    console.log("row" + row);
    console.log("index" + index);
    for(elem of row){
        console.log(elem);
        elem ? soldier++ : civilians++;
    }
    const obj = {
        'soldier' : soldier,
        'civilians' : civilians,
        'index' : index,
        'weak' : soldier < civilians ? true : false
    }
    ansArray.push(obj);
    console.log("object -->", obj);
});



/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    console.log(mat);
    const ansArray = [];
   let matrixObject = mat.filter((row, index) => {
        
        const soldiers = 0;
        const civilians = 0;
        for(key in row){
            key ? soldiers+1 : civilians+1;
        }
        ansArray.push({
            "rowNumber": index,
            "precedence": soldiers-civilians
    });
        return {
                "rowNumber": index,
                "precedence": soldiers-civilians
        }
    });
    console.log(matrixObject);
    const newSimArray = matrixObject.sort(a,b => {
        a.precedence - b.precedence;
    });
    console.log(newSimArray);
};
