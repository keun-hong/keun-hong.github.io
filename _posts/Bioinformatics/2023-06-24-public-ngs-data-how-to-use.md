---
layout: single
title: "[Public NGS data] How to use?"
categories: Bioinformatics
tags: [public data, NGS]

---

Public databases are filled with a tremendous amount of NGS-based data that can be used for research brainstorming, storyboarding, target selection, and validation. However, finding, identifying, and downloading adequate raw data can be a difficult task. In this post, I will introduce you to the process of effectively using public NGS-based data.

## Databases where NGS data is stored

<img title="" src="file:///C:/Users/thsrm/Desktop/INSDS.jpg" alt="loading-ag-764" data-align="center" width="240">

**International Nucleotide Sequence Database Collaboration ([INSDC](https://www.insdc.org/))** is a long-standing global collaboration among three primary databases that archive and distribute data from nucleotide sequencing:

1. [NCBI's Genebank]([GenBank Overview](https://www.ncbi.nlm.nih.gov/genbank/))

2. [ENA]([ENA Browser](https://www.ebi.ac.uk/ena/browser**/)): European Nucleotide Archive

3. [DDBJ](%5BDDBJ%5D(https://www.ddbj.nig.ac.**jp/index-e**.html)): DNA Data Bank of Japan

These three organizations exchange data on a daily basis to ensure that they all hold the same comprehensive collection of sequence data. They follow the same conventions for data content and format to ensure consistent and high-quality data. The INSDC covers the full spectrum of data raw reads, alignment, assembly, and functional annotation.

## Gathering information of public data

1. Manual Search:
- [NCBI's Entrez Global Query Cross-Database Search System](https://www.ncbi.nlm.nih.gov/sites/gquery)

- [BioProject]([Home - BioProject - NCBI](https://www.ncbi.nlm.nih.gov/bioproject/)) / [SRA]([Home - SRA - NCBI](https://www.ncbi.nlm.nih.gov/sra)) / [GEO]([Home - GEO - NCBI](https://www.ncbi.nlm.nih.gov/geo/))
2. Programmatic Access:
   If you need to gather a large number of IDs, manual search can be time-consuming. In this case, you can use the **NCBI's E-utilities**, which are a set of server-side scripts that provide a method for automated access to NCBI's databases via a standard web protocol (HTTP). Using E-utilities, you can write a script to search for datasets that meet your criteria and automatically retrieve the associated IDs.Using

3. APIs: Some third-party bioinformatics tools and platforms (ex. ffq)

4. Research Publications

Yes, there are various bioinformatics tools and software similar to Entrez Programming Utilities (E-utilities). These utilities allow users to access and manipulate data in the National Center for Biotechnology Information's (NCBI) Entrez databases. Here are a few examples:

1. **BioPython**: This is a widely used set of tools for biological computation written in Python. It provides functionality to interact with online services such as NCBI, SwissProt, and others. With BioPython, you can parse bioinformatics files into Python utilizable data structures, among other tasks.

2. **Biopython-Entrez**: It's a Python library specifically for interacting with NCBI's Entrez databases. It provides an interface for querying the databases and downloading results in a range of formats.

3. **SRA Toolkit**: Developed by NCBI, the Sequence Read Archive (SRA) toolkit provides tools for reading, writing and manipulating sequence data from the SRA database and elsewhere.

Remember, these tools require a good knowledge of programming to fully harness their potentials. You might want to consider your programming language of preference, the type of data you will be dealing with, and the specific functionality you need when choosing between these tools.

## Collection metadata

## Downloading raw .fastq data

[FAIR enough? A perspective on the status of nucleotide sequence data and metadata on public archives | bioRxiv](https://www.biorxiv.org/content/10.1101/2021.09.23.461561v1.full)

### Reference

This article was written with help from ChatGPT.