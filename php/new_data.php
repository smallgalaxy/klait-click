<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: text/html; charset=utf-8');

	if($_POST['data']) {
		$param = json_decode($_POST['data']);

		$server = 'localhost';
		$username = 'u1309068_root';
		$password = 'r5ckm7i';
		$namebase = 'u1309068_default';

		$conn = new mysqli($server, $username, $password, $namebase);
		mysqli_set_charset($conn, 'utf8');

		$mass_price = array();

		if($conn->connect_error) {
			die('Connection faild: ' .$conn->connect_error);
			echo json_encode('не подключен');
		}

		else {
			$conn->query("INSERT INTO `base` VALUES(NULL, '$param->type', '$param->count', '$param->summa', '$param->Email', '$param->link', 0)");
			$id = $conn->insert_id;
            echo json_encode($id);
            exit();
		}
	}
?>