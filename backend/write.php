<?php

$name = 'Nome: ' . $_POST['inp_name'];
$msg = 'Mensagem: ' . $_POST['inp_msg'];
$dir = "../data/file.txt";

if (!file_exists($dir)) {
    touch($dir);
}

$file = fopen($dir, 'a');

fwrite($file, $name . " \n");  
fwrite($file, $msg . " \n");    

echo "File appended successfully!";  

fclose($file);

header("Location: ../index.php");
