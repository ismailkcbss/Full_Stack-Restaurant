# Restaurant Promotion Application

<p align="center">
   <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
  <a href="https://legacy.reactjs.org/docs/getting-started.html" target="blank"><img src="https://firebasestorage.googleapis.com/v0/b/shopplace-41632.appspot.com/o/Githup%2FReactJs.png?alt=media&token=214d305b-a1af-437b-8eb7-e5a90b98f253&_gl=1*y4l745*_ga*MTc4OTQzODUwNy4xNjk0Nzk3MzI5*_ga_CW55HF8NVT*MTY5Nzg4MTIyMi4yNC4xLjE2OTc4ODIzODAuNDQuMC4w" width="200" alt="Nest Logo" /></a>
</p>

## Project Description
It is a restaurant promotion application that can be used in daily life. Within the project, it includes features such as registration, username, Decryption, adding and editing menus, searching for the desired restaurant, and viewing restaurant features.

## Project testing
Launches the test runner in the interactive watch mode.
See the section about [running tests](https://create-react-app.dev/docs/running-tests/) for more information.

## Technologies used in the project
The full-stack project I have developed is based on JavaScript library **ReactJS**, NodeJS-based **NestJS** for the backend, and **PostgreSQL** for database management. Additionally, I have utilized technologies such as **Redux**, **Firebase**, **MUI**, and **jwt**.

## Project Installation
To begin with, you need to clone the project to your computer. Simply run the following code in your command prompt.
```bash
$ git clone https://github.com/ismailkcbss/Full_Stack-Restaurant.git
```
After cloning the project to your computer, you need to open the command prompt in the directory where you copied the folder. Then, to complete the project installation, you should follow the steps below in sequence.

- ### Frontend Installation

Open the **frontend** folder in the downloaded directory and click the folder path above the directory to run the *command prompt* and run the command client using this path.  Then, type the following command to upload the *node modules* folder to the directory

```bash
$ npm install
```

After the download is complete, to run our project, type the following command in the same command prompt.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

You can run the project by typing this command. In some cases, after the download is complete, you may encounter errors due to package versions. In such a situation, you can manually download according to the versions of the packages in the *package.json* file shown below

![PackageJsonPNG](https://firebasestorage.googleapis.com/v0/b/shopplace-41632.appspot.com/o/Githup%2FRestaurantFrontendPackage.png?alt=media&token=17950898-d668-4eed-a769-15bed3c418d6&_gl=1*kibcc1*_ga*MTc4OTQzODUwNy4xNjk0Nzk3MzI5*_ga_CW55HF8NVT*MTY5Nzg4NDU4OC4yNS4xLjE2OTc4ODQ5OTguMjcuMC4w)

An example of the command you should type in the command prompt when you are inside the project's main directory for the download process is;
```bash
$ npm install react@18.0.2 --save --force
```
Writing this will assist you in downloading the package.

- ### Backend Installation 

Open the **backend** folder in the downloaded directory and click the folder path above the directory to run the command prompt and run this path in the command client. Then, type the following command to load the *node-modules* folder into the directory

```bash
$ npm install
```

After the download is complete, to run our project, type the following command in the same command prompt
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

You can run the project by typing this command. In some cases, after the download is complete, you may encounter errors due to package versions. In such a situation, you can manually download according to the versions of the packages in the package.json file shown below.

![PackageJsonPNG](https://firebasestorage.googleapis.com/v0/b/shopplace-41632.appspot.com/o/Githup%2FRestaurantBackendPackage.png?alt=media&token=3de793af-8b31-4f21-9a43-c82ff569408b&_gl=1*dx94ld*_ga*MTc4OTQzODUwNy4xNjk0Nzk3MzI5*_ga_CW55HF8NVT*MTY5Nzg4NDU4OC4yNS4xLjE2OTc4ODQ5NzUuNTAuMC4w)

An example of the command you should type in the command prompt when you are inside the project's main directory for the download process is:

- ### for dependencies packages
```bash
$ npm install @nestjs/common@9.0.0 --save --force
```

- ### for devDependencies packages
```bash
$ npm install @nestjs/common@9.0.0 --save-dev --force
```
writing this will help you download the package. After these downloads, PostgreSQL must be installed for the backend folder to work, if it is not installed, you need to download.

Click here to download the [PostgreSQL application](https://www.postgresql.org/download/)

## Application images

- Login Page

![Login](https://firebasestorage.googleapis.com/v0/b/shopplace-41632.appspot.com/o/Githup%2FrestaurantLogin.jpg?alt=media&token=07c774d7-c034-48d3-bf4e-edb0b1535587&_gl=1*1y9z7mi*_ga*MTc4OTQzODUwNy4xNjk0Nzk3MzI5*_ga_CW55HF8NVT*MTY5Nzg4NDU4OC4yNS4xLjE2OTc4ODQ2MDcuNDEuMC4w)

- Register Page

![Register](https://firebasestorage.googleapis.com/v0/b/shopplace-41632.appspot.com/o/Githup%2FrestaurantRegister.jpg?alt=media&token=72d91b6e-a75d-4e34-b6d4-fde01f1fb4b9&_gl=1*amv2vi*_ga*MTc4OTQzODUwNy4xNjk0Nzk3MzI5*_ga_CW55HF8NVT*MTY5Nzg4NDU4OC4yNS4xLjE2OTc4ODQ2MzIuMTYuMC4w)

- Register Restaurant Form

![RegRestaurant](https://firebasestorage.googleapis.com/v0/b/shopplace-41632.appspot.com/o/Githup%2FrestaurantBilgiRegister.jpg?alt=media&token=5ab0d81e-c9a7-4dc9-9dcc-e5117845d2ee&_gl=1*ivm9v0*_ga*MTc4OTQzODUwNy4xNjk0Nzk3MzI5*_ga_CW55HF8NVT*MTY5Nzg4NDU4OC4yNS4xLjE2OTc4ODQ2NTcuNjAuMC4w)

- Restaurant Viewer Page

![ResView](https://firebasestorage.googleapis.com/v0/b/shopplace-41632.appspot.com/o/Githup%2FRestaurantMenu.jpg?alt=media&token=a2720e8c-6540-4e5c-9431-9af0d8df9b12&_gl=1*m9q3kd*_ga*MTc4OTQzODUwNy4xNjk0Nzk3MzI5*_ga_CW55HF8NVT*MTY5Nzg4NDU4OC4yNS4xLjE2OTc4ODQ3NzguNjAuMC4w)


- Restaurant Owner Page

![ResOwner](https://firebasestorage.googleapis.com/v0/b/shopplace-41632.appspot.com/o/Githup%2FRestaurantSahibiMenu.jpg?alt=media&token=81cff58c-7aec-4bc6-82d2-aaef64e31d49&_gl=1*g3cr63*_ga*MTc4OTQzODUwNy4xNjk0Nzk3MzI5*_ga_CW55HF8NVT*MTY5Nzg4NDU4OC4yNS4xLjE2OTc4ODQ2OTQuMjMuMC4w)

## Stay in touch
- E-Mail [ismailcankocabas@gmail.com](ismailcankocabas@gmail.com)
- LinkedIn [@ismailkcbss](https://www.linkedin.com/in/ismailkcbss/)

## Learn more

You can learn more in the [Create React App documentation](https://create-react-app.dev/docs/getting-started/) <br/>
To learn ReactJS, check out the [React documentation](https://react.dev/)<br/>
To learn NestJS, check out the [NestJS documentation](https://docs.nestjs.com/)<br/>
To learn PostgreSQL, check out the [PostgreSQL documantation](https://www.postgresql.org/docs/14/intro-whatis.html) <br/>

## License
MyRestaurant application is [MIT licensed](LICENSE).

