<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/24
 * Time: 21:22
 */

$servername = "localhost";
$username = "root";
$pwd = "";
$dbname = "myDB";
$conn = new mysqli($servername, $username, $pwd, $dbname);
if ($conn->connect_error) {
    echo "falied connect" . $conn->connect_error;
}

//$sql = "SELECT id,firstname,lastname FROM MyGuests";
//$reult = $conn->query($sql);
//if ($reult->num_rows > 0) {
//
//    while ($row = $reult->fetch_assoc()) {
//
//        echo "<br> id:" . $row["id"] . "-Name:" . $row["firstname"] . "" . $row["lastname"];
//
//    }
//} else {
//    echo "0 results";
//}

$sql = "SELECT * FROM MyGuests WHERE firstname='John'";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)) {

    echo $row["firstname"] . " " . $row['lastname'];
    echo "<br>";
}
$conn->close();