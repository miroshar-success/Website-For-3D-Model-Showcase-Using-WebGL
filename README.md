# Website with 3D models
A personal website, made using pure HTML, CSS and Javascript and Unity WebGL to showcase custom made 3D models in an interactive way.

## Table of Contents
- [Website](#Website)
- [Information](#Information)
- [Showcase](#Showcase)
    - [2D Version](#2D-Version)
    - [3D Version](#3D-Version)
    - [Upcoming Models](#Upcoming-Models)
- [Known Issues](#Known-Issues)
    - [2D](#2D)
    - [3D](#3D)


# Website
<div align="center">
  <a href="https://sams3dlibrary.live/">
    <img src="Showcase-Files/Images/Sams-3D-Library-Intro-Logo.png" alt="Sam's 3D Library" title="Click to enter Sam's 3D Library!">
  </a>
</div>

<br>

# Information

<details>
  <summary><b>Context</b></summary>
  <br>
This project started in summer 2022 after I had finished two projects for university pertaining to 3D modeling with Blender. I wanted to have my own little place on the web where I could showcase some of the 3D models that I had created for these projects, to ensure that they wouldn't just sit on a hard drive somewhere, never to be seen again. 3D models take a lot of time to create; so in my opinion, they deserve all the attention they can get.
  <br/>
  <br/>
</details>

<details>
  <summary><b>Why Vanilla HTML, CSS & JavaScript</b></summary>
  <br/>
Initially, I began with just a regular 2D website, which started out as part of some coursework on HTML and CSS. I thought about reworking the website, making heavier use of frameworks such as Bootstrap or others, but deliberately opted not to, in order to get a clearer grasp of HTML, CSS, and JavaScript, which would benefit me more in the longterm. <i>I believe it is important to get hands-on experience with any new language first, before efficient use of the frameworks and technologies that build on them can be made.</i>
  <br/>
  <br/>
</details>

<details>
  <summary><b>Unity WebGL Version</b></summary>
  <br/>
During the making of the 2D website, I had the idea of also creating an interactive WebGL version of the website in Unity. I have always been interested in game development, which is why I initially picked up 3D modeling in the first place some three to four years ago. I felt like adding a Unity WebGL version of the 3D library was simply the natural next step. The 3D Version also has mobile support. It will automatically detect if you are on a mobile device and enable a mobile UI letting you play using an onscreen joystick and buttons. <b>The 3D Version Unity Project project can be downloaded <a href="https://1drv.ms/f/s!AoSv6FFo-Lzghu5nlYwWkQcQLO_zBw?e=tdPvvu">here</a>.</b>
  <br/>
  <br/>
</details>

<details>
  <summary><b>Current State</b></summary>
  <br/>
Currently, six 3D models are displayed on the website, all of which can be downloaded/purchased on CGTrader and TurboSquid (or ripped from the files of this repository if you're smart). More 3D models will be uploaded further down the line, some of which can be seen under <a href="#Upcoming-Models">Upcoming Models</a>. I highly appreciate any visits to the <a href="https://sams3dlibrary.live/">Website</a>.
  <br/>
  <br/>
</details>

<br/>

> ## **Note: Unity WebGL is not officially supported on mobile devices! The experience may vary across devices.**

<br/>

# Showcase

## 2D Version

| ![2D/3D Selection Page](Showcase-Files/Images/Sams-3D-Library-2D-Showcase-1.png) | ![Main Page](Showcase-Files/Images/Sams-3D-Library-2D-Showcase-2.png) |
|:---:|:---:|
| *2D/3D Selection Page* | *Main Page* |

| ![Model Inspection Overlay](Showcase-Files/Images/Sams-3D-Library-2D-Showcase-3.png) |
|:---:|
| *Model Examination Overlay* |

<br/>

## 3D Version

| ![Introduction Screen](Showcase-Files/Images/Sams-3D-Library-3D-Showcase-1.png) | ![3D Model Hallway](Showcase-Files/Images/Sams-3D-Library-3D-Showcase-2.png) |
|:---:|:---:|
| *Introduction Screen* | *3D Model Hallway* |

| ![Looking at 3D Model](Showcase-Files/Images/Sams-3D-Library-3D-Showcase-3.png) | ![Examining 3D Model](Showcase-Files/Images/Sams-3D-Library-3D-Showcase-4.png) |
|:---:|:---:|
| *Looking at 3D Model* | *Examining 3D Model* |

| ![Pause Menu](Showcase-Files/Images/Sams-3D-Library-3D-Showcase-5.png) | ![Mobile Platform UI](Showcase-Files/Images/Sams-3D-Library-3D-Showcase-6.png) |
|:---:|:---:|
| *Pause Menu* | *Mobile Platform UI* |

<br/>

## Upcoming Models

| ![Großer Kopf](Showcase-Files/Images/Sams-3D-Library-Upcoming-Model-1.png) | ![Military Fast Attack Spaceship](Showcase-Files/Images/Sams-3D-Library-Upcoming-Model-2.png) | ![Worn/Dirty Laboratory Table](Showcase-Files/Images/Sams-3D-Library-Upcoming-Model-3.png) |
|:---:|:---:|:---:|
| *Großer Kopf -Trude Esser* | *Military Fast Attack Spaceship* | *Worn & Dirty Laboratory Table* |

<br/>

## Known Issues
### 2D
* Scrollbar disappearing and not reappearing in overlay

<br/>

### 3D
* 3D Version crashes when changing Texture Resolution Slider back and forth.
* Window Resolution Setting sometimes causes issues. (More or less added for completeness only anyways)
* Cursor control will sometimes get handed over back to browser when exiting examination of object. Clicking once will bring control back to the game though.
* On some Mobile Devices and older browsers an error will be shown when trying to play the 3D Version.
* On some Mobile Devices a black screen will be shown, or rather, the scene will have no lighting.
* On mobile: Looking around while first using the joystick not possible. Looking around and then using the joystick works. (Multitouch issue)
* Sound Reverb not working in WebGL (Not supported).

<br/>

