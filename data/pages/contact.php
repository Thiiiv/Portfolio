<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel="stylesheet" href="../styles/style.css" type="text/css">
        <link rel="stylesheet" href="../styles/contact.css" type="text/css">
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
                <source src="../videos/Video16.mp4" type="video/mp4">
            </video>
        </div>
        <div class="all-div">
            <header>
                <?php
                include ('headPages.inc.php');
                ?>
            </header>
            <section class="page accueil" id="accueil">
            <a href="#robot">Me contacter</a>
            <a href="#intro" class="arrow">↓</a>
        </section>
        <section class="page page1" id="intro">
            <div class="formulaire">
                <form action="mailto:thivakar.jeyas@gmail.com" method="get">
                    <p>Nom :</p>
                    <input type="text" name="name" id="text"/>
                    <p>Email :</p>
                    <input type="text" name="email" id="text"/>
                    <p>
                        Message :
                        <br />
                        <textarea name="comments" rows="12" cols="35" placeholder="Ecrivez votre message"></textarea>
                        <br />
                    </p>
    
                    <div class="buttons">
                        <input type="submit" name="submit" value="Envoyer" id="button"/>
                        <input type="reset" name="reset" value="Effacer" id="button"/>
                    </div>
                </form>
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