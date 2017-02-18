/**
 * Created by Administrator on 2017/1/25.
 */
function getelementByClassName(node,classname) {
    if (node.getElementsByClassName) {
        return node.getElementsByClassName(classname);
    }
    else {
        var results=new Array();
        var elems=node.getElementsByTagName("*");
        for (var i = 0; i < elems.length; i++) {
            if (elems[i].indexOf(classname) != -1) {
                results[results.length]=elems[i];
            }
        }
       return results;
    }
}