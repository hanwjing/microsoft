<?php 
	header("Content-Type:application/javascript; charset=utf8");
	$reserve = ["datas"=>[
			[
				"src"=>"gtt_image/gtt_reserve1.png",
				"h3"=>"艺龙旅行",
				"p"=>"艺龙网官方应用"],
			[
				"src"=>"gtt_image/gtt_reserve2.png",
				"h3"=>"同程旅游",
				"p"=>"门票旅游产品购买利器"],
			[
				"src"=>"gtt_image/gtt_reserve3.png",
				"h3"=>"途家网",
				"p"=>"全球公寓民宿预订平台，住途家，在一起！"],
			[
				"src"=>"gtt_image/gtt_reserve4.png",
				"h3"=>"AccuWeather",
				"p"=>"提供准确的天气预报，全球15亿人使用"],
			[
				"src"=>"gtt_image/gtt_reserve5.png",
				"h3"=>"穹",
				"p"=>"防霾必备，一览全球400余城市、2000余监测点的实时空气质量信息"],
			[
				"src"=>"gtt_image/gtt_reserve6.png",
				"h3"=>"必应翻译",
				"p"=>"支持超过60种语言，出国旅行必备"]			
		]
	];
	echo json_encode($reserve);
 ?>