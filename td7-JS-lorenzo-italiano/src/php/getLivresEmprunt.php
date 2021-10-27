<?php

require_once ("Model.php");

$tab = Model::getLivresEmprunt();

echo json_encode($tab);