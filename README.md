[![Deploy to GitHub Pages](https://github.com/ajmalrasouli/tic-tac-toe-app/actions/workflows/calc_test.yml/badge.svg)](https://github.com/ajmalrasouli/tic-tac-toe-app/actions/workflows/calc_test.yml)

# Tic Tac Toe

A simple, interactive Tic Tac Toe game built with HTML, CSS, and JavaScript.

Site is live on: https://ajmalrasouli.github.io/tic-tac-toe-app/

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Project Structure](#project-structure)
- [How to Dockerize this app](#how-to-dockerize-this-app)
- [Prerequisites](#prerequisites)
- [Deploy on AWS ECR](#deploy)
- [License](#license)


## Project Description
This Tic Tac Toe game allows two players to play against each other. The game interface is user-friendly and displays the game board, player turns, and the game result (win or draw).

## Features
- Interactive game board
- Two-player mode
- Winning message display
- Restart game functionality

## Setup Instruction

### Prerequisites
- Node.js and npm installed on your system

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   cd tic-tac-toe

Running the Game
To run the game locally, open the index.html file in your web browser:


```sh
open index.html
```

# How to Dockerize this app?

# Tic-Tac-Toe Project

## Project Structure 📁

```
TIC-TAC-TOE/
├── index.html
├── script.js
├── style.css
├── Dockerfile
└── docker-compose.yml
```

## Dockerfile 📄

```Dockerfile
# Use the official Node.js image as the base image.
FROM node:16

# Set the working directory.
WORKDIR /usr/src/app

# Copy all the files to the working directory in the container.
COPY . .

# Install http-server globally.
RUN npm install -g http-server

# Expose port 8080 to the outside world.
EXPOSE 8080

# Command to run the app using http-server.
CMD [ "http-server", "-p", "8080" ]
```

## docker-compose.yml 📜

```yml
version: '3.8'

services:
  tic-tac-toe-app:
    build: .
    image: tic-tac-toe
    ports:
      - "8080:8080"
    container_name: tic-tac-toe-app

```


## Instructions 🛠️
To build and run the application using Docker, use the following command:

```sh
docker-compose up --build
```

Then, open your browser and navigate to:

```arduino
http://localhost:8080
```


### Prerequisites

You need to have Docker installed on your system before you can build and run your Tic-Tac-Toe application as a Docker container.

**For Windows:**

1. Download Docker Desktop for Windows from Docker's official website.
2. Run the installer and follow the on-screen instructions.
3. After installation, Docker Desktop will launch automatically. Ensure it is running by checking for the Docker icon in the taskbar.

**For Mac:**

1. Download Docker Desktop for Mac from Docker's official website.
2. Open the downloaded `.dmg` file and drag the Docker icon to the Applications folder.
3. Launch Docker from the Applications folder and follow the setup instructions.

**For Linux:**

1. Follow the instructions specific to your Linux distribution on the [Docker installation page](https://docs.docker.com/engine/install/).

### Clone the Repository

If your project is hosted on GitHub, you can clone it using the following command:

```sh
git clone https://github.com/yourusername/tic-tac-toe.git
cd tic-tac-toe
```

Build and Run the Docker Container

   1. Navigate to your project directory:
      ```sh
      cd /path/to/your/tic-tac-toe-project
      ```
   
   2. Build the Docker image and start the container using Docker Compose:
      ```sh   
      Copy codedocker-compose up --build
      ```

Access the Application

Once the container is running, open your browser and navigate to:
```arduino
http://localhost:8080
```
You should see your Tic-Tac-Toe application running.

## Deploy on AWS ECR
### Deploying Tic-Tac-Toe application using Docker, AWS ECR, and AWS App Runner. The guide includes instructions for downloading the AWS CLI, configuring it, pushing your Docker image to AWS ECR, and deploying it with AWS App Runner.

## Step-by-Step Guide
1. Download and Install AWS CLI v2
Follow the instructions to download and install the AWS CLI v2 from the official AWS documentation.

2. Configure AWS CLI
Configure the AWS CLI with your credentials:

```sh
aws configure
```

Enter your access key ID and secret access key when prompted:

```mathematica
AWS Access Key ID [None]: 
AWS Secret Access Key [None]: 
Default region name [None]: us-wesr-1
Default output format [None]: json
```

3. Push Docker Image to AWS ECR
   1. Authenticate Docker to your Amazon ECR registry:
         ```sh
         aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 804789588521.dkr.ecr.us-east-1.amazonaws.com
         ```

   2. Build your Docker image:
         ```sh
         docker build -t tictactoe .
         ```
   3. Tag your Docker image:
         ```sh
         docker tag tictactoe:latest 804789588521.dkr.ecr.us-east-1.amazonaws.com/tictactoe:latest
         ```
   4. Push your Docker image to Amazon ECR:
         ```sh
         docker push 804789588521.dkr.ecr.us-east-1.amazonaws.com/tictactoe:latest
         ```
         
4. Deploy with AWS App Runner
Create a new service on AWS App Runner:

   1. Open the AWS Management Console and navigate to AWS App Runner.
   2. Create a new service:
      * Select "Container registry".
      * Choose "Amazon ECR".
      * Click "Browse" and select the tictactoe image.
      * Set "Deployment setting" to "Automatic".
      * Create a new service role if prompted.
        
   3. Configure the services:
      * Service name: tictactoe
      * Virtual CPU: 1 vCPU
      * Virtual memory: 2GB
      * Port: 8080
        
   4. Create and deploy the service.
      
   After deployment, you can access your application at the provided URL:

      ```arduino
      https://vqydsibd8m.us-east-1.awsapprunner.com
      ```
   5. Update the Project and Redeploy

   When you update your project in VSCode and need to redeploy, follow these steps:

      1. Build your Docker image:
         ```sh
         docker build -t tictactoe .
         ```
      2. Tag your Docker image:
         ```sh
         docker tag tictactoe:latest 804789588521.dkr.ecr.us-east-1.amazonaws.com/tictactoe:latest
         ```
      3. Push your Docker image to Amazon ECR:
         ```sh
         docker push 804789588521.dkr.ecr.us-east-1.amazonaws.com/tictactoe:latest
         ```
      
AWS App Runner will automatically detect the new image and deploy it.
         
         
# Summary
By following these steps, you will be able to configure AWS CLI, push your Docker images to AWS ECR,
and deploy your application using AWS App Runner. When you update your project, you can quickly
rebuild and push the new image, and AWS App Runner will handle the deployment automatically. 

   

# License

This project is licensed under the MIT License.
