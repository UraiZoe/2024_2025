<?php
session_start();
$_SESSION['bejelentkezve'] = 1;
$_SESSION['felhasznalonev'] = "jancsó";

echo $_SERVER['PHP_SELF']."<br>";
echo $_SERVER['SERVER_NAME']."<br>";
echo $_SERVER['HTTP_HOST']."<br>";
echo $_SERVER['HTTP_USER_AGENT']."<br>";
echo $_SERVER['SCRIPT_NAME']."<br>";
