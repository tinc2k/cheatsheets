<?php

require 'basics.php';

// http://php.net/manual/en/reserved.variables.server.php
$authentication = $_SERVER['HTTP_AUTHENTICATION'];
$file = $_SERVER['PHP_SELF'];
$server = $_SERVER['SERVER_NAME']; //localhost
$method = $_SERVER['REQUEST_METHOD']; //GET
$queryString = $_SERVER['QUERY_STRING'];
$https = $_SERVER['HTTPS'];




if ($_REQUEST['Authentication']) {
  $authHeader = new AuthenticationData($_REQUEST['Authentication']);
} else {
  $authHeader = new AuthenticationData(null);
}



$arr = array('a' => 1,'b' => 2,'c' => 3,'d' => 4,'e' => 5);
echo json_encode($authHeader);


class AuthenticationData {
  function AuthenticationData($token) {
      $this->token = $token;
  }
}

function printAllHeaders() {
  foreach (getallheaders() as $name => $value) {
      echo "$name: $value\n";
  }
}



# http://stackoverflow.com/questions/6384431/creating-anonymous-objects-in-php
# http://www.w3schools.com/php/php_ref_date.asp
# https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/


?>
