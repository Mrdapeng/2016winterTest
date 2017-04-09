<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/22
 * Time: 13:15
 */
if (isset($_GET["name"])) {
    echo 'hello ' . $_GET["name"];
} else {
    echo 'erro';
}