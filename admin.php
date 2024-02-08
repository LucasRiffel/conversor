<?php
$url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_LEOmCrl72SAGrTYLg4s9tzUGD1a9DYJqg6WJn0u9";
$response = file_get_contents($url);
$data = json_decode($response, true);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "taxamoedas";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

foreach ($data as $currency => $rate) {
  $sql = "INSERT INTO taxasDeCambio (currency, rate) VALUES ('$currency', $rate)";
  if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

$conn->close();
?>
