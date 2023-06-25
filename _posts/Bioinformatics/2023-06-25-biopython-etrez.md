---
layout: single
title: "BioPython's Bio.Entrez module"
categories: bioinformatics
tags: lab
---

-- Intro

## Modules

BioPython's Bio.Entrez module provides an interface to the NCBI's Entrez service, which allows you to search, retrieve, and download data from NCBI's databases. The major functions of Bio.Entrez are:

1. **`Entrez.esearch()`**: This function is used to search an NCBI database. You provide it with a database to search and a search term, and it returns a list of IDs of records that match the search.

2. **`Entrez.efetch()`**: This function is used to download full records from a list of IDs. You provide it with a database and the IDs of the records you want to download, and it returns those records in a format that you specify.

3. **`Entrez.epost()`**: This function is used to upload a list of IDs to the NCBI server. You provide it with a database and a list of IDs, and it returns a query key and web environment string that you can use in subsequent calls to `efetch()` or `elink()`.

4. **`Entrez.esummary()`**: This function retrieves summaries from a list of IDs. You provide it with a database and the IDs of the records you want summaries of, and it returns those summaries.

5. **`Entrez.elink()`**: This function is used to find related records in the database. You provide it with a database and a list of IDs, and it returns a list of IDs of related records.

6. **`Entrez.egquery()`**: This function is used to search for your term in all databases and return the number of results in each one.

7. **`Entrez.eread()`**: This function is used to parse the XML output from any of the other functions. It is often used in conjunction with `efetch()`.

8. **`Entrez.read()`**: This function is used to parse an XML file returned by any of the other Entrez functions. It's typically used to parse the output of `esearch()` and `esummary()`.

9. **`Entrez.efilter()`**: This function is used to use the Entrez filtering system with your search. This is a more advanced feature.

Each function has different options that you can use to refine your searches, specify the format of your results, and more. More details on how to use these functions and what options are available can be found in the BioPython tutorial and the NCBI's Entrez documentation.

## Entrez.esearch()

First, import necessary libraries.

```python
from Bio import Entrez
```

Next, always tell NCBI who you are by providing an email address.

```python
Entrez.email = "your.email@example.com"  # Always tell NCBI who you are
```

Then, use Entrez.esearch() function to search a database of interest. For instance, if you are interested in BioProject, you would do:

```python
def search(query):
    handle = Entrez.esearch(db="bioproject",  # Database to search
                            term=query,  # Search term
                            retmax=1000  # Number of results to return
                            )
    record = Entrez.read(handle)
    return record
```

Here, `query` is a string of keywords you're interested in. It might look like "homo sapiens[Organism] AND RNA-Seq[Strategy]". For the db parameter, use "bioproject" for BioProject, "gds" for GEO, and "sra" for SRA.

Next, to call this function:

```python
results = search("your_keywords_here")
```

The IDs returned by this search are in `results['IdList']`.

```python
print(results['IdList'])
```

This gives you a list of IDs related to your keywords.

Make sure to replace "[your.email@example.com](mailto:your.email@example.com)" and "your_keywords_here" with your actual email and keywords, respectively.

Also, please note that due to restrictions on the number of queries that can be sent to NCBI servers, if you are going to use this script for heavy usage, consider using NCBI API keys and include it in your queries like `Entrez.api_key = "YourAPIKey"`.

Finally, when writing and running these scripts, make sure you are abiding by the terms and conditions of the databases from which you are retrieving data.

---

### 'db' parameter

here's a full list of databases you can use in NCBI with the 'db' parameter in `Entrez.esearch()` as of my last training data in September 2021:

1. "**pubmed**": PubMed database of citations and abstracts for biomedical literature from MEDLINE, life science journals, and online books.
2. "**protein**": Database of protein sequences.
3. "**nuccore**": Database of a core collection of nucleotide sequences.
4. "**ipg**": Database of Identical Protein Groups.
5. "**nucleotide**": Database of a collection of sequences from several sources, including GenBank, RefSeq, TPA and PDB.
6. "**structure**": Database of three-dimensional structures.
7. "**genome**": Database of genome sequences.
8. "**annotinfo**": Annotation information.
9. "**assembly**": Database of Assembly.
10. "**bioproject**": Database of BioProject.
11. "**biosample**": Database of BioSample.
12. "**blastdbinfo**": Blast Database information.
13. "**books**": Database of books.
14. "**cdd**": Conserved Domain Database.
15. "**clinvar**": Database of ClinVar records.
16. "**clone**": Database of clone information.
17. "**gap**": Database of Genotype and Phenotype.
18. "**gapplus**": Database of advanced Genotype and Phenotype.
19. "**grasp**": Database of GRASP records.
20. "**dbvar**": Database of dbVar.
21. "**gene**": Database of gene information.
22. "**gds**": Database of GEO datasets.
23. "**geoprofiles**": Database of GEO Profiles.
24. "**homologene**": Database of HomoloGene.
25. "**medgen**": Database of MedGen.
26. "**mesh**": Database of Medical Subject Headings.
27. "**ncbisearch**": Database of NCBI web page searches.
28. "**nlmcatalog**": Database of NLM Catalog.
29. "**omim**": Database of OMIM.
30. "**orgtrack**": Database of OrgTrack.
31. "**pmc**": Database of PubMed Central.
32. "**popset**": Database of PopSet.
33. "**probe**": Database of Probe.
34. "**proteinclusters**": Database of Protein Clusters.
35. "**pcassay**": Database of PubChem BioAssay.
36. "**pccompound**": Database of PubChem Compound.
37. "**pcsubstance**": Database of PubChem Substance.
38. "**pubmedhealth**": Database of PubMed Health.
39. "**seqannot**": Database of Sequence Annotation.
40. "**snp**": Database of SNP.
41. "**sra**": Database of SRA.
42. "**taxonomy**": Database of Taxonomy.
43. "**biocollections**": Database of BioCollections.

Remember that NCBI might have added more databases after my last training data, so it's always a good idea to check their website for the most current information.

---

### variables in output

The `results` variable in this context is a dictionary that contains the response from the NCBI server for your search query. The dictionary contains several fields. The key fields are:

1. **Count**: The total number of results that match your search query in the database.

2. **RetMax**: The maximum number of results returned from your query. This is set by you in the `retmax` argument of the `esearch()` function. If `RetMax` is less than `Count`, it means there are more results available than you have retrieved in this request.

3. **RetStart**: This represents the starting index of returned results. It is useful when you want to paginate through results.

4. **<mark>IdList</mark>**: This is a list of the unique identifiers for each of the returned records. These are the IDs you will likely be most interested in, as you can use them to fetch detailed records.

5. **TranslationSet**: This contains a set of translations for your query. For instance, if you search for a common name of an organism, the TranslationSet might contain the scientific name.

6. **TranslationStack**: This is a history stack of the search, which contains the search terms and their translations.

7. **QueryTranslation**: This is the final, fully translated version of your search query.

The `IdList` is usually the most relevant piece of information if you're looking to gather specific IDs. Other fields are more relevant for understanding the context of the search or for more advanced usage.

---