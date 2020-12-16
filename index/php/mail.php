<?php
  $name = $_POST['name'];
  $phone = $_POST['phone number'];
  $place = $_POST['place'];
  $date =$_POST['date'];
  $time =$_POST['time'];

  $to = $_POST['email'];
  $subject = "=?utf-8?B?".base64_encode("Заявка на резервирование столика в SWEET NIGHT")."?=";
  $message = "Вы забронировали $place на имя $name\nДата и время:$date\r$time\nСпасибо что выбрали нас!\n♡ ♡ ♡"  ;
  $headers = array(
    'From' => 'bun.with.cinnabon@gmail.com',
    'Reply-To' => $to,
    'Content-type:'=> 'text/html',
    'charset'=> 'utf-8',
    'X-Mailer' => 'PHP/' . phpversion()
);

  $success = mail($to, $subject, $message, $headers);
  echo $success;
?>
