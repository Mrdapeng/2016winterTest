<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/23
 * Time: 13:33
 */
//$con = mysqli_connect('localhost:3306', "root", "");
//if ($con){
//    echo "success";
//    print_r($con);
//}die{
//    echo "erro";
//}
//if (!$con) {
//    die("erro" . mysqli_error());
//}
//echo "success";
//if (mysqli_query($con,"set name db")) {
//    echo  "DATABASE Created";
//}else {
//    echo "error creating database";
//}
//mysqli_close($con);
//$servername = "localhost";
//$username = "root";
//$password = "";
//$conn = new mysqli($servername, $username, $password);
//if ($conn->connect_error) {
//    die("connect failed") . $conn->connect_error;
//
//}
//echo "connected successfully";
//$servername = "localhost";
//$username = 'root';
//$passwod = '';
//$dbname='myDB';
//$conn = new mysqli($servername, $username, $passwod,$dbname);
//if ($conn->connect_error) {
//    die('connected failed'. $conn->connect_error);
//
//}
//$sql = "CREATE TABLE MyGuests (
//id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//firstname VARCHAR(30) NOT NULL,
//lastname VARCHAR(30) NOT NULL,
//email VARCHAR(50),
//reg_date TIMESTAMP
//)";
//
//if ($conn->query($sql) === true) {
//    echo "Database created successfully";
//} else {
//    echo 'erro creating database' . $conn->error;
//}
//$conn->close();


$serername = "localhost";
$usernmae = "root";
$passwor = "";
$dbname = "myDB";
$conn = new mysqli($serername, $usernmae, $passwor, $dbname);
//if (!$conn) {
//
//    die("conection failed" . mysqli_connect_error());
//}
//$sql = "INSERT INTO MyGuests(firstname,lastname,email)
//VALUES ('join','Doe','join@example.com')";
//
//if (mysqli_query($conn, $sql)) {
//
//    echo 'new record created successfully';
//
//
//} else {
//
//    echo "erro" . $sql . "<br>" . mysqli_error($conn);
//
//
//}
//mysqli_close($conn);
//

if ($conn->connect_error) {
    die("connect failed") . $conn->connect_error;
}
$sql = "INSERT INTO 
MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com');";
$sql .= "INSERT INTO 
MyGuests (firstname, lastname, email)
VALUES ('Mary', 'Moe', 'mary@example.com');";
if ($conn->multi_query($sql) === true) {
    echo "new records successfully";

} else {
    echo "erro" . $sql . "<br>" . $conn->error;

}
mysqli_close($conn);


?>