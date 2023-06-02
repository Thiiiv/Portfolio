<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel="stylesheet" href="../styles/style.css" type="text/css">
        <link rel="stylesheet" href="../styles/projets.css" type="text/css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    </head> 
    <body>
        <div class="fond">
            <video autoplay muted loop id="background-video">
                <source src="../videos/video17.mp4" type="video/mp4">
            </video>
        </div>
        <div class="all-div">
        <header>
            <?php
                include ('headPages.inc.html');
            ?>
        </header>
        <section class="accueil">
            <a href="#robot">Mes Projets</a>
        </section>
        <section class="page1" id="robot" >
                <div class="projet-title-div">
                    <span class="robot-title">Robot Sanitaire</span>
                </div>
                <div class="projet-video">
                    <video controls>
                        <source src="../videos/Film Projet Robot Sin.mp4" type="video/mp4">
                    </video> 
                </div>
                <div class="projet-text">
                    <span class="projet-span">
                        C'est un projet réalisé dans le cadre du grand orale
                        de l'épreuve du Baccalauréat. Il consistait à créer un robot en prenant pour base une carte Arduino.
                        Nous avions la possibilité de passer des commandes de matériels nécessaires afin de développer des fonctionnalités
                        qui met en avant le côté sanitaire du robot. A la fin du projet, nous avions un robot avec le programme Arduino associé, 
                        une application pour le commander à distance et une télécommande programmé spécialement pour le robot.  
                    </span> 
                </div>
        </section>
        </div>
        <footer>

        </footer>
    </body>
</html>