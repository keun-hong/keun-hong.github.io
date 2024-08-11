---
layout: single
title: "[BI] RNA-seq data processing using nf-core pipeline"
categories: Bioinformatics
tags: [data processing, nextflow, nf-core]
header:
  teaser: /images/thumnail/2024-03-10-rna-seq-nf-core.png
---

Link: [**nf-core rnaseq pipeline**](https://nf-co.re/rnaseq)

### 1. Download the reference genome and genome annotation files

Link: [**GENCODE**](https://www.gencodegenes.org/#)

```bash
address='https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_human/release_45'
wget $address/GRCh38.primary_assembly.genome.fa.gz
wget $address/gencode.v45.primary_assembly.annotation.gtf.gz
```

### 2. Prepare a samplesheet

```bash
# Move to raw file folder
cd ${path}/00_raw

# Make samplesheet file
echo 'sample,fastq_1,fastq_2,strandedness' > samplesheet.csv
for fq in *_1.fq.gz;do \
    pre=${fq%%_1.fq.gz}\
    echo "${pre},${pre}_1.fq.gz,${pre}_2.fq.gz,auto" >> samplesheet.csv\
done
```

**Output format**

```tex
sample,fastq_1,fastq_2,strandedness
BC_0002,BC_0002_1.fq.gz,BC_0002_2.fq.gz,auto
BC_0004,BC_0004_1.fq.gz,BC_0004_2.fq.gz,auto
BC_0005,BC_0005_1.fq.gz,BC_0005_2.fq.gz,auto
BC_0007,BC_0007_1.fq.gz,BC_0007_2.fq.gz,auto
BC_0010,BC_0010_1.fq.gz,BC_0010_2.fq.gz,auto
```

### 3. Prepare the alignment index

I run the pipeline for just a sample without the options (--skip_alignment --skip_pseudo_alignment) introduced in [Usage](https://nf-co.re/rnaseq/3.14.0/docs/usage) for an 'indexing only' workflow run, because 'rsem' indices are not generated.

```bash
# Activate the nf-core environment
conda activate env_nf

# Make samplesheet for a sample
head -2 samplesheet.csv > samplesheet_indexing.csv

# Indexing
fasta="GRCh38.primary_assembly.genome.fa.gz"
gtf="gencode.v45.primary_assembly.annotation.gtf.gz"
outdir="out_index"

nextflow run nf-core/rnaseq -profile singularity \
        -r 3.14.0 \
        --input samplesheet_indexing.csv \
        --outdir $outdir \
        --fasta $fasta --gtf $gtf \
        --gencode --aligner star_rsem \
        --save_reference

## --save_reference: save the indices generated
```

**Output folders structure** 

![](../../images/2024-03-10-rna-seq-nf-core/2024-03-13-15-00-43-image.png)

1. Output folders including indices generated

2. A folder restructured for future pipeline runs

### 4. Run the RNA-seq pipeline

```bash
idx="${path}/240311_GRCh38_Gv45/"
outdir="../out_result"

nextflow run nf-core/rnaseq -profile singularity -r 3.14.0 \
        --input samplesheet.csv \
        --outdir $outdir \
        --fasta $idx/*.fa.gz --gtf $idx/*.gtf.gz \
        --rsem_index $idx/rsem/ --salmon_index $idx/salmon/ \
        --gencode --aligner star_rsem
```

![](../../images/2024-03-10-rna-seq-nf-core/2024-03-14-11-30-56-image.png)

### 5. Result folder structure

Link: [**rnaseq: Results**](https://nf-co.re/rnaseq/3.14.0/results/rnaseq/results-b89fac32650aacc86fcda9ee77e00612a1d77066)