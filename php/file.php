<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/23
 * Time: 9:46
 */

//echo readfile('a.txt');
//echo "</br>";
//$myfile=fopen('a.txt','r') or  die('unable to open file');
//echo fread($myfile,filesize('a.txt'));
//fclose($myfile);
//$myfile=fopen('a.txt','r') or die("unable to open file ");
///*
// * fgets用于读取单行
// * */
//echo  fgets($myfile);

//fclose($myfile);
//feof遍历未知行数据很有用
//$myfile=fopen('note.doc','r') or die("unable to open file ");
////while (!feof($myfile)){
////
////    echo fgets($myfile)."<br>";
////
////
////}
////fclose($myfile);
//while (!feof($myfile)){
//    echo fgetc($myfile);
//}
//fclose($myfile);
//$myfile = fopen("aa.txt", "a    ") or die("unable to open file");
//$txt="aaaa gates\n"."ccc bbb\n";
//fwrite($myfile,$txt);
//echo filesize('aa.txt');
//fclose($myfile);
setcookie("user","people",time()+3600);
if (isset($_COOKIE['user'])){
    echo $_COOKIE['user'];
    print_r($_COOKIE);
}