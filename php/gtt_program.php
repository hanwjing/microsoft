<?php 
	header("Content-Type:application/javascript; charset=utf8");
	$program = ["datas"=>[
			[
				"src"=>"gtt_image/gtt_program1.png",
				"h3"=>"爱奇艺",
				"p"=>"高清自制剧和独家大片看起来"],
			[
				"src"=>"gtt_image/gtt_program2.png",
				"h3"=>"芒果TV",
				"p"=>"热门综艺节目别错过，有“我是歌手”哦"],
			[
				"src"=>"gtt_image/gtt_program3.png",
				"h3"=>"哔哩哔哩动画for Win10",
				"p"=>"B站官方Windows 10客户端"]		
		]
	];
	echo json_encode($program);
 ?>