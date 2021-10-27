<?php

require_once ('Model.php');

$titre = $_GET["titre"];

Model::ajouterLivre($titre);

