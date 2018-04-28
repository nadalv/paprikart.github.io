<!doctype html>
<html>
 
  <head>
    <title>GeoIP TEST</title>

        <!-- INCLUDE JAVASCRIPT HERE -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
 <?php
 function getUserIP()
{
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }

    return $ip;
}
 // set IP address and API access key 
$user_ip = getUserIP();
// echo $ip;
// $ip  = "178.149.143.162";
$access_key = '3990706ac40c6e9df211cef7eb3cc355';

// Initialize CURL:
$ch = curl_init('http://api.ipstack.com/'.$user_ip.'?access_key='.$access_key.'');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Store the data:
$json = curl_exec($ch);
curl_close($ch);

// Decode JSON response:
$api_result = json_decode($json, true);
// // Output the "capital" object inside "location"
// print_r($api_result);
// echo "<br>";
// echo $api_result['location']['capital'];
// echo "<br>";
// echo "<br>LANG ARRAY:<br>";
$langCode = $api_result['location']['languages'][0]['code'];
if($langCode == "sr"){
    #srbija
?>
    alert("Sorabi");
<?php
}else{
    #vascijeli svijet
?>
    alert("Vascijeli svijet");
<?php
}
 ?>
</script>
  </head>
 
  <body>

 
    <div id="city"></div>
    <div id="subcity"></div>
    
    <p>
      Sledi deo sa php
    </p>


  </body>
</html>