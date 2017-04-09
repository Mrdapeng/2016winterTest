<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/3/12
 * Time: 10:00
 */
setcookie("user", "Alex Porter", time()+3600);

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

<?php
if (isset($_COOKIE["user"]))
    echo "Welcome " . $_COOKIE["user"] . "!<br>";
else
    echo "Welcome guest!<br>";
?>
</body>
</html>
