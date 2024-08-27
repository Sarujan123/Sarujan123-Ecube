<?php
//get data from form  

$firstname = $_POST['firstName'];
$lastname = $_POST['lastName'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "hello@ecubemediausa.com";
$subject = "Mail From website";


$txt ="FirstName = ". $firstname . "\r\n  LastName = ". $lastname . "\r\n   Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>