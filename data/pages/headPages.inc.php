<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel="stylesheet" href="../styles/style.css" type="text/css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="menu">
            <div class="profil-menu">
                <img src="../images/profil.png" width="20px" class="profil">
                <p class="Nom">Thivakar JEYASEELAN</p> 
            </div>
            <?php
            if (isset($_SESSION['actualPage'])) {
                $actualPage = $_SESSION['actualPage'];
            } else {
                $actualPage = "";
            }
            switch($actualPage) {
                case "projets":
                    echo '<div class="pages">
                            <a href="../../index.php"><button class="lien">Accueil</button></a>
                            <a href="#accueil"><button class="lien">Projets</button></a>
                            <!--<a href="competences.php"><button class="lien">Compétences</button></a>-->
                            <a href="../images/CV.pdf"><button class="lien">CV</button></a>
                            <a href="contact.php"><button class="lien">Contact</button></a>
                        </div>';
                    break;
                case "competences":
                    echo '<div class="pages">
                            <a href="../../index.php"><button class="lien">Accueil</button></a>
                            <a href="projets.php"><button class="lien">Projets</button></a>
                            <!--<a href="#accueil"><button class="lien">Compétences</button></a>-->
                            <a href="../images/CV.pdf"><button class="lien">CV</button></a>
                            <a href="contact.php"><button class="lien">Contact</button></a>
                        </div>';
                    break;
                case "":
                    echo '<div class="pages">
                            <a href="../../index.php"><button class="lien">Accueil</button></a>
                            <a href="projets.php"><button class="lien">Projets</button></a>
                            <!--<a href="competences.php"><button class="lien">Compétences</button></a>-->
                            <a href="../images/CV.pdf"><button class="lien">CV</button></a>
                            <a href="contact.php"><button class="lien">Contact</button></a>
                        </div>';
                    break;
            }
            ?>
        </div>
    </body>
</html>
