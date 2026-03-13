logo
SHARPENER


Dashboard

Assignments

Practice Gym

Interview

Team

Progress

Alumni

Doubt Support
Report Issue
Refer and Win
₹ 1000
profile-img
Profile

Details


Notes


Doubt Support
An Ecommerce Startup

Node.js
Congratulations!



You are now ready to build an E-Commerce API using Express! 🎉

In this task, you will set up and organize your Express application by implementing routes for users, products, and cart management.

This will help you understand how to structure APIs, use req.params, and organize route files efficiently.


1. User Routes
GET /users: Fetch all users.
POST /users: Add a new user.
GET /users/:id: Fetch a user by their ID.

2. Product Routes
GET /products: Fetch all products.
POST /products: Add a new product.
GET /products/:id: Fetch a product by its ID.

3. Cart Routes
GET /cart/:userId: Fetch the cart items for a specific user.
POST /cart/:userId: Add a product to the user's cart.

Task
Create route files for users, products, and cart (userRoutes.js, productRoutes.js, cartRoutes.js).
For each route, implement placeholder functionality, such as res.send() responses. For example:
res.send("Fetching all products")

3.Organize your project structure by separating route files into a routes folder.


Expected Output Example
For /users routes:
GET /users returns: "Fetching all users".
POST /users returns: "Adding a new user".
GET /users/:id returns: "Fetching user with ID: id".
For /products routes:
GET /products returns: "Fetching all products".
POST /products returns: "Adding a new product".
GET /products/:id returns: "Fetching product with ID: id".
For /cart routes:
GET /cart/:userId returns: "Fetching cart for user with ID: userId".
POST /cart/:userId returns: "Adding product to cart for user with ID: userId".
Hints
Use Express for creating routes.
Ensure each route handles the correct HTTP method and endpoint.
Use route parameters by using req.params.id or req.params.userId(e.g., :id or :userId) appropriately.
Export the routes and integrate them into the main server.js file.
What will be logged when the following route is accessed with GET /users/42?



app.get("/users/:id", (req, res) => {

console.log(req.params.id);

res.send(`User ID is ${req.params.id}`);

});

Select one answer

Now that you've built and tested your E-Commerce API, it's time to submit your work! 🚀

Task:

Push your latest code to GitHub.
Submit the commit ID of your final implementation.


🔹 Instructions:

Ensure all routes are implemented correctly.
Push your code to a GitHub repository.
Copy your latest commit ID and submit it.
Happy coding! 🎉

Add your answer
Previous

Question List
Next
02:59:53

Submit
0.0k
