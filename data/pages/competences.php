<?php
    session_start();
    $_SESSION['actualPage'] = "competences";
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel="stylesheet" href="../styles/style.css" type="text/css">
        <link rel="stylesheet" href="../styles/competences.css" type="text/css">
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
                <source src="../videos/video16.mp4" type="video/mp4">
            </video>
        </div>
        <div class="all-div">
            <header>
                <?php
                include ('headPages.inc.php');
                ?>
            </header>
            <section class="page accueil" id="accueil">
            <a href="#page1">Mes compétences</a>
            <a href="#intro" class="arrow">↓</a>
        </section>
        <section class="page page1" id="page1">
        </section>
        </div>
        <footer>

        </footer>
    </body>
</html>