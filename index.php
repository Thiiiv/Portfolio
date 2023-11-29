<?php
    session_start();
    $_SESSION['actualPage'] = "index";
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel="stylesheet" href="data/styles/style.css" type="text/css">
        <link rel="stylesheet" href="data/styles/index.css" type="text/css">
    </head>
    <body>
        <div class="fond">  
            <video autoplay muted loop id="background-video">
                <source src="data/videos/Video13.mp4" type="video/mp4">
            </video> 
        </div>
        <header>
            <div class="menu">
                <div class="profil-menu">
                    <a href="#accueil">
                        <img src="data/images/profil.png" width="20px" class="profil">
                        <p class="Nom">Thivakar JEYASEELAN</p> 
                    </a>
                </div>
                <div class="pages">
                    <a href="data/pages/projects.php"><button class="lien">Projets</button></a>
                    <a href="data/pages/competences.php"><button class="lien">Compétences</button></a>
                    <a href="data/pages/cv.php"><button class="lien">CV</button></a>
                    <a href="data/pages/contact.php"><button class="lien">Contact</button></a>
                </div>
            </div>
        </header>
        <div class="all-div">
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
                        L'informatique, les jeux vidéos et les nouvelles technologies sont mes principaux centres d'intérêts.
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
            <div class="footer">
                <div class="contact">
                    <a href="https://github.com/Thiiiv"><img src="data/images/github_logo.png" alt="Logo GitHub" id="github-logo" /></a>
                    <a href="https://www.linkedin.com/in/thivakar-jeyaseelan-76b209268/"><img src="data/images/linkedin_logo.png" alt="Logo linkedin" id="linkedin-logo" /></a>
                    <a href="https://twitter.com/LFaucheur95"><img src="data/images/twitter_logo.png" alt="Logo twitter" id="twitter-logo" /></a>
                </div>
                <div class="credits">
                    <span>Crédits<br>
                    © 2023 JEYASEELAN Thivakar. All rights reserved. 
                    </span>
                </div>
            </div>
        </section>
        </div>
    </body>
</html>