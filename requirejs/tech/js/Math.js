/**
 * Created by Administrator on 2017/2/19.
 */
define(function () {


    return {


            add: function (a, b) {
                return a + b;
            },
            sub: function (a, b) {
                return a - b;
            },
            mitrx: function (a, b) {
                return a * b;
            },
            minus: function (a, b) {
                return a - b;
            },
            max: function (a, b) {
                return a > b ? a : b;

            },
            min: function (a, b) {
                return a < b ? a : b;
            }


    }


});