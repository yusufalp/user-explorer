# React User Explorer App

This is a simple React app that allows users to filter a list of users by the number of results and nationality. The app provides form fields to modify the filters and updates the user list accordingly.

## Features:

- Filter users by the number of results.
- Filter users by nationality.

Data is fetched and displayed dynamically based on filter settings.

## Installation

Before you begin, ensure that you have the following installed:

- Node.js (version 12 or above)
- npm or Yarn

First, clone the repository to your local machine:

```
git clone https://github.com/yusufalp/user-explorer.git
```

Then change the directory for the location of the file cloned

```
cd <project-folder>
```

#### Install dependencies:

In the project directory, run the following command to install the necessary dependencies:

If you are using npm, run:

```
npm install
```

If you are using Yarn, run:

```
yarn install
```

#### Compile Relay

The Relay compiler generates TypeScript types and combines your queries and fragments into optimized representations. You have to run the Relay compiler each time you modify your GraphQL queries or fragments.

Run the following commands

To compile with npm:

```
npm run relay
```

To compile with Yarn:

```
yarn relay
```

### Running the Application

Once the dependencies are installed, you can run the app locally by following these steps:

Start the development server:

If you're using npm, run:

```
npm run dev
```

If you're using Yarn, run:

```
yarn dev
```

## Open the app in your browser:

Once the application starts, open your browser and visit:

http://localhost:5173

You should see the app running with the user list and filter options.

## Functionality

Results Filter: The input field labeled "Results" allows you to specify how many users to fetch, with a valid range from 1 to 5000.

Nationality Filter: The select dropdown labeled "Nationality" allows you to filter users based on their nationality (from a predefined list).

## Additional Notes

This application fetches user data based on the selected filters, though the UserList component would need to be integrated with an API or mock data to fully implement data fetching and display.

The form validates input on submission to ensure only valid values are set in the state.

#### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
