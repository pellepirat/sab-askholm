<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Process and send email
    $to = "bestyrelsen@sab-askholm.dk"; // Your email address
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    echo "Meddelelse sendt!";
}
?>
