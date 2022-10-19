# cs465-fullstack
CS-465 Full Stack Development with MEAN

Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

In this project, I used HTML, Javascript, and Typescript to create a full stack web application. I would say that Javascript was used the most when developing the app. Using Express to develop the front-end of the website was a very new and unique experience for me. I have never created a barebones framework using the command line, and I enjoyed learning about all the ways Express can be configured to leverage the power of a Node.js server. The Handlebars templating engine was new to me, the only templating I have done before was using PHP many years ago. I have some experience with routing, so the concept was not new to me, but it was interesting to learn how Express handles the routing internally. Learning Angular to create an SPA was probably the most difficult part of this project for me. I ran into some bugs that set me back longer than I would have liked, but all in all it was a good experience. All of these technologies coming together to produce a web application is impressive. HTML and Handlebars are of course very similar, but HBS allows you to inject data into a static HTML template. Express uses Javascript exclusively to handle the routing and rendering of web pages, and Angular uses Typescript. 

The back end could have been developed using an old-fashioned relational database, but NoSQL/MongoDB was used because it works well with the Express framework. MongoDB uses Javascript and JSON natively, so there is no need to “bridge the gap” between Express and MongoDB. This makes things smoother during development.

Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is different from Javascript in that JSON itself is not a language, but rather a data structure. It ties the frontend and backend together because data is sent between the two in a form that both endpoints can parse, and the data can then be easily manipulated. JSON data is nothing more than a Javascript Object, so using JSON to represent data within a framework built on Javascript makes logical sense.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

Refactoring came into play when getting the Handlebars templates integrated into the application. Separating out the common content that was on every page, such as headers, footers, and the navigation bar made it much easier to work with single pages because this common content could be inserted with a single line of code. Another place where refactoring was done was with the trip listing page. Instead of rendering the entire list of trips as HTML, the code was refactored to render a single trip, and then the trip listing code was changed to loop through all of those single trips. This also made the UI components reusable which has many benefits, such as cleaner code and a modular design.


Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

A method is used to encapsulate specific functionality within an application, but methods are defined in the code of an application. This differs from endpoints because endpoints are exposed to the outside world, whereas methods are not. APIs typically use RESTful architecture to define endpoints that developers can use (call) when writing an application. When these exposed endpoints are used, they trigger the use of an underlying method within the application code to perform a specific task. Security becomes important when dealing with endpoints because you do not want just anyone using your API and causing code to run on the server. You want to ensure that only authorized users are using your API. This is done via authentication, or making sure a user is valid by checking, in the code, for the presence of a token, or some other form of authentication. This security measure needs to be integrated into all parts of the API, and endpoints need to be tested thoroughly to ensure that unauthorized users are denied access to the API.

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course was one of the most difficult I have had thus far at SNHU. I have learned new things such as how to interact with the MEAN stack in general, how to install and configure Node.js and the Express framework, and how to use Angular and Typescript to create a single page application (SPA). The course has also helped me sharpen long time skills I have had such as debugging and writing clean, quality code.
