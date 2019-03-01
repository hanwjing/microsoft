<?php 
	header("Content-Type:application/javascript; charset=utf8");
	$share = ["datas"=>[
			[
				"src"=>"gtt_image/gtt_share1.png",
				"h3"=>"微博",
				"p"=>"过节也不能忘了刷微博哦"],
			[
				"src"=>"gtt_image/gtt_share2.png",
				"h3"=>"QQ",
				"p"=>"建立连接，随意聊天"],
			[
				"src"=>"gtt_image/gtt_share3.png",
				"h3"=>"微信for Windows10",
				"p"=>"微信拜年啦"]		
		]
	];
	echo json_encode($share);
 ?>