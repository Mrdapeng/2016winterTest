<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/24
 * Time: 14:42
 */

$servername = "localhost";
$username = "root";
$pwd = "";
$dbname = "myDB";
$conn = new mysqli($servername, $username, $pwd, $dbname);
if ($conn->connect_error) {
    die("failed to connect ") . $conn->connect_error;
}
$strReady = $conn->prepare("INSERT INTO MyGuests ('firstname,lastname,email')VALUES (?,?,?)");
$strReady->bind_param("sss", $firstname, $lastname, $email);

$firstname = "john";
$lastname = "eoe";
$email = "aaa@qq.com";
$strReady->execute();

$firstname = "john";
$lastname = "eoe";
$email = "aaa@qq.com";
$strReady->execute();


$firstname = "john";
$lastname = "eoe";
$email = "aaa@qq.com";
$strReady->execute();

echo "new recored is ready";
