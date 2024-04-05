---
layout: single
title: "[Bioinfo] Blacklisted regions in the genome"
categories: Bioinformatics
tags: [proteomics]

---

### Definition

**Blacklist**: In genomics, a "blacklist" generally refers to a list of genomic regions that are known to produce unreliable or artifact signals in sequencing experiments. These regions are typically excluded from analysis to avoid misinterpretation of data. Blacklists can be specific to different types of experiments or organisms, and their composition can vary based on the criteria used to identify problematic regions.

**The ENCODE Blacklist**: Specifically created by the ENCODE project and widely recognized and used in the field due to ENCODE's comprehensive approach and the project's focus on creating a detailed encyclopedia of DNA elements.

### Overview of the generating process

Generating the ENCODE Blacklist involves an automated procedure to systematically identify regions with artifact signals. Here's a summary of the process:

1. **Data Collection**: <u>Utilize input ChIP-seq samples</u> from ENCODE projects for <u>human</u> (Homo sapiens), <u>mouse</u> (Mus musculus), <u>worm</u> (Caenorhabditis elegans), and <u>fly</u> (Drosophila melanogaster). Input samples are control data for ChIP-seq, consisting of randomly sheared DNA regions from non-immunoprecipitated chromatin.

2. **Region Identification**: Search for regions in the genome that appear in <u>multiple copies and are overrepresented in these control input sequences.</u> This is done by examining all <u>1kb windows with 100bp overlaps across the genome</u>.

3. **Scoring and Normalization**: Score these regions based on input read depth and mappability. Apply quantile normalization to these scores, and select the median signal across samples. This step aims to define a comprehensive, cell-type agnostic signal across the genome, unaffected by specific cell-line characteristics (e.g., Copy Number Variations or CNVs) or differential processing of input data.

4. **Artifact Identification**: Regions with <u>read depths or multi-mapping read rates in the top 1%</u> are flagged as likely artifacts. These are regions that show a high signal that presumably doesn't correspond to actual biological variation but rather to sequencing or mapping errors.

5. **Exclusion of Mitochondrial DNA**: Automatically filter out mitochondrial DNA and any reads mapping to these sequences from the analysis, c<u>onsidering them as part of the blacklist.</u>

6. **List Compilation**: Compile the identified regions into a list, which forms the ENCODE Blacklist. This list is used to filter out these problematic regions during the analysis of high-throughput sequencing data.

This automated method for generating the blacklist is essential for ensuring that high-throughput sequencing data, especially from techniques like ChIP-seq, are analyzed accurately, without the interference of regions that could skew the results due to technical artifacts rather than biological significance.

### History

**Past - Duke Excluded Regions (DER)**: manually curated on the *Homo sapiens* (human) genome assembly GRCh37 (hereafter referred to as hg19) to cover a large number of repeat elements in the genome, particularly rRNA, alpha satellites, and other simple repeats.

**Present -  ENCODE Data Analysis Center (DAC) blacklisted regions**: include regions of high signal that presumably represent unannotated repeats in the genome

### Download of the Blacklist files

- [ENCODE Blacklist (hg38, hg19, mm10, ce11, ce10, dm6 & dm3) - Ref. 1-2](https://github.com/Boyle-Lab/Blacklist/tree/master/lists)

- [Historical ENCODE Blacklist (hg38, hg19 & mm10) - Ref. 3](https://www.encodeproject.org/annotations/ENCSR636HFF/)

- [CUT&RUN suspect list (hg38, T2T, mm38) - Ref. 4](https://static-content.springer.com/esm/art%3A10.1186%2Fs13059-023-03027-3/MediaObjects/13059_2023_3027_MOESM2_ESM.xlsx)

### How to generate Blacklist

Link: [**GitHub - Boyle-Lab/Blacklist: Application for making ENCODE Blacklists**](https://github.com/Boyle-Lab/Blacklist/)

**Installation**

```bash
# 1. Clone the repository adn submodules
git clone --recurse-submodules https://github.com/Boyle-Lab/Blacklist.git

# 2. Build bamtools API
cd Blacklist/bamtools/
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX:PATH=$(cd ..; pwd)/install ..
make
make install
cd ../..

# 3. Build Blacklist
make

# 4. Test the demo
# Blacklist execuatable
# input/ - folder containing all bam and bam.bai files (Ref. 5)
# mappability/ - folder containing all uint8 Umap files
cp -r demo/input/ ./
cp -r demo/mappability/ ./

./Blacklist chrUn_GL456392
```

### Reference

1. [1906_SciRep) The ENCODE Blacklist: Identification of Problematic Regions of the Genome](https://www.nature.com/articles/s41598-019-45839-z)

2. [hg19-blacklist-README](https://mitra.stanford.edu/kundaje/akundaje/release/blacklists/hg19-human/hg19-blacklist-README.pdf)

3. [1109_Bioinfo) False positive peaks in ChIP-seq and other sequencing-based functional assays caused by unannotated high copy number regions](https://academic.oup.com/bioinformatics/article/27/15/2144/404749?login=false)

4. [2309_GB) The CUT&RUN suspect list of problematic regions of the genome](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-023-03027-3)

5. [1809_NAR) Umap and Bismap: quantifying genome and methylome mappability](https://academic.oup.com/nar/article/46/20/e120/5086676?login=false)

6. [2304_Bioinfo) excluderanges: exclusion sets for T2T-CHM13, GRCm39, and other genome assemblies](https://academic.oup.com/bioinformatics/article/39/4/btad198/7126418?login=false)

<br>This article was written with help from ChatGPT v4.