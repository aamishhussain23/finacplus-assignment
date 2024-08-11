# FinacPlus Assignment
This README provides a step-by-step guide to setting up and running the FinacPlus Assignment project locally.

## Table of Contents
- Prerequisites
- Getting Started
    * Clone the Repository
    * Backend Setup
    * Frontend Setup
- Running the Application
- Enjoy Your Local Setup

## Prerequisites
Make sure you have the following installed on your machine:
- Node.js
- Git
- MongoDB (Ensure it's running locally)

# Getting Started
Follow these steps to set up the project locally.

### 1. Clone the Repository
First, Open VS code terminal and clone the repository to your local machine:
```bash
git clone https://github.com/aamishhussain23/finacplus-assignment.git
```
Navigate into the project directory:
```bash
cd finacplus-assignment
```
### 2. Backend Setup
Next, set up the backend:

##### 1. Open terminal and run below command to go to the ```backend``` directory:
```bash
cd backend
```
##### 2. Next, Run below command to install project dependencies:
```bash
npm install
```

##### 3. Now, Create a ```.env``` file inside the ```backend``` directory with the following content:
```bash
PORT = 5000
DB_URI = mongodb://localhost:27017/FinacPlus
LOCAL_URI = http://localhost:5173
```

##### 4. Now, Open terminal and run below command to start the server:
```bash
node server.js
```

If everything is set up correctly, you should see the following message in the terminal:

```bash
Server is working on PORT: 5000
2024-08-10T17:13:12.307Z
Database connected with localhost
```

### 3. Frontend Setup
Now, set up the frontend:

##### 1. Open a new terminal and paste below command to navigate to the ```frontend``` directory:

```bash
cd finacplus-assignment
cd frontend
```

##### 2. Next, Run below command to install project dependencies:

```bash
npm install
```

##### 3. Now, Go to the ```frontend``` folder of ```finacplus-assignment``` then open ```src``` folder and open the ```App.jsx``` file. And here set the ```baseurl``` as follows:

```bash
const baseurl = "http://127.0.0.1:5000/api/v1/user";
```

# Running the Application
To run the application, execute the following command in the ```frontend``` directory:

```bash
npm run dev
```

Now, open your browser and navigate to:

```bash
http://localhost:5173
```

Your project should now be running locally!

# Enjoy Your Local Setup
You're all set! Enjoy working on your project locally. If you encounter any issues, feel free to reach out for help.
