<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "taxamoedas";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT currency, rate FROM taxasDeCambio";
$result = $conn->query($sql);

$data = array();
while($row = $result->fetch_assoc()) {
  $data[$row["currency"]] = $row["rate"];
}

echo json_encode($data);

$conn->close();
?>