<?php

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
    $to = 'gorzanski.mateusz@gmail.com';
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = 'From: '.$_POST['email'] . "\r\n" .
        'Reply-To: '.$_POST['email'] . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    header('Location: /beta_wp/index.php/contact-me/');
}

?>