<?php 
	header("Content-Type:application/javascript; charset=utf8");
	$music = ["datas"=>[
			[
				"src"=>"gtt_image/gtt_music1.png",
				"h3"=>"QQ音乐",
				"p"=>"找到属于自己的流行音乐和音乐社区"],
			[
				"src"=>"gtt_image/gtt_music2.png",
				"h3"=>"喜马拉雅",
				"p"=>"新闻、脱口秀、音乐、小说...随时随地听我想听"],
			[
				"src"=>"gtt_image/gtt_music3.png",
				"h3"=>"Dolby Acess",
				"p"=>"尝试和体验震撼的杜比全景声，让你的家庭影院全面升级"],
			[
				"src"=>"gtt_image/gtt_music4.png",
				"h3"=>"Shazam",
				"p"=>"无论在哪即使没有连接到网络也能识别歌曲"]			
		]
	];
	echo json_encode($music);
 ?>