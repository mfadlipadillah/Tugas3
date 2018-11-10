<?php
	foreach($_POST as $post) {
		echo $post."<br />";
	}
	if($_POST["pass"]==$_POST["cfmpass"]) {
		echo "Password sudah benar <br />";
	}
	else {
		echo "Password salah <br />";
	}
?>