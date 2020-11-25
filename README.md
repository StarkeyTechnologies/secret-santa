# Secret Santa

## Setup
Create a `people.json` at the root of the project. It'll need to be an array of objects.

The object will contain the following properties;
- name (string)
- phone (string)
- exceptions (string array)

The exceptions array will be a reference the exact names of the people that the given person will not be a Secret Santa for.

## AWS
This project can be executed locally, but will require an AWS account for sending the SMS.

This YouTube video can be guidance for setting up the required resources in AWS for sending the SMS.

https://www.youtube.com/watch?v=MvUdqXI-s7g&t=222s

## Running the code
Once all of the configurations have been setup and you are ready to run the Secret Santa app, run the start command from NPM.

`npm run start`