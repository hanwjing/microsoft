<?php 

	header('Content-Type: application/javascript');
    $array=file_get_contents("../json/load.json");
    $obj = json_decode($array,true);
    $array = json_encode($obj);
    $callback_name = $_GET['callback'];
    if(isset($array)){
        echo "typeof {$callback_name} === 'function' && {$callback_name}({$array})";
    }

 ?>