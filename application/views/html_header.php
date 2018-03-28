<?php echo doctype('html5'); ?>
<html lang="pt-BR">
	<head>
		<title><?php echo $title; ?></title>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
		<?php 
		$meta = array(
			array('name' => 'robots', 'content' => 'no-cache'),
			array('name' => 'description', 'content' => $description),
			array('name' => 'keywords', 'content' => $keywords),
			array('name' => 'robots', 'content' => 'no-cache'),
			array('name' => 'Content-type', 'content' => 'text/html;charset=utf-8', 'type' => 'equiv')
		);
		echo meta($meta);
		echo link_tag('assets/images/favicon.ico', 'shortcut icon', 'image/ico');
		echo link_tag('assets/css/jquery.fullPage.css');
		echo link_tag('assets/css/examples.css');
		echo link_tag('assets/css/style.css');
		echo link_tag('assets/fancybox/source/jquery.fancybox.css?v=2.1.5');
		echo script_tag('assets/fancybox/source/jquery.fancybox.js?v=2.1.5');
		echo script_tag('assets/js/jquery.fullPage.js');
		echo script_tag('assets/js/examples.js');
		echo script_tag('assets/js/jFuncoes.js');
		?>
		 <!--[if IE]>
		  <script type="text/javascript">
		   var console = { log: function() {} };
		  </script>
		 <![endif]-->

	     <script type="text/javascript">
	      $(document).ready(function() {
	      $('#fullpage').fullpage({
	        anchors: ['home', 'portfolio', 'lancamentos', 'empresa', 'contato'],
			menu: '#menu',
	        autoScrolling: false
	      });
	      });
	     </script>

	     <script>
		  $(window).load(function() {
			$('.blueberry').blueberry();
		  });
		 </script>

		 <script type="text/javascript">
		  $(document).ready(function() {
		  $('.fancybox').fancybox();
		  });
		 </script>
	</head>
<body>




