---
layout: single
permalink: /news/
author_profile: true
classes: wide
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Layout</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        .container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap; /* Allow items to wrap to the next line */
        }
        .image-grid {
            flex-basis: 60%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 5px;
        }
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
        .twitter-embed {
            flex-basis: 39%;
        }

        /* Media query for smaller screens */
        @media (max-width: 768px) {
            .container {
                flex-direction: column; /* Stacks items vertically */
            }
            .image-grid, .twitter-embed {
                flex-basis: 100%; /* Each will take full width */
                margin-bottom: 20px; /* Add spacing between elements */
            }
        }
    </style>
</head>
<body>

<div class="container">
    <!-- Instagram Gallery -->
    <div class="image-grid">
        <a href="https://www.instagram.com/p/Bu1Y-yDgBWt/" target="_blank"><img src="../images/news/1911_SNU.jpg" alt="1911_SNU"></a>
        <a href="https://www.instagram.com/p/Bu1Y-yDgBWt/" target="_blank"><img src="../images/news/1911_SNU.jpg" alt="1911_SNU"></a>
        <a href="https://www.instagram.com/p/CVm7MVQPsD0/" target="_blank"><img src="../images/news/1505_DKU.jpg" alt="1505_DKU"></a>
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
