<?php


/*
 NOTES:
 - keywords are NOT case sensitive
 - a variable starts with the $ sign, variable names are case sensitive, alfa-numeric and underscore
 - scopes: local, global, static
 - constants are global!
 - function names are NOT case sensitive
*/


# data types
$stringish = "Hello world!";
$numberish = 5985;
$floatish = 10.365;
$boolish = true;
$nullish = null;
$arrayish = array("↑", "↑", "↓", "↓", "←", "→", "←", "→", "B", "A");
echo "Arrayish has " . count($arrayish) . " elements.\n";

# static
static $staticky = 0;

# associative arrays
$hours = array("Peter" => "35", "Ben" => "37", "Joe" => "43");
foreach($hours as $key => $value) {
  echo "$key: $value";
}

# objects
class Guitar {
  function Guitar($tuning) {
    $this->tuning = $tuning;
  }
}
$guitar = new Guitar('EADGBE');

# constants
define("SPEED_OF_LIGHT", 299792458);
print SPEED_OF_LIGHT;

# exception & error handling
try {
  throw new Exception("The James Exception");
} catch(Exception $e) {
  echo 'Exception caught: ' .$e->getMessage();
}
class CustomException extends Exception {
  public function errorMessage() {
    //error message
    return "Error on line $this->getLine()  in $this->getFile(): $this->getMessage().";
  }
}
throw new CustomException('This is my custom exception message');
die("File not found");
function customError(error_level, error_message, error_file, error_line, error_context) { /* ...*/ }
set_error_handler("customError");
# error_levels:
# 2    E_WARNING           Non-fatal run-time errors, execution not halted
# 8    E_NOTICE            Run-time notices, might be an error
# 256  E_USER_ERROR	       Fatal user-generated error, like E_ERROR using trigger_error()
# 512  E_USER_WARNING	     Non-fatal user-generated warning, like E_WARNING using trigger_error()
# 1024 E_USER_NOTICE	     User-generated notice, like E_NOTICE using trigger_error()
# 4096 E_RECOVERABLE_ERROR Catchable fatal error, like E_ERROR but can be caught by a user defined handle (see also set_error_handler())
# 8191 E_ALL	             All errors and warnings

var_dump($guitar);
var_dump($arrayish);
print "\n\twee";
print "$stringish $numberish $floatish $boolish $nullish";

# superglobals:
# $GLOBALS - PHP stores all global variables here...
# $_SERVER - headers, paths, script locations
# $_REQUEST - request-specifics, like form data
# $_POST - POST data
#  $_POST["name"]
# $_GET - GET data
#   $_GET["name"]
# $_FILES
# $_ENV
# $_COOKIE
# $_SESSION

# sessions
session_start();
$_SESSION["favcolor"] = "yellow";
session_unset();  // remove all session variables
session_destroy(); // destroy the session

# useful
htmlspecialchars('<>'); # output: "&lt; &gt;"
trim(' fdsa  ');
stripslashes('\n\n');
preg_match("/^[a-zA-Z ]*$/", 'John Smith');
filter_var('tinc2k@gmail.com', FILTER_VALIDATE_EMAIL);
filter_var('#passw0rd$!\"@#RFMY%$_+WG\/"', FILTER_SANITIZE_STRING);
filter_var("127.0.0.1", FILTER_VALIDATE_IP)

?>
