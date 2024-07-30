---
layout: single
permalink: /profile/
author_profile: true
classes: wide
---

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>    
        h3 {
            margin-top: 0;
            margin-bottom: 0;
            padding-left: 5px;
        }
        .intro ul {
            margin-top: 4px;
            margin-bottom: 0;
            list-style-type: square
        }
        .intro p {
            margin-top: 0;
            margin-bottom: 0;
            color:gray;
            font-size: 80%;
        }
        .toggle-content {
            display: none; /* Hide content by default */
            opacity: 0; /* Start hidden */
            max-height: 0; /* Start hidden */
            overflow: hidden; /* Prevents content overflow */
            transition: max-height 0.5s ease, opacity 0.5s ease; /* Smooth transition */
            margin-bottom: 20px;
            font-size: 80%;
        }
        .toggle-button {
            cursor: pointer;
            display: flex;
            align-items: center;
            user-select: none; /* Prevent text selection */
            margin-bottom: 15px; /* Add bottom margin for gap */
        }
        .toggle-button .fas {
            margin-left: 10px;
            transition: transform 0.3s;
        }
        .toggle-button.active .fas {
            transform: rotate(90deg);
        }
        .toggle-content.show {
            display: block;
            opacity: 1;
            max-height: 1000px; /* Large enough to display the content */
        }
        .youtube-container {
            position: relative;
            width: 66.66%; /* Set width to 2/3 of the container */
            max-width: 100%; /* Ensure it doesn't exceed the container's width */
            padding-bottom: 37.5%; /* Aspect ratio 16:9 */
            height: 0;
            margin-bottom: 40px; /* Add some space below the video */
        }
        .youtube-iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        @media (max-width: 600px) {
            .youtube-container {
                width: 100%; /* Full width on small screens */
                max-width: none; /* Remove max width on small screens */
            }
        }
    </style>
</head>

<body>
    <!-- YouTube Video Container: 영상 만들면 src에 link만 넣기
    <div class="youtube-container">
        <iframe class="youtube-iframe" src="https://www.youtube.com/embed/Lh2lbnKj1EU" frameborder="0" allowfullscreen></iframe>
    </div>-->
    <div class="intro">
        <h3>Research Interests</h3> 
        <ul>
            <li>Evolutionary and Comparative Omics
            <p>cross-species, cross-breeds, genomic innovation</p></li>
            <li>Cancer Biology (Tumor Ecology)
            <p>tumor evolution, tumor microenvironment, metastasis and relapse, immunity</p></li>
            <li>Computational Systems Biology
            <p>integrative multi-omics (genomics, epigenomics, proteomics), machine learning</p></li>
        </ul>
        <br>
        <h3>Education</h3>
        <ul>
            <li>PhD candidate, Veterinary Biomedical Sciences (2019-)
            <p>Comparative Medicine Disease Research Center (CDRC), Seoul National University, Seoul, KR</p></li>
            <li>MS, Microbiology  (2016-2018)
            <p>College of Natural Sciences, Dankook University, Cheonan, KR</p></li>
            <li>BS, Microbiology (2010-2016)
            <p>College of Natural Sciences, Dankook University, Cheonan, KR</p></li>
        </ul>
        <br>
        <h3>Research Experience</h3>
        <ul>
            <li>Graduate Research Associate (2019-), <a href="https://vetbio.snu.ac.kr/" target="_blank" style="color: inherit; ">Prof. Je-Yoel Cho's Lab</a>
            <p>Comparative Medicine Disease Research Center (CDRC), Seoul National University, Seoul, KR<br>
            Research topics: <u>cross-breed cancer genomics</u>, <u>dog epigenomics</u></p></li>
            <li>Collaborative Research Fellow (2017-2019), Prof. Je-Yoel Cho's Lab
            <p>College of Veterinary Medicine, Seoul National University, Seoul, KR<br>
            Research topics: <u>dog epigenomics</u>, <u>cancer biomarkers</u></p></li>
            <li>Collaborative Research Fellow (2017-2018), <a href="http://www.neornat.com/en/" target="_blank" style="color: inherit; ">Prof. Suk Woo Nam's Lab</a>
            <p>College of Medicine, Catholic University, Seoul, KR<br>
            Research topics: <u>cancer mechanism</u>, <u>histone modification</u>, <u>miRNA-editing</u></p></li>
            <li>Collaborative Research Fellow (2017-2018), Prof. Jueng Soo You's Lab
            <p>Research Institute of Medical Science, Konkuk University, Seoul, KR<br>
            Research topics: <u>cancer mechanism</u>, <u>chromatin remodeler (SWI/SNF complexes)</u> </p></li>
            <li>Graduate Research Associate (2016-2018), Prof. Keunsoo Kang's Lab
            <p>College of Natural Sciences, Dankook University, Cheonan, KR<br>
            Research topics: <u>bioinformatics</u>, <u>epigenomics</u>, <u>regularoty-elements</u></p></li>
            <li>Undergraduate Researcher (2015-2016), Prof. Keunsoo Kang's Lab
            <p>College of Natural Sciences, Dankook University, Cheonan, KR<br>
            Research topics: <u>bioinformatics</u>, <u>epigenomics</u>, <u>transcription factors</u></p></li>
        </ul>
        <br>
        <h3 class="toggle-button" onclick="toggleVisibility('non-research', this)">
            Non-Research Track Appointments
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="non-research" class="toggle-content">
            <ul>
                <li>Facility Manager (2021-2023), Comparative Medicine Disease Research Center (CDRC), Seoul National Univ.</li>
                <li>Website Manager (2020-2024), Comparative Medicine Disease Research Center (CDRC), Seoul National Univ.</li>
                <li>NAS Sever Manager (2019-2024), Comparative Medicine Disease Research Center (CDRC), Seoul National Univ.</li>
                <li>Teaching Assistant (2019-2022), Biochemistry (Undergrad course), College of Veterinary Medicine, Seoul National Univ.</li>
                <li>Teaching Assistant (2017), Statistics using SPSS (Undergrad course), Department of Microbiology, Dankook Univ.</li>
                <li>Graduate Assistant (2016-2017), Department of Microbiology, Dankook Univ.</li>
            </ul>
        </div>
        <h3 class="toggle-button" onclick="toggleVisibility('honors-awards', this)">
            Honors & Awards
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="honors-awards" class="toggle-content">
            <ul>
                <li>Selected as <a href="https://www.ibric.org/bric/hanbitsa/treatise.do?mode=treatise-view&id=88641&authorId=41749#!/list" target="_blank" style="color: inherit; ">"한국을 빛낸 사람들 (한빛사)"</a> (People Who Shined Korea) (2023), BRIC</li>
                <li><a href="../images/profile/2022_KSMCB_Young_Investigator.jpg" target="_blank" style="color: inherit; ">Young Scientist Award</a> (2022), KSMCB 2022</li>
                <li><a href="../images/profile/2022_ERD_award.png" target="_blank" style="color: inherit; ">Thesis Presentation</a> (2022), SNU College of Veterinary Medicine ERD Day</li>
            </ul>
        </div>
        <h3 class="toggle-button" onclick="toggleVisibility('int_conf', this)">
            International Conferences
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="int_conf" class="toggle-content">
            <ul>
                <li><a href="../images/profile/2022_KSMCB_oral.png" target="_blank" style="color: inherit; ">Oral</a> & <a href="../images/profile/2022_KSMCB_poster.png" target="_blank" style="color: inherit; ">Poster</a> Presentation (Invited Speaker), International Conference of the Korean Society for Molecular and Cellular Biology (KSMCB) 2022 (Jeju, KR)</li>
                <li><a href="../images/profile/2015_Poster.png" target="_blank" style="color: inherit; ">Poster</a> Presentation, 2015 (KR)</li>
            </ul>
        </div>
        <h3 class="toggle-button" onclick="toggleVisibility('inv_talk', this)">
            Invited Talks & Lectures
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="inv_talk" class="toggle-content">
            <ul>
                <li>Invited talk (2023), Advanced Comparative Medicine (Graduate Course), College of Veterinary Medicine, Seoul National University (Seoul, KR)<br>
                Topic: Comparative mammalian and dog genomics</li>
                <li><a href="../images/profile/2023_Invited_The_Hook.png" target="_blank" style="color: inherit; ">Invited talk</a> (2023), The 1st THE HOOK One-Day Camp (AI+BIO) for High School Students (Seoul, KR)<br>
                Topic: Comparative genomics for genomic innovation</li>
            </ul>
        </div>
        <h3 class="toggle-button" onclick="toggleVisibility('memberships', this)">
            Professional Memberships
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="memberships" class="toggle-content">
            <ul>
                <li>Student Member (2024-), <a href="https://www.favamember.org/" target="_blank" style="color: inherit; ">Federation of Asian Veterinary Associations (FAVA)</a></li>
                <li>Associate Member (2024-), <a href="https://www.aacr.org/" target="_blank" style="color: inherit; ">American Society for Cancer Research (AACR)</a></li>
                <li>Collaborating Member (2022-), <a href="https://www.humancellatlas.org/" target="_blank" style="color: inherit; ">Human Cell Atlas</a></li>
                <li>Collaborating Member (2022-), <a href="https://kbiox.net/" target="_blank" style="color: inherit; ">K-BIOX</a></li>
                <li>Student Member (2022-), <a href="https://www.ksmcb.or.kr/eng/" target="_blank" style="color: inherit; ">Korean Society for Molecular and Cellular Biology (KSMCB)</a></li>
                <li>Student Member (2021-), <a href="http://www.khupo.org/" target="_blank" style="color: inherit; ">The Korean Human Proteome Organization (KHUPO)</a></li>
                <li>Associate Member (2021-), <a href="https://www.ksvs.or.kr/" target="_blank" style="color: inherit; ">Korean Society of Veterinary Science</a></li>
                <li>Student Member (2016-), <a href="https://kogo.or.kr/index.asp" target="_blank" style="color: inherit; ">Korea Genome Organization (KOGO)</a></li>
                <li>Student Member (2015-), <a href="https://www.ksbmb.or.kr/html/?pmode=english" target="_blank" style="color: inherit; ">Korean Society for Biochemistry and Molecular Biology (KSBMB)</a></li>
            </ul>
        </div>
        <h3 class="toggle-button" onclick="toggleVisibility('review', this)">
            Ad Hoc Peer Review Activity
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="review" class="toggle-content">
            <ul>
                <li>Nature Communications (1 manuscript)</li>
                <li>International Journal of Molecular Sciences (1)</li>
                <li>Gene (1)</li>
                <li>Genes & Genomics (2)</li>
            </ul>
        </div>
        <h3 class="toggle-button" onclick="toggleVisibility('patents', this)">
            Patents
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="patents" class="toggle-content">
            <ul>
            </ul>
        </div>
    </div>
    <!-- Toggle -->
    <script>
        function toggleVisibility(id, element) {
            var content = document.getElementById(id);
            if (content.classList.contains('show')) {
                content.classList.remove('show');
                element.classList.remove('active');
            } else {
                content.classList.add('show');
                element.classList.add('active');
            }
        }
    </script>
</body>