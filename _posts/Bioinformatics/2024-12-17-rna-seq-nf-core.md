---
layout: single
title: "[Bioinfo] RNA-seq data processing using nf-core pipeline"
categories: Bioinformatics
tags: [data processing, nextflow, nf-core]
---

--

[nf-core rnaseq pipeline](https://nf-co.re/rnaseq)

```bash
# Activate the nf-core environment
conda activate env_nf

# Run the pipeline
nextflow run nf-core/rnaseq -profile test,singularity -r 3.14.0 --outdir out_test
```

- Prep (before running)
  
  - fastq files
  
  - genome files (how to manage?)
  
  - annotation files 

- Process

- Results

- My setting 