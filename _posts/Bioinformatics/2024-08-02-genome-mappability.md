---
layout: single
title: "[Bioinfo] How to calculate mappability on a genome"
categories: --
tags: [genome]
header:
  teaser: --.png

---

--

### Troubleshooting

- Location of the tool code

- python 2.7

- bowtie index? <mark>bowtie install?</mark>

- conda install bioconda::bowtie

- Sun Grid Engine computing cluster setup?

```tex
$ python ubismap.py -h

usage: ubismap.py [-h] [--kmers [KMERS [KMERS ...]]] [-GenomeReady] [-Bismap]
                  [-C2T] [-G2A] [-ExitAfterIndexing]
                  [-SimultaneousJobs SIMULTANEOUSJOBS] [-var_id VAR_ID]
                  [-write_script WRITE_SCRIPT] [-pipe] [-chunk CHUNK]
                  fasta_path chrsize_path out_dir queue_name bowtie_path

This scripts is a wrapper that writes qsub job submission commands for
executing other scripts of the software in order to identify mappability of a
given genome for a range of various read lengths. This script assumes that you
are using a cluster system that accepts the following parameters: -N, -e, -o,
-t, -tc, -cwd, -b y, -terse. If these options do not exist in your cluster,
specify -write so you can modify the qsub job submissions manually.

positional arguments:
  fasta_path            Path to the genome fasta file.
  chrsize_path          Path to a 2-column file where the first column is the
                        chromosome name and the second column is its size
  out_dir               Path to directory to create output files/folders
  queue_name            Queue name for qsub job submission.
  bowtie_path           Path to bowtie-build executable

optional arguments:
  -h, --help            show this help message and exit
  --kmers [KMERS [KMERS ...]]
                        Kmer length for mappability. e.g. 24 36 50 100
  -GenomeReady          If in the 'out_dir' there already exists a /chrs and
                        /genome subdirectory where genome directory has a
                        genome.fasta with bowtie index suffix as
                        'BisMap_bowtie.ind' or 'Umap_bowtie.ind' if --Bismap
                        is not specified and the ./chrs directory has
                        indivudal chromosome FASTA files, specify this option
  -Bismap               Specify -Bismap if double genome indexing is expected.
                        This would create a genome that is concatenation of
                        forward and reverse complement. If -C2T or -G2A is
                        expected, this must be specified
  -C2T                  If --Bismap is provided, specify --C2T or --G2A
  -G2A                  If --Bismap is provided, specify --C2T or --G2A
  -ExitAfterIndexing    If you only want the index, specify this option
  -SimultaneousJobs SIMULTANEOUSJOBS
                        Number of jobs to run simultaneously
  -var_id VAR_ID        Environmental variable for accessing job IDs. By
                        default is set to SGE_TASK_ID assuming a sungrid
                        engine environment.
  -write_script WRITE_SCRIPT
                        Specify -write <Path to output job submission file> if
                        instead of direct execution, you want to save the job
                        submission file.
  -pipe                 If -pipe is specified, the software command will be
                        piped into the qsub command. For example instead of:
                        'qsub -q <queuename> -N <jobname> python <script>.py
                        <arg1> <arg2>', 'echo python <script>.py <arg1> <arg2>
                        | qsub -q <queuename> -N <jobname>' will be
                        written/executed.
  -chunk CHUNK          Length of chromosomal chunks
```