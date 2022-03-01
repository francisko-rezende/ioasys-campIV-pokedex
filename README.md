<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/francisko-rezende/ioasys-campIV-pokedex">
    <img src="public/favicon.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Pokédex • Ioasys Camp IV</h3>

 <p align="center">
 A Pokédex with an (almost) infinite Pókemon feed and specific info on the different Pókemon. You can also search for specific pocket monsters, and save your favorites for ease of access. Developed as part of <a href="https://camp.ioasys.com.br/">Ioasys Camp IV</a> - Frontend track. Besides taking part in this bootcamp, I have no relationship whatsoever with Ioasys.
 </p>
  <p align="center">
    <br />
    <a href="https://github.com/francisko-rezende/ioasys-campIV-pokedex"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/francisko-rezende/ioasys-campIV-pokedex">View Demo</a>
    ·
    <a href="https://github.com/francisko-rezende/ioasys-campIV-pokedex/issues">Report Bug</a>
    ·
    <a href="https://github.com/francisko-rezende/ioasys-campIV-pokedex/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Welcome to your go-to app for finding out all (or almost all) there is to know about Pokémon! Tired of endless doom-scrolling on Instagram? Come endless doom-scroll on our PókeFeed™,! Want to find out more about a specific pocket-sized monster? Use our search feature! Suffering of an unquenchable thirst for Pokémon knowledge? Click any Pokémon to drown yourself in its stats! Find yourself coming back over and over again for some juicy Porygon trivia (I'm not judging you, buddy, whatever floats your boat)? Add it to your favorites and make it super easy to scratch that itch. Now go catch them all, you beautiful trainer! Developed as part of [Ioasys Camp IV](https://camp.ioasys.com.br/) - Frontend track. Besides taking part in this bootcamp, I have no relationship whatsoever with Ioasys (we can still change that though, you know how to reach, Sweet Pea, pls get in touch :cry:)


<p align="right">(<a href="#top">back to top</a>)</p>

### Built Using

- [React.js](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [Radix-UI](https://www.radix-ui.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/francisko-rezende/ioasys-campIV-pokedex.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
(NPM should work too but)

3. Have fun!

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Like a Magikarp, this app is simple yet powerful. You can browse the different Pokémon using the feed, more Pokémon will load once you reach the bottom. You can also search for specific Pokémon using the search bar. Clicking the Pokémon cards will show you more info on the clicked Pokémon. Finally, you can save your favorite Pokémon by clicking the heart icon next to their name in the page with their detailed info. You can do the same to remove Pokémons from your list; your favorites will have a filled heart next to their name, just give a click and they'll be gone from the list. Here's how to do it:

- Browsing the PokéFeed
![feed-opt](https://user-images.githubusercontent.com/39991049/156229767-bcaf7ab9-a639-466e-8a57-06896e93f39e.gif)

- Searching for specific Pokémon
![search-opt](https://user-images.githubusercontent.com/39991049/156229782-b777ce36-350a-4348-a5ca-32c08b27ea76.gif)

- Adding a Pokémon to your favorite list
![add-to-favs-opt](https://user-images.githubusercontent.com/39991049/156229789-5bcc1930-4890-4e76-8a5f-3ce2d2dcf526.gif)

- Removing a Pokémon from your favorite list
![remove-from-favs-opt](https://user-images.githubusercontent.com/39991049/156229803-2112379b-4f5e-47cf-9c4f-f6ac7f4cc428.gif)

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Infinite feed/scroll
- [x] Pokémon search
- [x] Save to favorites/Fav list
- [ ] Make app more acessible
  - [ ] Use more Radix-UI components

See the [open issues](https://github.com/francisko-rezende/ioasys-campIV-pokedex/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Francisko de Moraes Rezende - [@francisko_r](https://twitter.com/francisko_r) - francisko.rezende@gmail.com.com

Project Link: [https://github.com/francisko-rezende/ioasys-campIV-pokedex](https://github.com/francisko-rezende/ioasys-campIV-pokedex)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Raúl Barrera made the PokéBall animation I used as the app's loading animation, got it from here](https://codepen.io/raubaca/pen/obaZmG)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/francisko-rezende/ioasys-campIV-pokedex.svg?style=for-the-badge
[contributors-url]: https://github.com/francisko-rezende/ioasys-campIV-pokedex/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/francisko-rezende/ioasys-campIV-pokedex.svg?style=for-the-badge
[forks-url]: https://github.com/francisko-rezende/ioasys-campIV-pokedex/network/members
[stars-shield]: https://img.shields.io/github/stars/francisko-rezende/ioasys-campIV-pokedex.svg?style=for-the-badge
[stars-url]: https://github.com/francisko-rezende/ioasys-campIV-pokedex/stargazers
[issues-shield]: https://img.shields.io/github/issues/francisko-rezende/ioasys-campIV-pokedex.svg?style=for-the-badge
[issues-url]: https://github.com/francisko-rezende/ioasys-campIV-pokedex/issues
[license-shield]: https://img.shields.io/github/license/francisko-rezende/ioasys-campIV-pokedex.svg?style=for-the-badge
[license-url]: https://github.com/francisko-rezende/ioasys-campIV-pokedex/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/francisko-rezende
[product-screenshot]: images/screenshot.png
