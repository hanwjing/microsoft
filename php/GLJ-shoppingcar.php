<?php
header("content-style:application/json");

$datas=["data"=>[
          [
 			"src"=>"images/kw9-00265-300Wx180H-1.png",
 			"text1"=>"Windows 10 家庭版",
 			"text2"=>"电子下载版",
 			"price"=>"1088"
          ],
          [
 			"src"=>"images/MIC1966-300Wx180H-1.png",
 			"text1"=>"微软Surface Pro（第五代）",
 			"text2"=>"酷睿 i5/8GB/256GB/亮铂金",
 			"price"=>"7688"
          ],
          [
 			"src"=>"images/QQ2-00009-300Wx180H-1.jpg",
 			"text1"=>"Office 365 订阅 - 1年新订或续订",
 			"text2"=>"个人版激活密钥",
 			"price"=>"398"
          ]
]];
echo json_encode($datas);

?>