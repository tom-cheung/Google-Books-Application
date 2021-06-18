# Google Books Application 

This command line application allows you to interact with the Google Books API by searching for books based upon title and author inputs. The application will display a list of 5 results from each search, and allow users to save results to a reading list. The information displayed for each search contains a book's title, author, and publisher. If any of these fields are unavailable from the Google Books API, the field will indicate unavailable. 

## Environment and Dependencies 

* Node 14.3.0
* axios 0.21.1
* prompt-sync 4.2.0

## Tests

* Chai 4.3.4
* Mocha 9.0.0

## Usage 

This applications requires Node. 

Clone this repository https://github.com/tom-cheung/Google-Books-Application.git, CD into the main file, run `npm install` to install all dependencies, lastly run `npm run start`.

Users will be prompted with the following, 

## Main Menu 

<img src="./img/main_menu.PNG" width="800" height="200">

An input of 1 brings up the search menu, where the user is prompted for `title` and/or `author` input. Input must be provided for at least one of the criterias. 

<img src="./img/main_menu.PNG" width="800" height="200">


