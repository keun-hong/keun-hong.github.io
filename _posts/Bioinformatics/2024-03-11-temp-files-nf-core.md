---
layout: single
title: "[BI] Temporary files generated by the nf-core pipeline in root folder"
categories: Bioinformatics
tags: [troubleshooting, nextflow, nf-core]
header:
  teaser: /images/thumnail/2024-03-11-temp-files-nf-core.jpg
---

### Problem Description

When I ran the nf-core RNA-seq pipeline, big size temporary files named "rootf-*" (> 10Gb) were generated in root folder (/tmp). Because there isn't enough space in root partition, the location for temporary files have to be chnaged.

### Time waste

I spent too many time applying environment variables of nf-core, Nextflow & Singularity

- **NXF_TEMP**, **SINGULARITY_TMPDIR** & **TMPDIR**

### Solution

I used **Singularity v3.8** before.

When I reinstalled **SingularityCE v4.1**, the issue resolved itself naturally.

---

### Troubleshooting Journey

I initially concentrated on identifying factors that contribute to the creation of temp files depending on the pipeline framwork or softwares.

- nf-core, Nextflow

- Singularity

#### 1. nf-core pipeline & Nextflow configuration:

[nf-core pipeline configuration](https://nf-co.re/docs/usage/configuration)

[Nextflow configuration](https://www.nextflow.io/docs/latest/config.html)

**Priority:**

1. Parameters specified on the command line (`--something value`)

2. `-params-file` option (.json|.yaml format)
   If you want to know what parameters are there? → [nf-core launch](https://oldsite.nf-co.re/launch)

3. `-c my_config` option
   
   **Warning**: For nf-core pipelines - parameters defined in custom.config files will not override defaults in `nextflow.config`! **Please use `-params-file`**

4. `nextflow.config` in the current directory

5. `nextflow.config` in the workflow project directory

6. $HOME/.nextflow/config

7. Hardcoded pipeline defaults - Values defined within the pipeline script itself (e.g. `main.nf`)

There are three main types of pipeline configuration that you can use:

**Basic pipeline configuration profiles**

- base.config (in ~/.nextflow/assets/nf-core/{pipeline}/conf/)

- profile configs (test.config is located with base.config)
  
  - predefined sets of configurations stored in the pipeline's nextflow.config file or in separate config files within the pipeline's conf/ directory.
  
  - ex. -profile test,singularity (The order of arguments is important! They are loaded in sequence, so later profiles can overwrite earlier profiles.)

**Shared nf-core/configs configuration profiles**

- If you use a shared system with other people

**Custom configuration files**

- If you are the only person to be running this pipeline,
  
  1. User’s home directory: `~/.nextflow/config`
  
  2. Analysis working directory: `nextflow.config`
  
  3. Custom path specified on the command line: `-c path/to/config` (multiple can be given)

#### 2. Singularity configuration:

[Singularity CE (v4.1) configuration](https://docs.sylabs.io/guides/4.1/admin-guide/configfiles.html)

**Comprehensively, there are three environmental variables.**

1. **NXF_TEMP**: This environment variable is used by Nextflow. `NXF_TEMP` specifies the directory where Nextflow stores temporary files generated during its execution. These temp files can include intermediate data, log files, or other temp files created during the workflow's execution.

2. **SINGULARITY_TMPDIR**: This environment variable is used by Singularity. `SINGULARITY_TMPDIR` specifies the directory for storing temp files needed during the building or execution of Singularity container images. The temp files here might be related to the image build process or needed for container execution. If no changes were observed, it might indicate that Singularity did not use this directory under certain conditions or no relevant actions were performed.

3. **TMPDIR**: This environment variable is widely used across various operating systems like Linux, Unix, and macOS, to specify the default directory for storing temp files created by the system or applications. `TMPDIR` serves as a general environment variable for applications and the operating system to store temporary data. By setting this variable, users can customize the location for storing temporary files.

Despite numerous attempts, it was unsuccessful. So, I changed the direction to reinstallation of Singularity because it was confirmed that rootfs-* folders are generated by this software.

#### 3. Installation of SincularityCE

[SingularityCE v4.1 installation](https://docs.sylabs.io/guides/4.1/admin-guide/installation.html)

**Old version installed in conda environment was removed.**

```bash
conda remove singularity
```

**Dependencies were installed.**

```bash
# Ensure repositories are up-to-date
sudo apt-get update
# Install debian packages for dependencies
sudo apt-get install -y \
   autoconf \
   automake \
   cryptsetup \
   fuse \
   fuse2fs \
   git \
   libfuse-dev \
   libglib2.0-dev \
   libseccomp-dev \
   libtool \
   pkg-config \
   runc \
   squashfs-tools \
   squashfs-tools-ng \
   uidmap \
   wget \
   zlib1g-dev
```

**Because SingularityCE is written in Go, Go was installed and set up my environment.**

```bash
# Download files and locate 
export VERSION=1.21.6 OS=linux ARCH=amd64 && \
    wget https://dl.google.com/go/go$VERSION.$OS-$ARCH.tar.gz && \
    sudo tar -C /usr/local -xzvf go$VERSION.$OS-$ARCH.tar.gz && \
    rm go$VERSION.$OS-$ARCH.tar.gz
# Set up 
echo 'export GOPATH=${HOME}/go' >> ~/.bashrc && \
    echo 'export PATH=/usr/local/go/bin:${PATH}:${GOPATH}/bin' >> ~/.bashrc && \
    source ~/.bashrc
```

**SingularityCE was installed.**

```bash
# Download files
export VERSION=4.1.0 && # adjust this as necessary \
    wget https://github.com/sylabs/singularity/releases/download/v${VERSION}/singularity-ce-${VERSION}.tar.gz && \
    tar -xzf singularity-ce-${VERSION}.tar.gz && \
    cd singularity-ce-${VERSION} 

# Compile
./mconfig && \
    make -C ./builddir && \
    sudo make -C ./builddir install
```

### Terms

- HPS excution scheduler ([Slurm](https://slurm.schedmd.com/quickstart.html), [SGE](https://docs.oracle.com/cd/E19680-01/html/821-1541/ciagcgha.html#scrolltoc), [PBS](https://www.openpbs.org/) & [LSF](https://www.ibm.com/support/knowledgecenter/en/SSWRJV_10.1.0/lsf_welcome/lsf_welcome.html) )

- Cloud compute infrastructure  ([AWS Batch](https://aws.amazon.com/batch/) & [Google Cloud](https://cloud.google.com/))

- Container engine ([Docker](https://www.docker.com/), [Singularity](https://sylabs.io/), [Podman](https://podman.io/), [Charliecloud](https://hpc.github.io/charliecloud/) & [Shifter](https://www.nersc.gov/research-and-development/user-defined-images/))

- Package management system ([Conda](https://docs.conda.io/en/latest/))