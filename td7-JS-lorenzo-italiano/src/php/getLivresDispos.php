<?php

require_once ("Model.php");

$tab = Model::getLivresDispo();

echo json_encode($tab);