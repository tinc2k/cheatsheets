<?php



# connect, disconnect
$servername = "localhost";
$username = "username";
$password = "password";
try {
  $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: $e->getMessage().";
}
$conn = null;

# execution (note: wrap in catch(PDOException $e))
$sql = "CREATE DATABASE myDBPDO";
$conn->exec($sql); # exec() doesn't return results
$last_id = $conn->lastInsertId();

# transactions (note: catch PDOException!)
$conn->beginTransaction();
$conn->exec("INSERT INTO MyGuests (firstname, lastname, email) VALUES ('John', 'Doe', 'john@example.com')");
$conn->exec("INSERT INTO MyGuests (firstname, lastname, email) VALUES ('Mary', 'Moe', 'mary@example.com')");
$conn->commit();

# prepared statements (note: catch PDOException!)
$stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname) VALUES (:firstname, :lastname)");
$stmt->bindParam(':firstname', $firstname);
$stmt->bindParam(':lastname', $lastname);
$firstname = "John";
$lastname = "Doe";
$stmt->execute();
$stmt->setFetchMode(PDO::FETCH_ASSOC);
$stmt->fetchAll();
echo $stmt->rowCount();


?>
