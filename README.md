## Pups and Pubs
#### Do you love socializing with your friends with an ice cold beer? Do you want to take your best friend with you? Pups and Pubs is an application for finding pup friendly venues near you.
#### Users can search for a local pub, add the pub to their favorite list, leave comments on the pub , rate it's pup-friendliness, and add pubs to the list.


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
| GET  | /pubs       | index (Read)      | shows a list of pubs based on user queries|
| GET  | /pubs/:id   | show (Read        | list information about a specific pub    |
| POST | /pubs       | new (Create)      | shows a form allowing the user to add a new pub to the db |
| PUT  | /pubs/edit/:id | update(Update) | shows a form allowing the user to update a specific pub |
| DELETE | /pubs/:id | destroy (Delete)  | deletes the pub from the user favorites |

### User Experience
##### 1. As a user, I want to go to a home page to search a database full of breweries.
##### 2. As a user, I want to see dog-friendly brewery results based on my search query.
##### 3. As a user, I want to pick a brewery and see detailed information about the brewery.
##### 4. As a user, I want to be able to add and edit favorited breweries.

### MVP
##### -Use RESTful routing
##### -Utilize an ORM to create a database
##### -DRY HTML, CSS, and back-end code
##### -Be deployed online and accessible to the public

### Stretch
##### -Incorporate a second API - adding dog jokes
##### - Add a url scrub feature allowing the user to search directly for pup friendly pubs
##### - Add a map

### Project Notes:
###### Day one: most of day one consisted of adding a readme with wireframes, ERDs, and RESTful routing tables. I was able to stub out my routes and add some beginning code.
###### Day two: was able to access the API for a list of breweries and to enable the user to see detailed information on a selected brewery. I'm pretty happy with my progress so far and feel like I am on a solid pace.
