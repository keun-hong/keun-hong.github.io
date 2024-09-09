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
            padding: 20px;
            box-sizing: border-box;
        }
        .container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        /* Instagram gallery grid */
        .image-grid {
            flex-basis: 60%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 5px;
        }
        /* Aspect ratio of 1:1 */
        .image-grid a {
            position: relative;
            display: block;
            padding-bottom: 100%; /* Maintain 1:1 aspect ratio */
        }
        .image-grid img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        /* Twitter embed container */
        .twitter-embed {
            flex-basis: 39%;
        }
        /* For smaller screens (max-width: 1024px) */
        @media (max-width: 1024px) {
            .container {
                justify-content: center; /* Center items */
            }
            /* Adjust grid columns */
            .image-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            .twitter-embed blockquote {
                width: 350px;
            }
        }
        /* For mobile screens (max-width: 768px) */
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
                align-items: center;
            }
            /* Make images and Twitter embed take full width */
            .image-grid {
                flex-basis: 100%;
                grid-template-columns: repeat(2, 1fr);
            }
            .twitter-embed {
                flex-basis: 100%;
                margin-top: 20px;
            }
            .twitter-embed blockquote {
                width: 100%;
                max-width: 400px;
                height: auto;
            }
        }
        /* For very small mobile screens */
        @media (max-width: 480px) {
            .image-grid {
                grid-template-columns: 1fr;
            }
            .twitter-embed blockquote {
                width: 100%;
                max-width: 350px;
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
        <a href="https://www.instagram.com/p/CjVQwtbPg_B/" target="_blank">
            <img src="../images/news/2209_KSMCB.jpg" alt="2209_KSMCB"></a>
        <a href="https://www.instagram.com/p/CGhxYR_HjR_/" target="_blank">
            <img src="../images/news/2010_SNU2.jpg" alt="2010_SNU2"></a>
        <a href="https://www.instagram.com/p/CGaB1Bvn8ST/" target="_blank">
            <img src="../images/news/2010_SNU.jpg" alt="2010_SNU"></a>
        <a href="https://www.instagram.com/p/CL0bDXehVUR/?img_index=3" target="_blank">
            <img src="../images/news/2102_SNU.jpg" alt="2102_SNU"></a>
        <a href="https://www.instagram.com/p/Bu1Y-yDgBWt/" target="_blank">
            <img src="../images/news/1911_SNU.jpg" alt="1911_SNU"></a>
        <a href="https://www.instagram.com/p/BuvhO24gLgW/" target="_blank">
            <img src="../images/news/1902_USA.jpg" alt="1902_USA"></a>
        <a href="https://www.instagram.com/p/CVm7MVQPsD0/" target="_blank">
            <img src="../images/news/1505_DKU.jpg" alt="1505_DKU"></a>
        <!-- Add more images as necessary -->
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