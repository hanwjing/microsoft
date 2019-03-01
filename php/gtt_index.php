<?php 
	header("Content-Type:application/javascript; charset=utf8");	
	$banner = ["banner"=>["gtt_image/gtt_banner1.jpg",
							"gtt_image/gtt_banner2.jpg",
							"gtt_image/gtt_banner1.jpg",
							"gtt_image/gtt_banner2.jpg"
						]
				];

	$json = json_encode($banner);
	echo $json;
	
 ?>