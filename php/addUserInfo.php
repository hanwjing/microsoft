<?php 
	// header('Content-Type: application/javascript');
    header("content-type:text/html;charset=utf-8");
   
	$data['telephone']=$_REQUEST['telephone'];
	$data['password']=$_REQUEST['password'];
	$array=file_get_contents("../json/load.json");
   	$obj = json_decode($array,true);
   	$obj[]=$data;
   	$array = json_encode($obj);
   	file_put_contents("../json/load.json",$array);

   	$newArray=file_get_contents("../json/load.json");
   	echo $newArray;

 ?>