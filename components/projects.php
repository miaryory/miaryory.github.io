<div id="projects" class="scroll-container">

    <h1 class="section-title">&lt; projets &gt;</h1>

    <div id="all-projects">
        

        <?php

            $sProjects=file_get_contents('./data/projects-data.txt');
            $aProjects=json_decode($sProjects);

            foreach($aProjects as $aProject){
                echo "
                    <div onclick='openModal($aProject->id)' id='$aProject->id' class='project-item'>

                        <h1 class='project-name' >$aProject->title</h1>

                    </div>
                ";
            }

            require_once(__DIR__.'/modal.php');
        ?>

    </div>

</div>