<?php
    session_start();
    $_SESSION['actualPage'] = "projets";
?>
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
                <source src="../videos/Video17.mp4" type="video/mp4">
            </video>
        </div>
        <div class="all-div">
        <header>
            <?php
                include ('headPages.inc.php');
            ?>
        </header>
        <section class="page accueil" id="accueil">
            <a href="#robot">Mes Projets</a>
            <a href="#intro" class="arrow">↓</a>
        </section>
        <section class="page page1">
            <div class="summary">
                <a href="#robot" class="summary-link"><span class="summary-text">Robot Sanitaire</span></a>
                <a href="#unesco" class="summary-link"><span class="summary-text">Site Web Unesco</span></a>
                <a href="#python" class="summary-link"><span class="summary-text">Bataille des boules</span></a>
                <a href="#java" class="summary-link"><span class="summary-text">Backpack Hero</span></a>
                <a href="#ihm" class="summary-link"><span class="summary-text">Conception d'interface</span></a>
            </div>
        </section>
        <section class="page page1" id="robot" >
                <div class="projet-title-div">
                    <span class="projet-title">Robot Sanitaire</span>
                </div>
                <div class="projet-media">
                    <video controls muted id="media">
                        <source src="../videos/Film Projet Robot Sin.mp4" type="video/mp4">
                    </video> 
                </div>
                <div class="projet-text">
                    <span class="projet-span">
                        C'est un projet réalisé dans le cadre du grand orale
                        de l'épreuve du Baccalauréat. Il consistait à créer un robot en prenant pour base <b>une carte Arduino.</b>
                        À la fin du projet, nous avions un robot avec le programme <b>Arduino</b> associé, 
                        une application, créée via <b>AppInventor</b>, pour le commander à distance, une télécommande programmé spécialement pour le robot et une vidéo 
                        de fin de projet monté via le logiciel <b>Shotcut</b>.
                        PS : Baissez le son de la vidéo à fond, c'est un conseil.<br/>
                        <b>Voici les outils utilisés pour ce projet :</b>
                    </span> 
                </div>
                <div class="projet-logo">
                    <a href="https://www.arduino.cc/"><img src="../images/arduino_logo.png" alt="Logo Arduino" id="arduino-logo" /></a>
                    <a href="https://appinventor.mit.edu/"><img src="../images/appInventor_logo.png" alt="Logo AppInventor" id="appinv-logo" /></a>
                    <a href="https://shotcut.org/"><img src="../images/shotcut_logo.png" alt="Logo Shotcut" id="shotcut-logo" /></a>
                </div>
        </section>
        <section class="page page1" id="unesco" >
                <div class="projet-title-div">
                    <span class="projet-title">Site Web Unesco</span>
                </div>
                <div class="projet-media">
                    <a href="https://github.com/Thiiiv/SAE-Site-Web"><img src="../images/unesco_website.png" alt="Website Unesco Image" id="media" /></a>
                </div>
                <div class="projet-text">
                    <span class="projet-span">
                        Le projet Unesco consistait à créer un site web en partenariat avec <b>l'UNESCO</b>. Le site devait présenter des lieux classés 
                        au patrimoine de l'Unesco. Pour réaliser ce site web, nous devions utiliser les langages <b>HTML</b>, <b>CSS</b> et <b>PHP</b> (le <b>SQL</b> est en supplément).
                        Le site devait donc être <b>dynamique</b> mais aussi <b>responsive</b>, c'est-à-dire qu'il s'adapte en fonction du support sur lequel il est consulté.
                        <b>Vous pourrez accéder au code source du jeu en cliquant sur l'image du projet.</b><br/>
                        <b>Voici les outils utilisés pour ce projet :</b>
                    </span> 
                </div>
                <div class="projet-logo">
                    <a href="https://developer.mozilla.org/fr/docs/Web/HTML"><img src="../images/html_logo.png" alt="Logo HTML" id="html-logo" /></a>
                    <a href="https://developer.mozilla.org/fr/docs/Web/CSS"><img src="../images/css_logo.png" alt="Logo CSS" id="css-logo" /></a>
                    <a href="https://www.php.net/manual/fr/intro-whatis.php"><img src="../images/php_logo.png" alt="Logo PHP" id="php-logo" /></a>
                    <a href="https://sql.sh/"><img src="../images/sql_logo.png" alt="Logo SQL" id="sql-logo" /></a>
                </div>
        </section>
        <section class="page page1" id="python" >
                <div class="projet-title-div">
                    <span class="projet-title">Bataille des boules</span>
                </div>
                <div class="projet-media">
                    <a href="https://github.com/Thiiiv/BUT-1-SAE-Python"><img src="../images/jeu_python.png" alt="Jeu Python Image" id="media" /></a>
                </div>
                <div class="projet-text">
                    <span class="projet-span">
                        Bataille des boules est un projet de jeu vidéo en <b>Python</b> conçu avec une librairie propre à l'IUT de Marne-la-Vallée (Upemtk).
                        Le jeu consistait en un affrontement entre 2 joueurs qui placent des cercles sur l'interface. Celui qui couvre la grande partie 
                        de l'écran remporte le jeu. Pour ce faire, les joueurs ont 2 choix, l'un est de placer des cercles, l'autre est de diviser la taille des cercles de l'adversaire 
                        en cliquant à l'intérieur de ceux-ci. De plus, les joueurs ne peuvent placer des cercles à côté de ceux du joueur adverse. 
                        <b>Vous pourrez accéder au code source du jeu en cliquant sur l'image du projet.</b></br>
                        <b>Voici les outils utilisés pour ce projet :</b>
                    </span> 
                </div>
                <div class="projet-logo">
                    <a href="https://www.python.org/"><img src="../images/python_logo.png" alt="Logo Python" id="python-logo" /></a>
                    <a href="https://code.visualstudio.com/"><img src="../images/vscode_logo.png" alt="Logo Visual Studio Code" id="vscode-logo" /></a>
                    <a href="https://github.com/"><img src="../images/github_logo.png" alt="Logo GitHub" id="github-logo" /></a>
                </div>
        </section>
        <section class="page page1" id="java" >
                <div class="projet-title-div">
                    <span class="projet-title">Backpack Hero</span>
                </div>
                <div class="projet-media">
                <a href="https://github.com/Thiiiv/BackPackHero"><img src="../images/backpack.png" alt="Backpack Hero Image" id="media"/></a>
                </div>
                <div class="projet-text">
                    <span class="projet-span">
                        Ce projet consistait à reproduire un jeu nommé Backpack Hero qui est disponible sur la plateforme Steam. Pour ce faire, nous devions utiliser le 
                        langage <b>Java</b> avec la <b>bibliothèque fourni par nos professeur (Zen 5)</b>. Nous avions aussi l'obligation de coder sur <b>l'IDE Eclipse</b>. Backpack Hero est 
                        un <b>jeu rogue-like</b>, c'est-à-dire un jeu d'exploration de Donjon reprenant les codes du jeu Rogue d'où le type du jeu. Ce projet a été l'un des projets 
                        les plus <b>difficiles</b> et <b>passionnants</b> que nous avons eu à réaliser. <b>Vous pourrez accéder au code source du jeu en cliquant sur l'image du projet.</b><br/>
                        <b>Voici les outils utilisés pour ce projet :</b>
                    </span> 
                </div>
                <div class="projet-logo">
                    <a href="https://www.java.com/fr/"><img src="../images/java_logo.png" alt="Logo Java" id="java-logo" /></a>
                    <a href="https://www.eclipse.org/"><img src="../images/eclipse_logo.png" alt="Logo Eclipse" id="eclipse-logo" /></a>
                    <a href="https://www.notion.so/"><img src="../images/notion_logo.png" alt="Logo Notion" id="notion-logo" /></a>
                    <a href="https://github.com/"><img src="../images/github_logo.png" alt="Logo GitHub" id="github-logo" /></a>
                </div>
        </section>
        <section class="page page1" id="ihm" >
                <div class="projet-title-div">
                    <span class="projet-title">Conception d'interface</span>
                </div>
                <div class="projet-media">
                    <a href="https://www.figma.com/proto/pgF5o9o41HvUxkYy3Mq3UF/A-cleaner-biotope?type=design&node-id=1-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1">
                        <img src="../images/interface_ihm.png" alt="Interface IHM Image" id="media"/>
                    </a>
                </div>
                <div class="projet-text">
                    <span class="projet-span">
                        La conception d'interface comme son nom l'indique, est un projet dont le but était de créer une interface utilisateur d'une appli de notre choix 
                        parmi les sujets proposés. Nous devions le faire avec le site Figma qui est très populaire pour ce genre de réalisation.</br>
                        <b>Voici les outils utilisés pour ce projet :</b>
                    </span> 
                </div>
                <div class="projet-logo">
                    <a href="https://www.figma.com/fr/"><img src="../images/figma_logo.png" alt="Logo Figma" id="figma-logo" /></a>
                    <a href="https://www.notion.so/"><img src="../images/notion_logo.png" alt="Logo Notion" id="notion-logo" /></a>
                    <a href="https://www.google.fr/intl/fr/docs/about/"><img src="../images/google_doc_logo.png" alt="Logo Google Doc" id="googledoc-logo" /></a>
                    <a href="https://www.flaticon.com/fr/"><img src="../images/flaticon_logo.png" alt="Logo Flaticon" id="flaticon-logo" /></a>
                </div>
        </section>
        <section class="page">
                <?php
                    include("footerPages.inc.html");
                ?>
        </section>
        </div>
    </body>
</html>