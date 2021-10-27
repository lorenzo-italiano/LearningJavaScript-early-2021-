<?php

require_once ('Model.php');

$name = $_GET["name"];

Model::ajouterAdherent($name);
