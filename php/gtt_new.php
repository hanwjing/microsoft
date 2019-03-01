<?php 
	header("Content-Type:application/javascript; charset=utf8");
	$new = ["datas"=>[
			[
				"src"=>"gtt_image/gtt_new1.png",
				"h3"=>"sketchable",
				"p"=>"提供更好的创作体验，使用自由和浪漫的无缝融合。"],
			[
				"src"=>"gtt_image/gtt_new2.png",
				"h3"=>"Zen Coloring Book",
				"p"=>"堪称电脑版的花园。休息一下，开始填色吧！"]
		]
	];
	echo json_encode($new);
 ?>