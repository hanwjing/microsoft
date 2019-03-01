<?php 
	header("Content-Type:application/javascript; charset=utf8");
	$photo = ["datas"=>[
			[
				"src"=>"gtt_image/gtt_photo1.png",
				"h3"=>"泼辣修图",
				"p"=>"高人气修图应用，轻松上手，打造精彩细节。"],
			[
				"src"=>"gtt_image/gtt_photo2.png",
				"h3"=>"Adobe Photoshop...",
				"p"=>"常常说的PS就是它"],
			[
				"src"=>"gtt_image/gtt_photo3.png",
				"h3"=>"来画视频",
				"p"=>"轻松制作手绘视频，简单易用，海量素材"]		
		]
	];
	echo json_encode($photo);
 ?>