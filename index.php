<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel="stylesheet" href="data/styles/portfolio.css" type="text/css">
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
                <source src="data/videos/video13.mp4" type="video/mp4">
            </video> 
        </div>
        <div class="all-div">
        <section class="accueil">
            <header>
                <?php
                include ('data/pages/headIndex.inc.html');
                ?>
            </header>
            <a href="#intro">
                <h1>Bienvenue sur mon portfolio</h1>
            </a>
        </section>
        <section class="page1" id="intro">
            <div class="intro">
                <div>
                    <span class="intro-titre">A propos de moi</span>
                </div>
                <div class="presentation">
                    <div class="present-text">
                    <p>Je suis JEYASEELAN Thivakar, un étudiant
                        en 1ère année de BUT Informatique à l'IUT de Marne-La-Vallée.
                    </p>
                    </div>
                    <div class="photo-profil">
                        <img src="data/images/profil.png" alt="Photo de profil" id="img-profil" />
                    </div>
                </div>
            </div>
        </section>
        <section class="page1" id="projets">
            <a href="data/pages/projets.php" class="p-titre">Projets</a>
            <div class="projets">
                <div class="projet">
                    <a href="data/pages/projets.php#robot" class="robot">Robot sanitaire</a>
                    <img src="data/images/robot.png" alt="Robot" id="robot-img"/>
                </div>
                <div class="projet">
                    <a href="data/pages/projets.php#course" class="course">Course en Cours</a>
                    <img src="data/images/formule-1.png" alt="Voiture" id="course-img"/>
                </div>
                <div class="projet">
                    <a href="data/pages/projets.php#eolienne" class="eolienne">Eolienne verticale</a>
                    <img src="data/images/eolienne.png" alt="Eolienne" id="eolienne-img"/>
                </div>
                <div class="projet">
                    <a href="data/pages/projets.php#potager" class="potager">Potager connecté</a>
                    <img src="data/images/potager.png" alt="Potager" id="potager-img"/>
                </div>
            </div> 
        </section>
        </div>
        <footer>

        </footer>
        <script type="text/javascript" src="data/styles/script.js"></script>
    </body>
</html>