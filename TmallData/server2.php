<?php
error_reporting(0); //关闭错误报告
header('Access-Control-Allow-Origin:*');  //设置可跨域

/*
根据请求参数返回服务器下对应的文件
*/ 


$filePath = "./".$_REQUEST['name'].".json";
$file=fopen($filePath,'rb+');
echo fread($file,filesize($filePath));
fclose($file);
?>