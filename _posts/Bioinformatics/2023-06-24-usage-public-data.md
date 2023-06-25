---
layout: single
title: "[Public NGS data] Summary"
categories: Bioinformatics
tags: [public data, NGS]
---
-- intro

## Databases where NGS data is stored

[INSDC](https://www.insdc.org/) (International Nucleotide Sequence Database Collaboration)

## Gathering information of public data

1. Manual Search:
   You can manually search the NCBI databases for datasets of interest. The search interface allows you to filter results based on various criteria, such as species, experiment type, and publication date. From the search results, you can find the BioProject, SRA, or GEO ID for each dataset.
- For BioProject: Visit the NCBI BioProject homepage (https://www.ncbi.nlm.nih.gov/bioproject/), enter your search criteria, and then check the search results for the BioProject ID.

- For SRA: Visit the NCBI SRA homepage (https://www.ncbi.nlm.nih.gov/sra), enter your search criteria, and then check the search results for the SRA ID.

- For GEO: Visit the NCBI GEO homepage (https://www.ncbi.nlm.nih.gov/geo/), enter your search criteria, and then check the search results for the GEO ID.
2. Programmatic Access:
   If you need to gather a large number of IDs, manual search can be time-consuming. In this case, you can use the **NCBI's E-utilities**, which are a set of server-side scripts that provide a method for automated access to NCBI's databases via a standard web protocol (HTTP). Using E-utilities, you can write a script to search for datasets that meet your criteria and automatically retrieve the associated IDs.Using

3. APIs:
   Some third-party bioinformatics tools and platforms provide APIs that you can use to search for datasets and retrieve IDs. For example, Bioconductor, a bioinformatics software project based on the R programming language, provides packages for interfacing with GEO and other databases.

4. Research Publications:
   Many BioProject, SRA, and GEO datasets are associated with specific research publications. Therefore, if there are certain publications of interest to you, you can check the methods section or supplementary materials of these papers to find the IDs for any associated datasets.
   
   Remember that any data you obtain from these sources should be used in accordance with the terms and conditions specified by the data providers.

Yes, there are various bioinformatics tools and software similar to Entrez Programming Utilities (E-utilities). These utilities allow users to access and manipulate data in the National Center for Biotechnology Information's (NCBI) Entrez databases. Here are a few examples:

1. **BioPython**: This is a widely used set of tools for biological computation written in Python. It provides functionality to interact with online services such as NCBI, SwissProt, and others. With BioPython, you can parse bioinformatics files into Python utilizable data structures, among other tasks.

2. **Biopython-Entrez**: It's a Python library specifically for interacting with NCBI's Entrez databases. It provides an interface for querying the databases and downloading results in a range of formats.

3. **SRA Toolkit**: Developed by NCBI, the Sequence Read Archive (SRA) toolkit provides tools for reading, writing and manipulating sequence data from the SRA database and elsewhere.

Remember, these tools require a good knowledge of programming to fully harness their potentials. You might want to consider your programming language of preference, the type of data you will be dealing with, and the specific functionality you need when choosing between these tools.

## Collection metadata and downloading data

### 

### Reference

This article was written with help from ChatGPT.