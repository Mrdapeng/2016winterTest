<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/18
 * Time: 22:15
 */
$str='hello world c java c#';
//取字符串的位置
 echo  strpos($str,'he');
 //截取字符串
 $str1=substr($str,2,9);
 echo '</br>';
 echo  $str1;
 //分割字符串
 $str2=str_split($str,2);
 print_r($str2);
 //按什么分割
 $str3=explode(" ",$str);
echo '</br>';
print_r($str3);
print_r( "<h1>".$str3."</h1>");