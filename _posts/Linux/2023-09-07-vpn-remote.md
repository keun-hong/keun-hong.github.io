---
layout: single
title: "[Setup] Remote Work: Overcoming SSH Blocks"
categories: Network
tags: [linux, windows, ssh, vpn]
---

## Bridging Computers with SSH through VPN

### Problem and solution

In my line of work, my primary tool is a Windows laptop that I use to connect to several Linux workstations, each stationed in various locations. One illustration is presented below.

<img src="../../images/2023-09-07-vpn-remote/af1a3f3d0e4fcf809648d687127514371887eef9.jpg" title="" alt="pic1.jpg" data-align="center">

One particular workstation is situated in a university setting. Unfortunately, this institution has restrictions that block SSH connections—presumably for security reasons. While remote control tools like "AnyDesk" and "RustDesk" offered viable alternatives (since they operate using assigned addresses rather than IP addresses), my preference was to maintain a consistent SSH connection.

![pic2.jpg](../../images/2023-09-07-vpn-remote/2e966e778466ddf799b6c0d8627d4086353299f8.jpg)

After extensive research and testing, I stumbled upon a solution. If both computers run on Linux OS (as opposed to Windows), "AnyDesk" can allocate a local IP through its VPN (Virtual Private Network) feature. Using this method, I managed to establish a bridge connection between the two Linux computers via VPN. This allowed for SSH access, just as I had hoped.

![pic3.jpg](../../images/2023-09-07-vpn-remote/401efaf1de7f2a459548cfc9d94206ee57be889c.jpg)

In conclusion, with the right tweaks and tools in place, I successfully created a seamless work environment. Now, I can access every workstation from a single laptop, as depicted in the initial image.

![pic4.jpg](../../images/2023-09-07-vpn-remote/615205ed56c35f6633962bb7be560ea8a63115eb.jpg)

---

### Practice!!

![pic5.jpg](../../images/2023-09-07-vpn-remote/389039d1ecab32572ad0c827ddddb42f7520dceb.jpg)