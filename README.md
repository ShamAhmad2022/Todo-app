# Lab 32
## Context API - Behaviors
Authors: Sham Al-Jalam

A Web Application for securely managing a To Do List.
In today's lab I added the functionality of updating the display of the completed tasks, the settings of the number of page to display, and the sort keyword, and i added the data to the local storage.
## URLs

* deployed application : `Site deploy failed on netlify, i don't know why`

* Github actions: [https://github.com/ShamAhmad2022/todo-app/actions](https://github.com/ShamAhmad2022/todo-app/actions)

*  pull request: [https://github.com/ShamAhmad2022/todo-app/pull/1](https://github.com/ShamAhmad2022/todo-app/pull/1)

### Setup:
run: `npm i`
### Running the app:
* npm start


### Test:
* Unit Test: npm test


### Describe how global state is consumed by the components.
the global state can be reach from anywhere in the project by the 'settingsContext' like this :
settings.(the name of the state)

### Describe the operation of the hook: useForm().
The useForm hook is a custom hook in React that is used to simplify form handling. It abstracts away the common logic for managing form input fields, handling form submission

### UML
![WML](./images/todo.png)

