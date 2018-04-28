<?php
if(isset($_POST)){
	// print_r($_POST);
	// return;
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
     // The request is using the POST method

/*
*/	
	
	$message = "";
    $name	 = $_POST['name'];//required
    $email	 = $_POST['email'];//required
    $company = $_POST['company'];// NOT
    $telefon = $_POST['tel'];//required

    $message .= "Ime:" . $name . "<br>";
    $message .= "E-mail:" . $email . "<br>";
    $message .= "Company:" . $company . "<br>";
    $message .= "Telefon:" . $telefon . "<br>";

	$website 		= $_POST['website'];// NOT
	$redizajn 		= $_POST['redizajn'];// NOT
	$redizajnrazlog = $_POST['redizajnrazlog'];// NOT

    $message .= "Website:" . $website . "<br>";	
    $message .= "Redizajn:" . $redizajn . "<br>";	
    $message .= "Redizajnrazlog:" . $redizajnrazlog . "<br>";	

	$source		 = $_POST['source'];	 //required
	$hosting	 = $_POST['hosting'];	//required
	$domen		 = $_POST['domen'];	//required
	$designlayout= $_POST['designlayout'];	//required
	$branding	 = $_POST['branding'];	//required

    $message .= "source:" . $source . "<br>";		
    $message .= "hosting:" . $hosting . "<br>";		
    $message .= "domen:" . $domen . "<br>";		
    $message .= "designlayout:" . $designlayout . "<br>";		
    $message .= "branding:" . $branding . "<br>";		

	$features	 = $_POST['features'];	 // NOT

    $message .= "features:" . $features . "<br>";		
 
	$primersajt1 	= $_POST['primersajt1'];	//required
	$opissajt1		= $_POST['opissajt1'];	//required

    $message .= "primersajt1:" . $primersajt1 . "<br>";
    $message .= "opissajt1:" . $opissajt1 . "<br>";
	
	$primersajt2	= $_POST['primersajt2'];	//required
	$opissajt2		= $_POST['opissajt2'];	//required

    $message .= "primersajt2:" . $primersajt2 . "<br>";
    $message .= "opissajt2:" . $opissajt2 . "<br>";	
	
	$primersajt3	= $_POST['primersajt3'];	// NOT
	$opissajt3		= $_POST['opissajt3'];	// NOT

    $message .= "primersajt3:" . $primersajt3 . "<br>";
    $message .= "opissajt3:" . $opissajt3 . "<br>";	
	
	$primersajt4	= $_POST['primersajt4'];	// NOT
	$opissajt4		= $_POST['opissajt4'];	// NOT

    $message .= "primersajt4:" . $primersajt4 . "<br>";
    $message .= "opissajt4:" . $opissajt4 . "<br>";

	$additpgsfun	= $_POST['additionalpagesfuncs'];	// NOT
    $message .= "additpgsfun:" . $additpgsfun . "<br>";	

	$qualityimages	= $_POST['qualityimages'];	//required
	$fotograf		= $_POST['fotograf'];	//required
	$stockphotos	= $_POST['stockphotos'];	//required
	$setupsoc	 	= $_POST['setupsoc'];	//required

    $message .= "qualityimages:" . $qualityimages . "<br>";		
    $message .= "fotograf:" . $fotograf . "<br>";		
    $message .= "stockphotos:" . $stockphotos . "<br>";		
    $message .= "setupsoc:" . $setupsoc . "<br>";		

	$necuto	 		= $_POST['necuto'];	//NOT
    $message .= "necuto:" . $necuto . "<br>";	

	$dodavanjesadr	= $_POST['dodavanjesadrzaja'];	//required
	$responsive		= $_POST['responsive'];	//required
	$shop			= $_POST['shop'];	//required

    $message .= "dodavanjesadr:" . $dodavanjesadr . "<br>";	
    $message .= "responsive:" . $responsive . "<br>";	
    $message .= "shop:" . $shop . "<br>";	

	$brojproizvoda	= $_POST['brojproizvoda'];	//required
	$brojjezika		= $_POST['brojjezika'];	//NOT
	$krajnjirok		= $_POST['krajnjirok'];	//required
	$mockup			= $_POST['mockup'];	//NOT

    $message .= "brojproizvoda:" . $brojproizvoda . "<br>";		
    $message .= "brojjezika:" . $brojjezika . "<br>";		
    $message .= "krajnjirok:" . $krajnjirok . "<br>";		
    $message .= "mockup:" . $mockup . "<br>";		


    if (
    	($name=="")||($email=="")||($telefon=="")||
    	($source=="")||($hosting=="")||($domen=="")||($designlayout=="")||($branding=="")||
    	($primersajt1=="")||($primersajt1=="")||($primersajt2=="")||($opissajt2=="")||
    	($qualityimages=="")||($fotograf=="")||($stockphotos=="")||($setupsoc=="")||
    	($dodavanjesadr=="")||($responsive=="")||($shop=="")||($brojproizvoda=="")||($krajnjirok=="")
	){
    		// echo "Molimo Vas da popunite obavezna polja.";
    		$infoMsg = "Molimo Vas da popunite obavezna polja.";
	        header('Location: ../poruci.php?error=true');
       		 exit();
    }
    else{   
    	// echo $message;
    	// return;
      $sender  = "info@paprikart.rs";
        // $from="From: $name<$sender>\r\nReturn-path: $sender";
        $from= "info@paprikart.rs";
        $subject="Website porudzbenica";
        $poruka = "";
        $poruka .= $message;
        $to = "s.vladan1981@gmail.com";
      $headers = "From: info@paprikart.rs" . "\r\n" .
      "CC: dinicdarko@gmail.com";  
// $headers = "From: " . strip_tags($_POST['req-email']) . "\r\n";
// $headers .= "Reply-To: ". strip_tags($_POST['req-email']) . "\r\n";
// $headers .= "CC: susan@example.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
	  
      $poslato = mail($to,$subject,$poruka,$headers);      
      if ($poslato) {
        
		$infoMsg = "Poruka je poslata, kontaktiracemo vas uskoro.";
	        header('Location: ../poruci.php?sent=true');
      } else {
      	$errorMessage = error_get_last()['message'];
        echo "<p> <br>Poruka nije poslata.<br /> pokusajte ponovo.";
      }
 

    }  
}else{
	echo "<p> <br>Došlo je do greške na serveru.<br /> Molimo, pokušajte kasnije.";
}
?>
