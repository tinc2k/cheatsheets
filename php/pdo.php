<?php

# xampp notes:

# http://localhost/phpmyadmin/

# connect, disconnect
$servername = "localhost";  #xampp default
$username = "root";         #xampp default
$password = "";             #xampp default
$dbname = "test";           #xampp default

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
//$conn = null; # disconnect

# execution (note: wrap in catch(PDOException $e))
# $sql = "CREATE DATABASE myDBPDO";
# $conn->exec($sql); # exec() doesn't return results
# $last_id = $conn->lastInsertId();

# transactions (note: catch PDOException!)
# $conn->beginTransaction();
# $conn->exec("INSERT INTO MyGuests (firstname, lastname, email) VALUES ('John', 'Doe', 'john@example.com')");
# $conn->exec("INSERT INTO MyGuests (firstname, lastname, email) VALUES ('Mary', 'Moe', 'mary@example.com')");
# $conn->commit();

# prepared statements (note: catch PDOException!)
$stmt = $conn->prepare("INSERT INTO Users(email) VALUES (:email)");
$stmt->bindParam(':email', $email);
$email = "example5@google.com";
$stmt->execute();

$stmt = $conn->prepare("SELECT * FROM Users");
$stmt->setFetchMode(PDO::FETCH_ASSOC);
$stmt->execute();
$results = $stmt->fetchAll();
var_dump($results);
echo $stmt->rowCount();


?>
