---
layout: single
title: "[Bioinfo] Downloading the Singularity images of nf-core pipeline"
categories: Bioinformatics
tags: [nf-core, singularity]
header:
  teaser: /images/thumnail/2024-03-13-nf-core-singularity-img.png
---

When running nf-core pipelines for the first time, I frequently encounter errors while pulling the Singularity image.

![](../../images/2024-03-13-nf-core-singularity-img/2024-03-14-23-56-50-image.png)

Therefore, I perform the process of downloading the images separately before executing the pipeline.

Link: [**nf-core download**](https://nf-co.re/tools#downloading-pipelines-for-offline-use)

```bash
# 1. Choose the folder where singularity images are saved.
path="nf-core_singularity_cache"
echo "export NXF_SINGULARITY_CACHEDIR='${path}'" > ~/.bashrc
source ~/.bashrc

# 2. Install nf-core in conda environment
conda install bioconda::nf-core

# 3. Check usage and options.
nf-core download --help
```

![](../../images/2024-03-13-nf-core-singularity-img/2024-03-14-23-44-43-image.png)

```bash
# 4. Download Singularity images of a pipeline
# Usage: nf-core download [OPTIONS] <pipeline name>
nf-core download quantms -r 1.2.0 -d -x none -s singularity -u amend
```

![](../../images/2024-03-13-nf-core-singularity-img/2024-03-14-23-22-55-image.png)