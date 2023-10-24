<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel="stylesheet" href="data/styles/style.css" type="text/css">
        <link rel="stylesheet" href="data/styles/index.css" type="text/css">
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
                <source src="data/videos/Video13.mp4" type="video/mp4">
            </video> 
        </div>
        <div class="all-div">
        <header>
            <?php
                include ('data/pages/headIndex.inc.html');
            ?>
        </header>
        <section class="page accueil" id="accueil">
            <a href="#intro">Bienvenue sur mon portfolio</a> 
            <a href="#intro" class="arrow">↓</a>
        </section>
        <section class="page page1" id="intro">
            <div class="intro">
                <div class="titre">
                    <span class="intro-titre">A propos de moi</span>
                </div>
                <div class="presentation">
                    <div class="present-text">
                    <p>Je suis <b>Thivakar JEYASEELAN</b>, un étudiant
                        en 2ème année de BUT Informatique à l'IUT de Marne-La-Vallée.
                        Je suis un passionné d'informatique, mes passions sont la programmation,
                        la veille technologique et les jeux vidéos. 
                    </p>
                    </div>
                    <div class="photo-profil">
                        <img src="data/images/profil.png" alt="Photo de profil" id="img-profil" />
                    </div>
                </div>
            </div>
        </section>
        <section class="page page1" id="projets">
            <a href="data/pages/projets.php" class="p-titre">Projets</a>
            <div class="projets">
                <div class="projet">
                    <a href="data/pages/projets.php#robot" class="robot">Robot sanitaire</a>
                    <img src="data/images/robot.png" alt="Robot" id="robot-img"/>
                </div>
                <div class="projet">
                    <a href="data/pages/projets.php#unesco" class="unesco">Site Web Unesco</a>
                    <img src="data/images/website.png" alt="Unesco Website" id="website-img"/>
                </div>
                <div class="projet">
                    <a href="data/pages/projets.php#python" class="python">Bataille des boules</a>
                    <img src="data/images/python.png" alt="Jeu Python" id="python-img"/>
                </div>
                <div class="projet">
                    <a href="data/pages/projets.php#java" class="java">Backpack Hero</a>
                    <img src="data/images/java.png" alt="Jeu Java" id="java-img"/>
                </div>
                <div class="projet">
                    <a href="data/pages/projets.php#ihm" class="ihm">Conception d'interface</a>
                    <img src="data/images/ihm.png" alt="Interface IHM" id="ihm-img"/>
                </div>
            </div>
        </section>
        <section class="page">
                <?php
                    include("data/pages/footerIndex.inc.html");
                ?>
        </section>
        </div>
    </body>
</html>