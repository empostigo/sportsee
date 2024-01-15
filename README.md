# SportSee - Développer un tableau de bord d'analytics avec React - Projet 12 formation OpenClassrooms - Développeur Javascript / React

## Maquette Figma du frontend

[1]: Front-UI.png
[2]: min-Front-UI.png
[![SportSee figma mockup][2]][1]

## Installation

### Backend

 After cloning the project, cd to sportsee/service \
 Issue `npm i` and `npm run dev`. This will launch the local API (reachable at `localhost:3000`) and used by the frontend.

### Frontend

 In another console, cd to sportsee/front \
 Issue the same commands as for the backend. This will launch the frontend, on `localhost:5173`

## Usage

### Users

When launching the frontend, you land on the home page that uses mocked data (`front/src/fixtures/user.json`) to fill the charts. \
There exist two users from the remote API ([github repository](https://github.com/empostigo/P12-backend.git)). \
These users, `12` and `18`, and their data are formatted by the local API (`localhost:3000`) and accessible at `locahost:5173/user/${userId}`

### Routes

Individuals sets of data for each users are visible at these routes:

- User activity: `/user/${userId}/activity`
- User sessions average timing: `/user/${userId}/average-sessions`
- User performance:  `/user/${userId}/performance`

## Docker

To facilitate online deployment, there are in each folders, `front` and `service` a Dockerfile to generate container images. \
