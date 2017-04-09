<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/23
 * Time: 22:44
 */
$servername = "localhost";
$username = "root";
$pwd = "";
$dbname = "myDB";
$conn = new mysqli($servername, $username, $pwd, $dbname);
if ($conn->connect_error) {

    die( "failed to connect" . $conn->error);

}
$sql = "INSERT INTO MyGuests(firstname,lastname,email)
VALUES ('aaa','aaa','aaa@qq.com')";
$sql .= "INSERT INTO MyGuests(firstname,lastname,email)
VALUES ('bbb','bbb','bbb@qq.com')";
if ($conn->multi_query($sql) === true) {
    echo "new records is ok";


} else {
    echo "failed " . $sql . "<br>" . $conn->error;
}
$conn->close();