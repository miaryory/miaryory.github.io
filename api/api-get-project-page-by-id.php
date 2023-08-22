<?php

if(!isset($_GET['projectId'])){
    exit();
}

$sProjects = file_get_contents('../data/projects-data.txt');
$aProjects = json_decode($sProjects);

foreach($aProjects as $aProject){
    if($aProject->id == $_GET['projectId']){
        header('Content-Type: application/json');
        echo json_encode($aProject);
        break;
    }
}