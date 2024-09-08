---
layout: single
permalink: /news/
author_profile: true
classes: wide
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Gallery with Twitter Embed</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        .container {
            display: flex;
            justify-content: space-between;
        }
        .image-grid {
            flex-basis: 60%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
        }
        .image-grid a {
            position: relative;
            display: block;
            width: 100%;
            padding-bottom: 100%; /* This sets the height equal to the width, maintaining a 1:1 aspect ratio */
        }
        .image-grid img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .twitter-embed {
            flex-basis: 40%;
        }
    </style>
</head>
<body>

<div class="container">
    <!-- Instagram Gallery -->
    <div class="image-grid">
        <a href="https://www.instagram.com/p/CuZKxFGPk0O/" target="_blank"><img src="link"></a>
        <a href="https://www.instagram.com/p/CQ6Fhw4UFE/" target="_blank"><img src="https://instagram.com/path-to-image3.jpg" alt="Image 3"></a>
        <a href="https://www.instagram.com/p/C7qZ1u08d/" target="_blank"><img src="https://instagram.com/path-to-image4.jpg" alt="Image 4"></a>
        <a href="https://www.instagram.com/p/CxQz87CYEF/" target="_blank"><img src="https://instagram.com/path-to-image5.jpg" alt="Image 5"></a>
        <!-- Add more images as necessary -->
    </div>
    <!-- Twitter Embed -->
    <div class="twitter-embed">
        <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">September 15th issue of @MolecularCell features a cover artwork of mine and the cover article that our team had been working on for the last two years. Congratulations, especially to @gsanid!</p>
            <a href="https://twitter.com/new__hong/status/1676900193747488768"></a>
        </blockquote> 
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
</div>

</body>
</html>