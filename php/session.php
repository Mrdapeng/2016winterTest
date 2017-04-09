<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/23
 * Time: 13:02
 */
session_start();
//$_SESSION['views'] = 1;
//if (isset($_SESSION['views'])) {
//    $_SESSION['views'] = $_SESSION['views'] + 1;
//
//} else {
//    $_SESSION['views']=1;
//    echo 'views'.$_SESSION['views'];
//}
//echo 'session1' . $_SESSION['views'];
if (isset($_SESSION['views'])) {
    echo $_SESSION['views'];
} else {
    $_SESSION['views'] = "cool";
    echo 'a1' . $_SESSION['views'];
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

</body>
</html>
<?php
session_destroy();


?>>