<?php
	header('Content-Type: text/html; charset=utf-8');

	$hash = sha1($_POST['notification_type'].'&'.
	$_POST['operation_id'].'&'.
	$_POST['amount'].'&'.
	$_POST['currency'].'&'.
	$_POST['datetime'].'&'.
	$_POST['sender'].'&'.
	$_POST['codepro'].'&'.
	'7RE8ZZuBtPV7UE1BldF0RAqm'.'&'.
	$_POST['label']);

	if ($_POST['sha1_hash'] != $hash or $_POST['codepro'] === true or $_POST['unaccepted'] === true) exit('error');

	$server = 'localhost';
	$username = 'u1309068_root';
	$password = 'r5ckm7i';
	$namebase = 'u1309068_default';

	$conn = new mysqli($server, $username, $password, $namebase);
	mysqli_set_charset($conn, 'utf8');

	$mass_price = array();

	if($conn->connect_error) {
		die('Connection faild: ' .$conn->connect_error);
	}

	else {
		$new_id = $_POST['label'];
		$query = "UPDATE `base` SET statys='1' WHERE id='$new_id'";
		$result = mysqli_query($conn, $query);
	}
?>