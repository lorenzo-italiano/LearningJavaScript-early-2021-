<?php

require_once ("Model.php");

$id = $_GET["id"];

$tab = Model::getListEmprunts($id);

echo json_encode($tab);