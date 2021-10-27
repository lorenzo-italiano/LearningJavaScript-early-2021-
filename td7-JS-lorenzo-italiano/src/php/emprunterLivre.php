<?php

require_once ("Model.php");

$aderent = $_GET["adherent"];
$livre = $_GET["livre"];

Model::emprunterLivre($livre,$aderent);