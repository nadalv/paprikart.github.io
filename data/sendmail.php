<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
     // The request is using the POST method
    $name=$_REQUEST['ime'];
    $email=$_REQUEST['mejl'];
    $telefon=$_REQUEST['tel'];
    $message=$_REQUEST['poruka'];
    if (($name=="")||($email=="")||($telefon=="")){
    		echo "Sva polja su obavezna, molim vas popunite  <a href=\"\">formu</a> ponovo.";
    }
    else{   
      $sender  = "info@paprikart.rs";
        // $from="From: $name<$sender>\r\nReturn-path: $sender";
        $from= "info@paprikart.rs";
        $subject="Kontakt forma - paket";
        $poruka = "
                   Ime    : ".$name. " 
                   Mejl   : ".$email. "  
                   Tel    : ".$telefon. "  
        ";
        $poruka .= $message;
        $to = "s.vladan1981@gmail.com";
      $headers = "From: info@paprikart.rs" . "\r\n" .
      "CC: dinicdarko@gmail.com";  
      $poslato = mail($to,$subject,$poruka,$headers);      
      if ($poslato) {
        echo "<p> <br>Poslata poruka.<br /> Javljamo se ASAP." ;
      } else {
      	$errorMessage = error_get_last()['message'];
        echo "<p> <br>Poruka nije poslata.<br /> pokusajte ponovo.";
      }
 

    }  
}else{
	echo "<p> <br>Došlo je do greške na serveru.<br /> Molimo, pokušajte kasnije.";
}

?>