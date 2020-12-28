<?php

$guestname=$_POST["uname"];
$address=$_POST["uaddress"];
$country=$_POST["ucountry"];
$telephone=$_POST["tel"];
$email=$_POST["email"];
$creditcard=$_POST["num"];
$holder=$_POST["CHname"];

echo $guestname."<br>".$address."<br>".$country."<br>".$telephone."<br>".$email."<br>".$creditcard."<br>".$holder."<br>";

$servername="localhost";
$username="root";
$password="";
$dbname="registration";

$conn=mysqli_connect($servername,$username,$password,$dbname);

if(!$conn){
    die("not connected".mysqli_connect_error());
}

$sql="INSERT INTO hotel (Guest name,Address,Country,Telephone,Email,Credit Card Name,Cardholder's Name) VALUES ('$guestname','$address','$country','$telephone','$email','$creditcard','$holder')";

if(mysqli_query($conn,$sql)){
    echo "Data added successfully";
}
?>