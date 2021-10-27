<?php

require_once ("Model.php");

$tab = Model::getAllAdherent();

echo json_encode($tab);
