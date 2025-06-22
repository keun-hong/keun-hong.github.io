---
layout: single
permalink: /news/
author_profile: true
classes: wide
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News - Responsive Layout</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        /* Container for the whole layout */
        .container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start; /* Align items at the top */
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            box-sizing: border-box;
        }
        /* Instagram gallery grid */
        .image-grid {
            flex-basis: 60%; /* Image section takes up 60% of the container width */
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 5px;
        }
        .image-grid img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
        /* Twitter embed section */
        .twitter-embed {
            flex-basis: 40%; /* Twitter section takes up 35% of the container width */
            margin-left: 1%;
        }
        /* For smaller screens (max-width: 1024px) */
        @media (max-width: 1024px) {
            .container {
                flex-wrap: wrap;
            }
            .image-grid {
                flex-basis: 100%; /* Image grid takes full width */
                grid-template-columns: repeat(3, 1fr);
            }
            .twitter-embed {
                flex-basis: 100%; /* Twitter embed takes full width */
                margin-top: 20px; /* Add margin to separate from images */
            }
        }
        /* For mobile screens (max-width: 768px) */
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
                align-items: center;
            }
            .image-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            .twitter-embed {
                width: 100%; /* Full width for Twitter embed */
                margin-top: 20px;
            }
        }
    </style>
</head>
<body>

<div class="container">
    <!-- Instagram Gallery -->
    <div class="image-grid">
        <a href="https://www.instagram.com/p/CuZKxFGPk0O/" target="_blank">
            <img src="../images/news/2307_SNU.jpg" alt="2307_SNU"></a>
        <a href="https://www.instagram.com/p/CZvYXxmPGwq/" target="_blank">
            <img src="../images/news/2101_AACR.jpg" alt="2101_AACR"></a>
        <a href="https://www.instagram.com/p/CGhxYR_HjR_/" target="_blank">
            <img src="../images/news/2010_SNU2.jpg" alt="2010_SNU2"></a>
        <!--<a href="https://www.instagram.com/p/DB1SOOzPsX_/" target="_blank">
            <img src="../images/news/2410_FAVA.jpg" alt="2410_FAVA"></a>-->
        <a href="https://www.instagram.com/p/DDuBU29vzlk/" target="_blank">
            <img src="../images/news/2412_KSMCB.jpg" alt="2412_KSMCB"></a>
        <a href="https://www.instagram.com/p/DB1R54KvbrH/" target="_blank">
            <img src="../images/news/2410_FAVA2.jpg" alt="2410_FAVA2"></a>
        <a href="https://www.instagram.com/p/CjVQwtbPg_B/" target="_blank">
            <img src="../images/news/2209_KSMCB.jpg" alt="2209_KSMCB"></a>
        <a href="https://www.instagram.com/p/CGaB1Bvn8ST/" target="_blank">
            <img src="../images/news/2010_SNU.jpg" alt="2010_SNU"></a>
        <!--<a href="https://www.instagram.com/p/CL0bDXehVUR/?img_index=3" target="_blank">
            <img src="../images/news/2102_SNU.jpg" alt="2102_SNU"></a>-->
        <!--<a href="https://www.instagram.com/p/BuvhO24gLgW/" target="_blank">
            <img src="../images/news/1902_USA.jpg" alt="1902_USA"></a>-->
        <a href="https://www.instagram.com/p/CVm7MVQPsD0/" target="_blank">
            <img src="../images/news/1505_DKU.jpg" alt="1505_DKU"></a>
        <a href="https://www.instagram.com/p/Bu1Y-yDgBWt/" target="_blank">
            <img src="../images/news/1911_SNU.jpg" alt="1911_SNU"></a>
    </div>
    <!-- Twitter Embed -->
    <div class="twitter-embed">
        <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">Exciting news! Our lab’s latest paper in @ScienceAdvances on mapping the dog epigenome is out 🐕🎶! Close collaboration with my co-first authors...</p>
            <a href="https://twitter.com/new__hong/status/1676900193747488768"></a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
</div>

</body>
