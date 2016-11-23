<?php

if ((isset($_POST['email']) && $_POST['email'])) {
    $email_from = 'no-reply@os-system.com';
    $subject = 'Your coffee landing is awesome!';

    $headers = "From: " . $email_from . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=\"utf8\"\r\n";
    $headers .= "Reply-To: " . $email_from . "\r\n";

    $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Client Email: ' . htmlspecialchars($_POST['email']) . '</p>
                    </body>
                </html>';

    mail('info@exspressio.com', $subject, $message, $headers);
}
