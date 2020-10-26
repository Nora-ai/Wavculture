# Wavculture
Livestream Music Feed


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_TBD_

<br>

## MVP

_The Wavculture MVP is to create a Livestream Music Feed for users to tune into Livestream videos based on genre, the day of the week and the time of the day. A user will be able to search for Artists by name and Livestreams by name. A user can share the link of the livestream by clicking the share button, and copying the link of the Wavculture path. A user is able to sign up and create a username for future login in order to submit a livestream, favorite livestreams that will be added to their profile page, create a simple profile page, and comment on artist pages. Admins of Wavculture will have their own login portal. Admins will have access to the submitted livesteams in order to edit, delete and approve to be added to the feed. Admins will be able to access all posts to edit and delete at any time, by visiting the each individual livestream page from the main feed. Admins can add livestreams._

<br>

### Goals

- _Use Authentication for User Login and Admin Login._
- _Utilize full CRUD for Front-End and Back-End._
_ _Search and filter Artists and Livestreams._

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Javascript Framework for Front End._ |
|   React Router   | _Declarative Routing for React._ |
|      Rails       | _Ruby Framework for Back End._ |
|      JWT         | _Gem for Authentication._ |
|      BCRYPT      | _Gem for Authentication._ |
|      CORS        | _Dependency that allows for cross-origin resource sharing._ |

<br>

### Client (Front End)

#### Wireframes

[DESKTOP AND MOBILE WORKFLOW] (https://whimsical.com/K6pr7AddzJuBsbjDRCVYsf)

#### Component Tree

[Component Tree] (https://whimsical.com/Sec49zGprzpWVFEsb1EXwK)


#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ logos
      |__ images
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Nav.jsx
      |__ AdminNav.jsx
      |__ Login.jsx
      |__ AdminLogin.jsx
      |__ Subscribe.jsx
      |__ Main.jsx
      |__ Search.jsx
      |__ Ads.jsx
      |__ Profile.jsx
      |__ AdminProfile.jsx
      |__ ShowLikes.jsx
      |__ ShowPosts.jsx
      |__ EditPost.jsx
      |__ CreatePost.jsx
      |__ DeletePost.jsx
      |__ ShowComments.jsx
      |__ CreateComments.jsx
      |__ EditComment.jsx
      |__ DeleteComment.jsx
|__ services/
    |__ api-helper.js
    |__ auth.js
    |__ users.js
    |__ admins.js
    |__ posts.js
    |__ artists.js
    |__ genres.js
    |__ comments.js
    |__ likes.js
  

```

#### Component Breakdown


#### ERD Model

[Wavculture ERD] (https://app.diagrams.net/#G1OVOgxVLq2zsVYF1r992gUQgXPPBXADJG)


