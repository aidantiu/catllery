# Catllery - A Static Photo Gallery of Beloved Cats

## Overview
**Catllery** is a static website dedicated to showcasing a gallery of cat photos. Each cat featured in the gallery holds a special place in the hearts of their owners, making this site a tribute to these cherished feline friends. The site is designed to be simple, elegant, and easy to navigate, providing a delightful experience for all cat lovers.

## Purpose
I built this project to strengthen my fundamentals in HTML, CSS, and JavaScript. By working on Catllery, I aimed to deepen my understanding of web development and apply best practices in creating a clean and interactive website.

## Technologies Used
Catllery is built using standard web technologies:

- **HTML5:** The structure and content of the site.
- **CSS3:** The styling and hover effects.
- **JavaScript:** Enhances interactivity, including the dynamic generation of HTML and the implementation of horizontal scrolling.

## Contributing
1. Fork the repository
2. Clone the repository 
```git clone <link from your forked github repo>```

## Add your loved felines!
1. Navigate the workspace and find the **data/cat-assets** folder and you will see two subfolders (header and main-pictures).

2. For the picture header of your loved feline, add the picture in the **data/cat-assets/header**
> [!NOTE] : use the name of the cat's name. example: dave-the-magical-cheese-wizard.jpg
```json
{
    "header-picture": "/data/cat-assets/header/dave-the-magical-cheese-wizard.jpg",
    "name": "dave the magical cheese wizard"
}
```

3. For the main-pictures of your loved feline, add the picture in the **data/cat-assets/header**
> [!NOTE] : use the name of the cats name. example: dave-the-magical-cheese-wizard.jpg
```json
{
    "pictures": [
                "/data/cat-assets/main-pictures/dave-the-magical-cheese-wizard/dave1.jpg",
                "/data/cat-assets/main-pictures/dave-the-magical-cheese-wizard/dave2.jpg"
            ]
}


## Conclusion
Catllery is more than just a photo gallery; it's a heartfelt collection of cat images, celebrating the bond between cats and their owners. The website's clean design and thoughtful features make it a joy to explore, whether you're a cat enthusiast or simply appreciate a well-crafted website.


