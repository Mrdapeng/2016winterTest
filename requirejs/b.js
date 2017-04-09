/**
 * Created by Administrator on 2017/2/19.
 */
define(['c'], function (isArr) {
    function sortArr(arr) {
        if (isArr(arr)) {
            return arr.sort(function (a, b) {
                return a - b;
            })

        } else {
            return false;
        }
    }

    return sortArr;

});