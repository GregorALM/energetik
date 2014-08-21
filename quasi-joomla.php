<?php 
	$tamplate = '<li><img src="img/projects/project-7.jpg" alt=""><a href="#" class="cover">
						<img src="img/eye.svg" alt="Подробнее" class="icon">
						<p class="name">Календарь <br>ОАО «Газпром  газораспределение»</p>
						<p class="type">Печатная продукция</p>
					</a></li>';
	$need = $_POST['need'];

	for ($i=0; $i < $need ; $i++) { 
		$output = $output . $tamplate;
	};

	echo $output;
?>