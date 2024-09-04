---
layout: single
title: "[CS] How to create a Singularity container"
categories: ComputerScience
tags: [container]
header:
  teaser: /images/thumnail/2024-09-03-singularity-container.jpg

---

In this post, I will explain how to create a Singularity container that includes all the necessary tools and packages for analysis. This container was generated for use in personal ChIP-seq Nextflow script.

To prepare a container, I first created a definition file (`.def`) and then build the container using Singularity. Below is a step-by-step guide, along with the corresponding definition file.

### Step 1. Write the Singularity definition file

Create a file named `nxf_chip_pipeline.def` and include the following content:

```tex
BootStrap: docker
From: ubuntu:20.04

# Metadata labels
%labels
    Maintainer YourName <newhong@snu.ac.kr>
    Version v1.0

# Set environment variables
%environment
    export LC_ALL=C
    export PATH=/usr/local/bin:$PATH

# Commands to run during container build
%post
    export DEBIAN_FRONTEND=noninteractive

    # Update package list and install required packages
    apt-get update && apt-get install -y --no-install-recommends \
        wget \
        unzip \
        openjdk-8-jdk-headless \
        build-essential \
        python3 \
        python3-pip \
        r-base \
        samtools \
        bedtools \
        bowtie2 \
        fastqc \
        curl \
        ca-certificates \
        git \
        libboost-all-dev \
        gawk \
        grep \
        coreutils \
        tzdata \
        && apt-get clean

    # Configure timezone to avoid interactive prompt
    ln -fs /usr/share/zoneinfo/Etc/UTC /etc/localtime
    dpkg-reconfigure --frontend noninteractive tzdata

    # Install Trimmomatic
    wget http://www.usadellab.org/cms/uploads/supplementary/Trimmomatic/Trimmomatic-0.39.zip
    unzip Trimmomatic-0.39.zip
    mv Trimmomatic-0.39/trimmomatic-0.39.jar /usr/local/bin/trimmomatic.jar
    ln -s /usr/bin/java /usr/local/bin/trimmomatic

    # Install MultiQC
    pip3 install multiqc

    # Install required R packages
    R -e "install.packages(c('SPP', 'caTools', 'snow'), repos='http://cran.us.r-project.org')"

    # Install phantompeakqualtools (for run_spp.R)
    git clone https://github.com/kundajelab/phantompeakqualtools.git /opt/phantompeakqualtools
    ln -s /opt/phantompeakqualtools/run_spp.R /usr/local/bin/run_spp.R

    # Install trimfastq.py
    curl -O https://raw.githubusercontent.com/ENCODE-DCC/chip-seq-pipeline2/master/src/trimfastq.py
    chmod +x trimfastq.py
    mv trimfastq.py /usr/local/bin/trimfastq.py

%runscript
    exec "$@"
```

- **Bootstrap and From**: The container is built from the `ubuntu:20.04` base image.
- **%labels**: Metadata such as maintainer and version.
- **%environment**: Sets environment variables for the container.
- **%post**: This section includes the installation commands for the required tools and packages

### Step 2. Build the Singularity container

To build the container, use the following command:

```bash
sudo singularity build nxf_chip_pipeline.sif nxf_chip_pipeline.def
```

### Step 3. Using the container

You can now use the container. For example, to run `bowtie2` inside the container, you would use:

```bash
singularity exec nxf_chip_pipeline.sif bowtie2 --version
```