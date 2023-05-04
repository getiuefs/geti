<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'From: yoursite.com'; 
$to = 'contatosgeti@gmail.com'; 
$subject = 'teste de email';
$body = "From: $name\n E-Mail: $email\n Message:\n $message";

$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html\r\n";
$headers .= 'From: from@example.com' . "\r\n" .
'Reply-To: reply@example.com' . "\r\n" .
'X-Mailer: PHP/' . phpversion();
	
mail($to, $subject, $message, $headers);
				
?>
