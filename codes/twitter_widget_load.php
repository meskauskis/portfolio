<?php
if (!isset($_REQUEST["url"])) { exit; }
$url = $_GET["url"];
if (substr($url, -0, 7) != "http://") { exit; }
echo file_get_contents($url);
?>
