<?php
//lich sử đặt hàng
use \Firebase\JWT\JWT;
require __DIR__ . '/vendor/autoload.php';
include('function.php');
include('connect/connect.php');

$key = "example_key";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$token = $obj['token'];

try{
	$decoded = JWT::decode($token, $key, array('HS256'));
	if($decoded->expire < time()){
		echo 'HET_HAN';
	}
	else{
		$email = $decoded->email;
		// echo($email);
		// $sql = "SELECT b.id, b.date_order, b.status, b.total, u.email FROM bill b INNER JOIN users u ON u.id=b.id_customer where email ='$email'";
		// $result = $mysqli->query($sql);
		$result = $mysqli->query("SELECT b.id, b.date_order, b.status, b.total, u.email FROM bill b INNER JOIN users u ON u.id=b.id_customer where email ='$email' ORDER BY date_order DESC");
		// // echo($result);
		$bill = array();
		while ($row = $result->fetch_object()){
				$bill[] = $row;
				// array_push($bill,$email);
		}
		print_r(json_encode($bill));
	}
}
catch(Exception $e){
	echo 'LOI';
}


?>