var meta = [1, 2, [3, 4, [5]], 6, [7, [8, 9, [10, 11, [12]]]]];
// function fillArray(array,result){
//     var count = array.length;
//     var i = 0;
//     for(;i<count;++i){
//         var temp = array[i];
//         if(Array.isArray(temp)){
//             fillArray(temp,result);
//         } else {
//             result.push(array[i]);
//         }
//     }
// }
// var result = [];
// fillArray(meta,result);
// console.log('递归处理的结果：',result);
// function fillarry(arry,result) {
//     var i=0;
//     var count=arry.length;
//     for (;i<count;i++){
//         var temp=arry[i];
//         if (Array.isArray(temp)) {
//             fillarry(temp,result);
//         }else {
//             result.push(arry[i]);
//         }
//     }
//
// }
//1.0end
//2.0start
var resultMap = {};
function fillArry(arry, result) {
    var count = arry.length;
    var i = 0;

    if (!count) {
        var temp=arry[i];
        var g=resultMap[temp];

        if (g) {
            result.push(g);
        }else {
            if (Array.isArray(temp)) {
                fillArry(temp,result);
            }else {
                result.push(temp);
            }
        }
    }

}
// var result = [];
// fillarry(meta, result);
// console.log(result);
