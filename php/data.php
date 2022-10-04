<?php 
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: text/html; charset=utf-8');

	$server = 'localhost';
	$username = 'u1309068_root';
	$password = 'r5ckm7i';
	$namebase = 'u1309068_default';

	mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
	$conn = new mysqli($server, $username, $password, $namebase);
	mysqli_set_charset($conn, 'utf8');

	$mass_price = array();

	if($conn->connect_error) {
		die('Connection faild: ' .$conn->connect_error);
	}

	else {
		$sql = "SELECT `value` FROM `prices`";

		$result = mysqli_query($conn, $sql);

		while ($row = mysqli_fetch_array($result)) {
			$mass_price[] = $row['value'];
		}
		
		$mass_price_finish = $mass_price;
	}
	echo json_encode($mass_price_finish);
?>
