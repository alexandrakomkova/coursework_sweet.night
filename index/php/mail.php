<?php
  $name = $_POST['name'];
  $phone = $_POST['phone number'];
  $place = $_POST['place'];
  $date =$_POST['date'];
  $time =$_POST['time'];

  $to = $_POST['email'];
  $subject = "=?utf-8?B?".base64_encode("Заявка на резервирование столика в SWEET NIGHT")."?=";
  $message = 'hello';
  $headers = array(
    'From' => 'sashakomkova2001@gmail.com',
    'Reply-To' => $to,
    'Content-type:'=> 'text/html',
    'charset'=> 'utf-8',
    'X-Mailer' => 'PHP/' . phpversion()
);

  $success = mail($to, $subject, $message, $headers);
  echo $success;
?>
