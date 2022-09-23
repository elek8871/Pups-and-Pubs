## Pups and Pubs
#### Do you love socializing with your friends with an ice cold beer? Do you want to take your best friend with you? Pups and Pubs is an application for finding pup friendly venues near you.
#### Users can search for a local pub, add the pub to their favorite list, leave comments on the pub , rate it's pup-friendliness, and add pubs to their list.

#### https://pubs-and-pubs.fly.dev/

### Wireframes
![20220913_091058 Small](https://user-images.githubusercontent.com/110848452/189954980-796fb0e6-703e-4930-95a1-9c00d8735f6b.jpeg)
![20220913_091108 Small](https://user-images.githubusercontent.com/110848452/189955362-441f21e7-a0d3-4c9c-a7ec-c5551429803a.jpeg)

### ERD
![Screen Shot 2022-09-13 at 5 25 40 PM Small](https://user-images.githubusercontent.com/110848452/190027207-ca8110bc-fd9a-43bb-aeee-08547d963640.jpeg)



### RESTful Routing
| Verb | URL Pattern | Action (CRUD)    | Description                             |
|------|-------------|------------------|-----------------------------------------|
| GET  | /user       | index (Read)      | gets user information and logs them in |
| GET  | /user/new   | new (Create)      | shows a form to register new user       |
| GET  | /user/profile | index (Read)    | shows users profile with favorites   |
| GET  | /pubs       | index (Read)      | shows a list of pubs based on user queries|
| GET  | /pubs/:id   | show (Read        | list information about a specific pub    |
| POST | /pubs       | show (Read)       | Adds pub to user favorites  |
| DELETE | /pubs/:id | destroy (Delete)  | deletes the pub from the user favorites |
| GET  | /edit/:id   | new (Create)     | allows user to comment on their favorite pubs|
| POST | /user_notes | new (Create)    | posts comments to specific user favorite|
| PUT  | /edit/:id | update(Update) | shows a form allowing the user to update comments on specific pub |

### User Experience
##### 1. As a user, I want to go to a home page to search a database full of breweries.
##### 2. As a user, I want to see dog-friendly brewery results based on my search query.
##### 3. As a user, I want to pick a brewery and see detailed information about the brewery.
##### 4. As a user, I want to be able to add and edit comments on my favorite breweries.

### MVP
##### -Use RESTful routing
##### -Utilize an ORM to create a database
##### -DRY HTML, CSS, and back-end code
##### -Be deployed online and accessible to the public

### Stretch/Future plans
##### - Incorporate a second API - adding dog jokes
##### - Add a url scrub feature allowing the user to search directly for pup friendly pubs
##### -add the ability to search for a pub by name
##### - Add a map feature
##### - Continue to stylize this project so it looks more engaging
##### - Have user reviews display when user does initial query


### To install Pups and Pubs:
##### 1.Fork and clone repository
##### 2. In your terminal run command: npm install (this will install all needed packages)
##### 3. You will need to install a few file for functionality. In your terminal:  touch .gitignore .env 
##### 4. Add node_modules and .env to your .gitignore file
##### 5. In the .env file you will need to add an ENC_KEY file
###### - EX: ENC_KEY = "string"
###### - you do not need an API key for Open Brewery DB
##### 6. Create the database and migrate the models into it by running the following commands:
###### - createdb express_auth_boilerplate
###### - sequelize db:migrate
##### 7. run the nodemon and navigate to localHost:3000 in your browser and you are all set! Enjoy!

### Tech Stack and API
##### - node, express, ejs layouts, axios, js, bootstrap css, html, css
##### - Open Brewery DB -https://www.openbrewerydb.org

### Project Notes:
###### Day one: most of day one consisted of adding a readme with wireframes, ERDs, and RESTful routing tables. I was able to stub out my routes and add some beginning code.
###### Day two: was able to access the API for a list of breweries and to enable the user to see detailed information on a selected brewery. I'm pretty happy with my progress so far and feel like I am on a solid pace.
###### Day three: Hit a few road blocks today. I spent the morning working on a route that wasn't in MVP so had to pivot back to MVP. I was able to add comments to the user_notes db however, they don't have the associated FK. Tomorrow I will work on getting the comments fully functional and adding the ability to edit and delete.
###### Day Four: Comments fully functional. I decided to use a rating scale so I updated the DB to reflect that. I was able to get the delete route to work! Still struggling with the update route. It adds comments but doesn't update
###### Day Five: Took a break from coding the project and did Bootstrap for CSS.
###### Day Six: Reached MVP today. I feel users may want to add ratings on different dates so I added a visit date to comments. Somehow in the process of updating all those routes the update comments is now functioning so I'm sure there was a syntax error that I fixed. Today the plan is to finish CSS and if time allows work on stretch goals.
###### Day Seven: Updated the database to fine tune ratings options. Spent most of the day doing styling, I'm not sure how much progress I made style-wise as I was having trouble with adding accordion views. I was unable to deploy my website and now I have a database error so I'm calling it a night.
###### Day Eight: the db issue seems to have resolved itself. I was able to have the reviews expand and collapse using an accoridion. I am relatively happy with my project. There is a lot of styling I would like to get done in the future.

###### Post-project: I am happy with how this turned out and proud of what I have created. I wa able to overcome my stumbling blocks and not get stuck on  things. I discovered I really enjoy the backend programming. 


