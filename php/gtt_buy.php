<?php 
	header("Content-Type:application/javascript; charset=utf8");
	$buy = ["datas"=>[
			[
				"class"=>"gtt_buy1",
				"src"=>"gtt_image/gtt_buy1.png",
				"name"=>"Surface Pro"],
			[
				"class"=>"gtt_buy2",
				"src"=>"gtt_image/gtt_buy2.png",
				"name"=>"Surface Laptop"],
			[
				"class"=>"gtt_buy3",
				"src"=>"gtt_image/gtt_buy3.png",
				"name"=>"Surface Studio"],
		]
	];
	echo json_encode($buy);
 ?>