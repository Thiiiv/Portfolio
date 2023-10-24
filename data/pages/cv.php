<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel="stylesheet" href="../styles/style.css" type="text/css">
        <link rel="stylesheet" href="../styles/cv.css" type="text/css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
        <style>
            .page1 a, .CV{
                height: 80vh;
                width: 50vh;
                right: 0;
                left: 0;
                margin: auto;
            }
            .page1 a::before {
                content: "🢗";
                display: block;
                margin-bottom: 1vh;
                font-size: 5vh;
                color: white;
                text-align: center;
                animation: bounce-bottom 1.5s ease infinite alternate both;
            }
        </style>
    </head> 
    <body>
        <div class="fond">
            <video autoplay muted loop id="background-video">
                <source src="../videos/video11.mp4" type="video/mp4">
            </video>
        </div>
        <div class="all-div">
            <header>
                <?php
                include ('headPages.inc.html');
                ?>
            </header>
            <section class="page accueil" id="accueil">
            <a href="#page1">Mon CV</a>
            <a href="#intro" class="arrow">↓</a>
        </section>
        <section class="page1" id="page1" >
                <a href="../images/CV_JEYASEELAN_Thivakar.pdf" class="lien-cv">
                <img src="../images/CV2.jpg" alt="Mon CV" class="CV">
                </a>
        </section>
        </div>
        <footer>

        </footer>
    </body>
</html>