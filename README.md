# Coding interview api test

Welcome to the coding interview api test.

---

<br>

## Getting started

1. First install the node modules with the following command:

```base
  yarn install
```

<br>

2. Once installation is complete you can run the api using the command below. This sets the API in a state whereby it will reload on save.

```base
  yarn dev
```

<br>

3. Open the src folder and familiarise yourself with the following folders / files:
   - `payment:` This folder contains the necessary files needed in order to complete each of the tasks. During this process you will be focusing on writing code predominately in this folder.
   - `tasks:` This folder contains four tasks we want to work through as part of this interview.
   - `exceptions:` This folder contains a base http exception. This exception format is automatically caught by the api middleware and then returned to the caller.
   - `tests:` This folder contains a basic test file to be used as part of task 4. No tests are required for any task before this.
   - `postman-collection.json:` This file provides a postman collection with the endpoints needed for this interview.
   - `__ignore:` Please ignore this folder during this interview. It provides supporting files which do not form part of your tasks.

<br>

4. Some information on the API:

   - This is a lightweight express api that has serves the following url for both `POST` and `GET` operations

   ```text
         http://localhost:3000/payments
   ```

   - This API uses an in memory instance of MongoDB. Mongoose is pre setup to be used as you see fit as part of each task.
   - The API saves some seed data to the db for further tasks.
   - The API hot reloads on save

<br>

5. You can now begin working on the task 1. Good luck!
