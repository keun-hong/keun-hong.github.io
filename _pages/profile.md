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
    <div class="intro">
        <h3>Research Interests</h3> 
        <ul>
            <li>Evolutionary Animal Genomics
            <p>cross-species and -breeds, genomic innovation</p></li>
            <li>Comparative Cancer & Aging Biology
            <p>disease resistance & susceptibility</p></li>
            <li>Computational Multi-Omics
            <p>genome, transcriptome, epigenome, proteome, AI (ML & DL)</p></li>
        </ul>
        <br>

        <h3>Education</h3>
        <ul>
            <li>Ph.D., Veterinary Biomedical Sciences (03/2019 – 08/2025)
            <p>College of Veterinary Medicine, Seoul National University, Seoul, KR</p></li>
            <li>M.S., Microbiology and Biotechnology  (03/2016 – 02/2018)
            <p>College of Natural Sciences, Dankook University, Cheonan, KR</p></li>
            <li>B.S., Microbiology and Biotechnology (03/2010 – 02/2016)
            <p>College of Natural Sciences, Dankook University, Cheonan, KR</p></li>
            <li>Military Service (Sergeant, Medic)  (11/2011 – 09/2013)
            <p>1st Brigade, Aviation Operations Command, Republic of Korea Army</p></li>
        </ul>
        <br>

        <h3>Research Experience</h3>
        <ul>
            <li>Graduate Research Associate, <a href="https://vetbio.snu.ac.kr/" target="_blank" style="color: inherit; ">Je-Yoel Cho</a> (02/2019 – 08/2025)
            <p>Comparative Medicine Disease Research Center (CDRC), Seoul National University, Seoul, KR<br>
            Research topics: <u>cross-breed cancer genomics</u>, <u>dog epigenomics</u></p></li>
            <li>Collaborative Research Fellow, Je-Yoel Cho (06/2017 – 02/2019)
            <p>College of Veterinary Medicine, Seoul National University, Seoul, KR<br>
            Research topics: <u>dog epigenomics</u>, <u>cancer biomarkers</u></p></li>
            <li>Collaborative Research Fellow, Jueng Soo You (03/2017 – 02/2019)
            <p>Research Institute of Medical Science, Konkuk University, Seoul, KR<br>
            Research topics: <u>cancer mechanism</u>, <u>chromatin remodeler (SWI/SNF complexes)</u> </p></li>
            <li>Collaborative Research Fellow, <a href="https://www.namswlab.com/" target="_blank" style="color: inherit; ">Suk Woo Nam</a> (03/2017 – 02/2018)
            <p>College of Medicine, Catholic University, Seoul, KR<br>
            Research topics: <u>cancer mechanism</u>, <u>histone modification</u>, <u>miRNA-editing</u></p></li>
            <li>Graduate Research Associate, Keunsoo Kang (03/2016 – 02/2018)
            <p>College of Natural Sciences, Dankook University, Cheonan, KR<br>
            Research topics: <u>bioinformatics</u>, <u>epigenomics</u>, <u>regulatory elements</u></p></li>
            <li>Undergraduate Researcher, Keunsoo Kang (12/2014 – 02/2016)
            <p>College of Natural Sciences, Dankook University, Cheonan, KR<br>
            Research topics: <u>bioinformatics</u>, <u>epigenomics</u>, <u>transcription factors</u></p></li>
        </ul>
        <br>

	<h3 class="toggle-button" onclick="toggleVisibility('presentations', this)">
            Presentations
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="presentations" class="toggle-content">
	    <h3>Oral Presentations</h3>
            <ul>
                <li>SNU College of Veterinary Medicine Education, Research & Development (ERD) Day. <a href="../images/profile/2024_ERD_award.jpg" target="_blank" style="color: inherit; ">Gencube: Centralized retrieval and integration of omics data from leading databases.</a> 15 November 2024, Seoul, KR</li>
                <li>Federation of Asian Veterinary Associations Congress (FAVA). <a href="../images/profile/2024_FAVA_oral.jpg" target="_blank" style="color: inherit; ">Gencube: Efficient Retrieval, Download, and Unification of Genomic Data from Leading Biodiversity Databases.</a> 27 October 2024, Gangwon-do, KR</li>
                <li>SNU College of Veterinary Medicine Education, Research & Development (ERD) Day. <a href="../images/profile/2022_ERD_award.jpg" target="_blank" style="color: inherit; ">Integrative mapping of the dog epigenome: Reference annotation for comparative intertissue and cross-species studies.</a> 16 December 2022, Seoul, KR</li>
                <li>International Conference of the Korean Society for Molecular and Cellular Biology (KSMCB). <a href="../images/profile/2022_KSMCB_oral.jpg" target="_blank" style="color: inherit; ">Integrative mapping of the dog epigenome: Reference annotation for comparative intertissue and cross-species studies.</a> 30 September 2022, Jeju, KR</li>
            </ul>
	    <br>
	    <h3>Poster Presentations</h3>
            <ul>
                <li>Korean Society for Molecular and Cellular Biology (KSMCB) Epigenomics Division Symposium. <a href="../images/profile/2024_KSMCB_Epi.jpg" target="_blank" style="color: inherit; ">Problemregion: Integrative pipeline and database for identifying anomalous regions in genome assemblies across diverse species.</a> 11 December 2024, Gangwon-do, KR</li>
                <li>Federation of Asian Veterinary Associations Congress (FAVA). <a href="../images/profile/2024_FAVA_poster.jpg" target="_blank" style="color: inherit; ">Blackcube: Integrative blacklist and greenscreen database for genome assemblies of diverse model species.</a> 27 October 2024, Daejeon, KR</li>
                <li>International Conference of the Korean Society for Molecular and Cellular Biology (KSMCB). <a href="../images/profile/2022_KSMCB_poster.jpg" target="_blank" style="color: inherit; ">Integrative mapping of the dog epigenome: Reference annotation for comparative intertissue and cross-species studies.</a> 30 September 2022, Jeju, KR</li>
                <li>Korea Genome Organization (KOGO) Winter Symposium. <a href="../images/profile/2015_Poster.jpg" target="_blank" style="color: inherit; ">Systematic analysis of genome-wide transcription factor binding sites in multiple cell lines.</a> 05 February 2015, Gangwon-do, KR</li>
            </ul>
	    <br>
	    <h3>Invited Talks</h3>
            <ul>
                <li>Center for Genome Engineering, Institute for Basic Science. Comparative Multi-omics Across Diverse Species: Paving the Way for Genomic Innovations. 05 August 2025, Daejeon, KR</li>
                <li>Advanced Comparative Medicine (Graduate Course), College of Veterinary Medicine, Seoul National University. Comparative mammalian and dog genomics. 25 October 2023, Seoul, KR</li>
                <li>Academic Webinar by the Biological Research Information Center (BRIC). <a href="https://youtu.be/aQV5WSibwRo?si=mldR1tCwvla-rW8q" target="_blank" style="color: inherit; ">Integrative mapping of the dog epigenome: Reference annotation for comparative intertissue and cross-species studies.</a> 12 October 2023, Online</li>
                <li>The 1st THE HOOK One-Day Camp (AI+BIO) for High School Students. <a href="../images/profile/2023_Invited_The_Hook.jpg" target="_blank" style="color: inherit; ">Comparative genomics for genomic innovation.</a> 15 August 2023, Seoul, KR</li>
            </ul>
        </div>

        <h3 class="toggle-button" onclick="toggleVisibility('honors-awards', this)">
            Honors & Awards
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="honors-awards" class="toggle-content">
            <ul>
                <li><a href="../images/profile/2024_FAVA_best_sci_presentation.jpg" target="_blank" style="color: inherit; ">Best Scientific Presentation Award</a> (2024), Federation of Asian Veterinary Associations Congress (FAVA)</li>
                <li>Selected for <a href="https://www.ibric.org/bric/hanbitsa/treatise.do?mode=treatise-view&id=88641&authorId=41749#!/list" target="_blank" style="color: inherit; ">“People Who Brightened Korea”</a> (한국을 빛낸 사람들, BRIC Honoree) (2023), Biological Research Information Center (BRIC)</li>
                <li><a href="../images/profile/2022_KSMCB_Young_Investigator.jpg" target="_blank" style="color: inherit; ">Young Scientist Award</a> (2022), International Conference of the Korean Society for Molecular and Cellular Biology (KSMCB)</li>
            </ul>
        </div>

        <h3 class="toggle-button" onclick="toggleVisibility('media-press', this)">
            Media Highlights & Press Coverage
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="media-press" class="toggle-content">
            <ul>
                <li>“Scientists unlock the dog epigenome”, highlight by <a href="https://www.eurekalert.org/news-releases/994987" target="_blank" style="color: inherit; ">AAAS EurekAlert</a></li>
                <li>“Researchers create EpiC Dog, a reference tool for canine epigenetics”, science communication article by Justin Jackson in <a href="https://phys.org/news/2023-07-epic-dog-tool-canine-epigenetics.html" target="_blank" style="color: inherit; ">Phys.org</a></li>
                <li>“Prof. Jueng Soo You’s team at Konkuk University College of Medicine identifies the genetic mechanism underlying liver cancer development”, science communication article by Seung-Hwan Lee in <a href="https://m.dhnews.co.kr/news/view/179522668215231" target="_blank" style="color: inherit; ">The University Journal</a></li>
            </ul>
        </div>

        <h3 class="toggle-button" onclick="toggleVisibility('teaching-mentoring', this)">
            Teaching & Mentoring Experience
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="teaching-mentoring" class="toggle-content">
            <ul>
                <li>Teaching Assistant (03/2019 – 08/2022), Biochemistry, College of Veterinary Medicine, Seoul National Univ.</li>
                <li><a href="../images/profile/2017_DKU_TA_envbio.jpg" target="_blank" style="color: inherit; ">Teaching Assistant</a> (09/2017 – 02/2018), Environment-Bio Experiment, Department of Microbiology, Dankook Univ.</li>
                <li><a href="../images/profile/2017_DKU_TA_biostat.jpg" target="_blank" style="color: inherit; ">Teaching Assistant</a> (03/2017 – 08/2017), Biological Statistics using SPSS, Department of Microbiology, Dankook Univ.</li>
                <li><a href="../images/profile/2016_DKU_GA.jpg" target="_blank" style="color: inherit; ">Graduate Assistant</a> (03/2016 – 02/2017), Department of Microbiology, Dankook Univ.</li>
            </ul>
        </div>

	<h3 class="toggle-button" onclick="toggleVisibility('professional-activities', this)">
            Professional Activities
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="professional-activities" class="toggle-content">
	    <h3>Editorial Roles</h3>
            <ul>
                <li><strong>Topic Editor</strong>, Frontiers in Genome Editing (2025 – Present)<br>“Epigenome Editing to Overcome Hormone Therapy Resistance in Breast Cancer”</li>
            </ul>
	    <br>
	    <h3>Peer Review</h3>
            <ul>
                <li>Nature Communications (Ad hoc, 1 manuscript)</li>
                <li>International Journal of Molecular Sciences (1)</li>
                <li>Gene (1)</li>
                <li>Genes & Genomics (2)</li>
            </ul>
	    <br>
	    <h3>Technical & Administrative Appointments</h3>
            <ul>
                <li><a href="https://keun-hong.github.io/lablife/cdrc/" target="_blank" style="color: inherit; ">Facility Manager</a> (2021 – 2023), Comparative Medicine Disease Research Center (CDRC), Seoul National Univ.</li>
                <li><a href="https://keun-hong.github.io/lablife/website/" target="_blank" style="color: inherit; ">Website Administrator</a> (2020 – 2024), Comparative Medicine Disease Research Center (CDRC), Seoul National Univ.</li>
                <li><a href="https://keun-hong.github.io/lablife/nas/" target="_blank" style="color: inherit; ">NAS Server Administrator</a> (2019 – 2024), Comparative Medicine Disease Research Center (CDRC), Seoul National Univ.</li>
            </ul>
        </div>

        <h3 class="toggle-button" onclick="toggleVisibility('memberships', this)">
            Professional Memberships
            <i class="fas fa-chevron-right"></i>
        </h3>
        <div id="memberships" class="toggle-content">
            <ul>
                <li>Student Member (2024 –), <a href="https://www.favamember.org/" target="_blank" style="color: inherit; ">Federation of Asian Veterinary Associations (FAVA)</a></li>
                <li>Associate Member (2024 –), <a href="https://www.aacr.org/" target="_blank" style="color: inherit; ">American Society for Cancer Research (AACR)</a></li>
                <li>Collaborating Member (2022 –), <a href="https://www.humancellatlas.org/" target="_blank" style="color: inherit; ">Human Cell Atlas</a></li>
                <li>Collaborating Member (2022 –), <a href="https://kbiox.net/" target="_blank" style="color: inherit; ">K-BIOX</a></li>
                <li>Student Member (2022 –), <a href="https://www.ksmcb.or.kr/eng/" target="_blank" style="color: inherit; ">Korean Society for Molecular and Cellular Biology (KSMCB)</a></li>
                <li>Student Member (2021 –), <a href="http://www.khupo.org/" target="_blank" style="color: inherit; ">The Korean Human Proteome Organization (KHUPO)</a></li>
                <li>Associate Member (2021 –), <a href="https://www.ksvs.or.kr/" target="_blank" style="color: inherit; ">Korean Society of Veterinary Science</a></li>
                <li>Student Member (2016 –), <a href="https://kogo.or.kr/index.asp" target="_blank" style="color: inherit; ">Korea Genome Organization (KOGO)</a></li>
                <li>Student Member (2015 –), <a href="https://www.ksbmb.or.kr/html/?pmode=english" target="_blank" style="color: inherit; ">Korean Society for Biochemistry and Molecular Biology (KSBMB)</a></li>
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
