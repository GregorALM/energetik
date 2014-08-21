<?php 
	$tamplate = '<li><img src="img/projects/project-7.jpg" alt=""><a href="#" class="cover">
						<object data="img/eye.svg" type="image/svg+xml" class="icon"><img src="img/eye.png" alt="Подробнее"></object>
						<p class="name">Календарь <br>ОАО «Газпром  газораспределение»</p>
						<p class="type">Печатная продукция</p>
					</a></li>';
	$need = $_POST['need'];

	for ($i=0; $i < $need ; $i++) { 
		$output = $output . $tamplate;
	};

	echo $output;
?>