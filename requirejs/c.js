/**
 * Created by Administrator on 2017/2/19.
 */
define(function () {
    function isArr(arr) {

        if (arr instanceof Array) {
            return true;
        }
        else {
            return false;
        }
    }
    return isArr;
});