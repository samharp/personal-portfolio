# personal-portfolio

## Description

A collection of personal projects ranging from 2016 to present in categories such as Graphic Design, Web Design, and Animation.

Website is built using Eleventy (11ty), Nunjucks is used for templating markup. This setup is to maximize smart features for website creation (components, variables, etc.) while also reducing data processing on servers and clients (go green).


## Build

Below are some more involved sections/aspects of this website (things that maybe aren't as self-explanatory).

### Portfolio generation

To better handle sorting/filtering and to allow for easier management, portfolio items are generated from **JSON**. The JSON file outlines an item's title, description, image source, and link (if applicable). Some styles require generating HTML each time, meaning that an easier show/hide toggle approach wouldn't work (as built in previous portfolio versions).

### `/now` page

For easier management/updating, the items on the `/now` page are generated from **JSON**. The JSON file outlines different aspects of each item, including a title, description, and link (if applicable).

Then, on page load, `build-projects-scripts.js` generates sections for each JSON item. This will eventually be converted to utilizing the 11ty build process to handle JSON data/item generation.


## Contributions

As this is a personal portfolio, only small contributions will be accepted and merged into main. Thank you for your interest in contributing, but this project is demonstrative of past projects AND my own abilities to build the portfolio itself. Feedback will be happily accepted through Issues, social media, or email.
