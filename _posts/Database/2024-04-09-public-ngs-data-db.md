---
layout: single
title: "[DB] INSDC: Where are the public NGS data stored?"
categories: Database
tags: [public data, NGS]
---

Public databases are filled with a tremendous amount of NGS-based data that can be used for research brainstorming, storyboarding, target selection, and validation. **However, finding, identifying, and downloading adequate raw data can be a difficult task.** In this post, I will introduce you to the process of effectively using public NGS-based data.

### 1. Major DBs where NGS data are stored

![2024-03-31-00-28-39-image.png](../../images/2024-04-09-public-ngs-data-db/99bcbcb67643425c18f0777918c0fa7384e0463d.png)

**International Nucleotide Sequence Database Collaboration ([INSDC](https://www.insdc.org/); [M Arita et al., NAR, 2021](https://academic.oup.com/nar/article/49/D1/D121/5964076?login=false))** is a long-standing global collaboration among three primary databases that archive and distribute data from nucleotide sequencing:

1. [NCBI's Genebank]([GenBank Overview](https://www.ncbi.nlm.nih.gov/genbank/))
   BioProject & BioSample ([T Barrett et al., NAR, 2011](https://academic.oup.com/nar/article/40/D1/D57/2903284?login=false)), SRA & GEO

2. [ENA]([ENA Browser](https://www.ebi.ac.uk/ena/browser**/)): European Nucleotide Archive

3. [DDBJ](%5BDDBJ%5D(https://www.ddbj.nig.ac.**jp/index-e**.html)): DNA Data Bank of Japan

These three organizations exchange data on a daily basis to ensure that they all hold the same comprehensive collection of sequence data. They follow the same conventions for data content and format to ensure consistent and high-quality data. The INSDC covers the full spectrum of data raw reads, alignment, assembly, and functional annotation.

![2024-03-31-00-29-15-image.png](../../images/2024-04-09-public-ngs-data-db/d131e48f3f2200136275ee74570fed939f9b72d4.png)

[Ref. Gene Expression Repositories Explained](https://www.ccdatalab.org/blog/gene-expression-repositories-explained)

### 2. Structure of DBs (BioProject, BioSample, SRA & GEO)

To effectively use public data within databases, one must first comprehend the structure of the databases such as BioProject, BioSample, SRA, and GEO, and then choose the appropriate database to collect information tailored to specific needs. These databases are interconnected, with each having the following descriptions:

- **BioProject** is a DB for information on the biological project's scope and purpose and can link to various datasets across different NCBI databases.

- **BioSample** contains descriptions of biological source materials (or samples) used in experimental assays.

- **SRA (Sequence Read Archive)** stores <u>raw sequencing data</u> and alignment information.

- **GEO (Gene Expression Omnibus)** archives <u>processed datasets</u> such as high-throughput gene expression data, functional genomics data sets, and both array-based and sequence-based data..

These DBs indeed share a relationship where data from one can be linked to another. For example, raw data in the **SRA** may be part of a larger project detailed in **BioProject**, and samples used for generating such data may be described in **BioSample**. The processed results from these data could then be stored in **GEO**.

![2024-03-30-18-14-05-image.png](../../images/2024-04-09-public-ngs-data-db/62e034ce3f61f305f456db065b8106a130f0d9f9.png)

In the process of making my multi-omics data public ([Son KH et al., SciAdv, 2023](https://www.science.org/doi/full/10.1126/sciadv.ade3399?rfr_dat=cr_pub++0pubmed&url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org)), including RNA-seq, ChIP-seq, and MBD-seq, I prepared and submitted the required metadata spreadsheet to the **GEO**. A few days later, I was able to verify that IDs for the project and sample data had been issued in the structure illustrated in the image below.

![2024-03-30-17-30-52-image.png](../../images/2024-04-09-public-ngs-data-db/01a7d1a2947d36956749706f105ccaa029996491.png)

The information verified in each DB was as follows.

![2024-03-30-16-11-43-image.png](../../images/2024-04-09-public-ngs-data-db/aa04df7c16da408a2d60b1df883fd456c858c292.png)

![2024-03-30-18-12-04-image.png](../../images/2024-04-09-public-ngs-data-db/30339208c25170813613d531721e7279555f2c78.png)

![2024-03-30-16-12-05-image.png](../../images/2024-04-09-public-ngs-data-db/fa88203643be314fd51ecbdd755ae43b62d992fc.png)

[Another example](https://www.ccgproject.org/data-ncbi) of handling a variety of data types is as follows.

![2b8ebea5ceb92c650e2a22e9fdb24920d6337ef4.png](../../images/2024-04-09-public-ngs-data-db/82c51926d0a995478187105869221edec00d3e4d.png)

### 3. Strategies for gathering information of public data

1. Manual Search:<br>[NCBI's Entrez Global Query Cross-Database Search System](https://www.ncbi.nlm.nih.gov/sites/gquery)<br>[BioProject](https://www.ncbi.nlm.nih.gov/bioproject/) / [BioSample](https://www.ncbi.nlm.nih.gov/biosample/) / [SRA](https://www.ncbi.nlm.nih.gov/sra) / [GEO](https://www.ncbi.nlm.nih.gov/geo/)

2. Programmatic Access:<br>**E-utilities** are a set of server-side scripts provided by NCBI for programmatically accessing their databases. These tools allow users to perform automated searches, downloads, and analysis of data from NCBI's various databases, including <u>GenBank, PubMed, GEO, and SRA</u>. E-utilities are particularly useful for researchers who need to handle large datasets or automate repetitive tasks. They use a standard web protocol (HTTP) for queries, making them accessible from any programming environment that can send HTTP requests.<br>**SRA Toolkit** is developed by NCBI specifically for <u>working with data from the Sequence Read Archive (SRA)</u>. This toolkit provides utilities for downloading, converting, and analyzing the vast amount of sequencing data stored in SRA. It's a crucial tool for researchers dealing with high-throughput sequencing data, as it simplifies the process of accessing and manipulating large-scale genomic datasets. The toolkit supports various formats and allows for efficient data management, especially in large-scale genomic projects.

3. APIs: Some third-party bioinformatics tools and platforms (ex. **BioPython-Entrez**)

4. Research Publications

### 3-1 Manual Search

If you search for several keywords in the [NCBI's Entrez Global Query Cross-Database Search System](https://www.ncbi.nlm.nih.gov/sites/gquery), you can view the comprehensive number of results.

![2024-03-29-03-51-18-image.png](../../images/2024-04-09-public-ngs-data-db/d166f1e42dc4961f15862a770bff4775012e5e13.png)

[BioProject](https://www.ncbi.nlm.nih.gov/bioproject/) / [BioSample](https://www.ncbi.nlm.nih.gov/biosample/) / [SRA](https://www.ncbi.nlm.nih.gov/sra) / [GEO](https://www.ncbi.nlm.nih.gov/geo/)

![2024-03-31-00-32-32-image.png](../../images/2024-04-09-public-ngs-data-db/351ad03e82ed369a72458911c70c74b73c15396b.png)

Typically, when we submit NGS-based generated data, there are two options: `GEO or SRA`. If both raw and processed data are submitted to `GEO`, IDs for other three DBs are automatically issued. But, If only raw data is submitted to `SRA`, a `GEO` ID is not issued. For this reason, `SRA` and `BioProject (BioSample)` are initially investigated to collect as much data as possible.

By applying the search rules likes `boolean operator (AND, OR, NOT)` or `fields (ex. Organoism, Source, etc)` found in [Search in SRA Entrez](https://www.ncbi.nlm.nih.gov/sra/docs/srasearch/), you can search for the data you need more efficiently and accurately.

```tex
# Example
((canis lupus familiaris[Organism]) AND genomic[Source]) AND ChIP-seq[Strategy]
```

 In the SRA DB, there are 20 fields we can use: `Access, Accession, Aligned, Author, BioProject, BioSample, Filter, Layout, Mbases, Modification Date, Organism, Platform, Properties, Publication Date, ReadLength, Selection, Source, Strategy, Text Word, Title`. 

Indexes that can be used in each field are found in [Advanced search](https://www.ncbi.nlm.nih.gov/sra/advanced); click the **"show index list"** button. Useful fields are described below.<br>`Organism`: homo sapiens, mus musculus, canis lupus familiaris, etc.<br>`Strategy`: wgs, wxs, rna seq, chip seq, ata seq, etc.<br>`Source`: genomic, transcriptomic, other, etc.<br>`Selection`: cdna, chip, mnase, cage, other, etc.<br>`Layout`: paired or single.

### 3-2. Data gathering with BioPython-Entrez

Link: [**biopython/Bio.Entrez**](https://biopython.org/docs/latest/api/Bio.Entrez.html#)

#### Modules

BioPython's Bio.Entrez module provides an interface to the NCBI's Entrez service, which allows you to search, retrieve, and download data from NCBI's databases. The major functions of Bio.Entrez are:

1. **`Entrez.info()`** is your window into the vast world of biological data stored in NCBI's Entrez databases. With this function, you can quickly access essential details about each database, such as its description and available fields. It's like peeking into a library catalog to see what books are available before diving into your research. This information helps you tailor your queries and streamline your data retrieval process, ensuring you get the most relevant and useful results for your studies. So, next time you're gearing up to explore the wealth of biological knowledge, don't forget to start with Entrez.info(). It's your trusty guide in navigating the NCBI's treasure trove of data!

2. **`Entrez.read()`** is used to parse an XML file returned by any of the other Entrez functions. It's typically used to parse the output of `esearch()` and `esummary()`.

3. **`Entrez.esearch()`** is used to search an NCBI database. You provide it with a database to search and a search term, and it returns a list of IDs of records that match the search.

4. **`Entrez.efetch()`** is used to download full records from a list of IDs. You provide it with a database and the IDs of the records you want to download, and it returns those records in a format that you specify.

#### Entrez.info() & .read()

Here's a full list of databases you can use in NCBI with the 'db' parameter in

```python
# First, import necessary libraries.
from Bio import Entrez
import xmltodict
import json

# Next, always tell NCBI who you are by providing an email address.
Entrez.email = "your.email@example.com"  # Always tell NCBI who you are

# We can confirm all of the databases that can be searched.
handle = Entrez.einfo()
record = Entrez.read(handle)
print('# "db" parameter')
print(record["DbList"])
```

![2024-04-09-19-41-18-image.png](../../images/2024-04-09-public-ngs-data-db/93324d5b1f2c7a3dc2feaa9dcd93cf071f571905.png)

#### Entrez.esearch()

Here, `query` is a string of keywords you're interested in. It might look like **"homo sapiens[Organism] AND RNA-Seq[Strategy]"**. For the db parameter, use "bioproject" for BioProject, "gds" for GEO, and "sra" for SRA.

```python
# Then, use Entrez.esearch() function to search a database of interest.
# For instance, if you are interested in SRA, you would do:
def search(query):
    handle = Entrez.esearch(db="sra",  # Database to search
                            term=query,  # Search term
                            retmax=3  # Number of results to return
                            )
    record = Entrez.read(handle)
    return record

# Next, to call this function:
results = search("your_keywords_here")

# The IDs returned by this search are in `results['IdList']`.
print(results['IdList'])
```

![2024-04-09-19-58-48-image.png](../../images/2024-04-09-public-ngs-data-db/e9bfddee479eadf62eb5552d38eb8cfb2872ae75.png)

#### Entrez.fetch()

```python
# Then, use Entrez.fetch() function to fetch the metadata of searched IDs.
def fetch(ls_id):
    df = pd.DataFrame()

    for id in ls_id:
        handle = Entrez.efetch(db="sra",
                               id=id,
                               rettype="gb",
                               retmode="text"
                              )
        # convert xml to dataframe format
        xml_data = handle.read()
        dict_data = xmltodict.parse(xml_data)
        json_data = json.dumps(dict_data)
        df_tmp = pd.json_normalize(json.loads(json_data))
        # remove complex words in column names
        df_tmp.columns = df_tmp.columns.str.replace('EXPERIMENT_PACKAGE_SET.EXPERIMENT_PACKAGE.', '')
        df_tmp.index = [id]
        # merge dataframes
        df = pd.concat([df, df_tmp], axis=0)

    return df

# After calling the function, we can confirm the table of metadata
df_out = fetch(results['IdList'])
df_out.T
```

![2024-04-09-19-57-07-image.png](../../images/2024-04-09-public-ngs-data-db/de29d5cc5967826887514dda1e850e3992602f72.png)

Using this functions, I wrote a personalized code for searching and fetching the metadata from SRA database. You can find it on my GitHub repository at [keun-hong/sra-meta-fetch](https://github.com/keun-hong/sra-meta-fetch).

### Other tools for fetching metadata

If you have accession numbers for the public data you need, you can easily gather metadata using various software tools as listed below.

#### nf-core/ngsfetch

[nf-core/fetchngs](https://nf-co.re/fetchngs/1.12.0/docs/usage)  
[GitHub - nf-core/fetchngs](https://github.com/nf-core/fetchngs?tab=readme-ov-file)

![nf-core-fetchngs_metro_map_grey.png](../../images/2024-04-09-public-ngs-data-db/68bcba03ce9493b6fa69dfafb62d2927ad62b50b.png)

#### ffq

[2301_Bioinfo) Metadata retrieval from sequence databases with *ffq*](https://academic.oup.com/bioinformatics/article/39/1/btac667/6971839) [GitHub - pachterlab/ffq](https://github.com/pachterlab/ffq)

![68747470733a2f2f646f63732e676f6f676c652e636f6d2f64726177696e67732f642f652f32504143582d317651774b493333755f716a61702d515539545f76366f5a3945484c54787279423445494f544e6f6445575756465669776863414e70546d425155345a72535f.png](../../images/2024-04-09-public-ngs-data-db/2aa23e9f17c3688a52ee95c8ea441b1c7928a1a1.png)

#### GEOfetch

[2303_Bioinfo) GEOfetch: a command-line tool for downloading data and standardized metadata from GEO and SRA](https://academic.oup.com/bioinformatics/article/39/3/btad069/7066913?login=false)  
[GEOfetch - PEPkit: the bio data management toolkit](https://pep.databio.org/geofetch/)

![btad069f1.jpeg](../../images/2024-04-09-public-ngs-data-db/4567353f47245f2d1cc8691fca7e8e0a76ea7767.jpeg)

#### pysradb

[1904_F1000) pysradb: A Python package to query next-generation sequencing metadata and data from NCBI Sequence Read Archive](https://f1000research.com/articles/8-532/v1)  
[GitHub - saketkc/pysradb](https://github.com/saketkc/pysradb)

![448a74a1af94df4020168e138eeb8d42fbd77b97.png](../../images/2024-04-09-public-ngs-data-db/ee28b22a3457c8174bb607579b5d89b73a059ef2.png)

### Reference

[biopython/Bio.Entrez](https://biopython.org/docs/latest/api/Bio.Entrez.html#)<br>[incodom.kr/E-utility](http://www.incodom.kr/E-utility)<br>[Biopython/Bio.Entrez](https://incodom.kr/Biopython/Bio.Entrez)