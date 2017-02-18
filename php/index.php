<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Document</title>
</head>
<body>


</body>
</html>
<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/16
 * Time: 20:28
 */
$conn = @mysqli_connect('localhost:3306 ', 'root', '');
mysqli_select_db('test', $conn);
if ($conn) {
    echo "sucee";
//    print_r($conn);
    $result = mysqli_query("SELECT*FROM users");
    $data_count = mysql_num_rows($result);

    for ($i=0;$i<$data_count;$i++){
        print_r(mysql_fetch_assoc ($result));
    }
} else {
    echo "so sad";
}
?>