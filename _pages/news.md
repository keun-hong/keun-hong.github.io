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
        /* Container: images always take priority */
        .news-container {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
        }
        /* Image grid: always at least 65%, grows first */
        .news-image-grid {
            flex: 2 1 65%;
            min-width: 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 5px;
        }
        .news-image-grid img {
            width: 100%;
            height: auto;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            border-radius: 4px;
        }
        /* Twitter: stays compact, max 320px */
        .news-twitter {
            flex: 1 1 280px;
            max-width: 320px;
            min-width: 250px;
        }
        /* When space gets tight, stack vertically */
        @media (max-width: 820px) {
            .news-container {
                flex-direction: column;
            }
            .news-image-grid {
                width: 100%;
            }
            .news-twitter {
                width: 100%;
                max-width: 480px;
            }
        }
    </style>
</head>
<body>

<div class="news-container">
    <!-- Instagram Gallery -->
    <div class="news-image-grid">
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
    <div class="news-twitter">
        <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">Exciting news! Our lab’s latest paper in @ScienceAdvances on mapping the dog epigenome is out 🐕🎶! Close collaboration with my co-first authors...</p>
            <a href="https://twitter.com/new__hong/status/1676900193747488768"></a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
</div>

</body>

