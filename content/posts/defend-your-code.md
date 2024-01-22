---
title: "Defend Your Code"
description: "A blog post describing the development process of Defend Your Code, a CLI program I worked on for my Secure Coding Principles class."
date:
    published: "2024-01-21"
image:
    src: "/images/posts/defend-your-code/defend-your-code.png"
    alt: "The Defend Your Code program executing."
---

[Defend Your Code](https://github.com/OtherAndrew/defendyourcodejs) is a project I worked on in 2023 as a part of my Secure Coding Principles class at UW Tacoma. In this post, I will go over how I implemented this program.

## Description

---

Defend Your Code is a CLI program that validates user input based on a set of requirements and stores the input. The user must provide a password which is hashed and used to access their information later.

## Goals

---

- Effectively validate user input.
- Validate passwords and store password as a hash.
- Compare a password against a stored hash.
- Log any invalid input, such as invalid names, numbers, non-existent files, and weak passwords.

## Technologies Used

---

- JavaScript
- [Node.js](https://nodejs.org/en)
- [Jest](https://jestjs.io)
- [Inquirer](https://github.com/SBoudrias/Inquirer.js)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

## Implementation

### Libraries

For this project, I chose to use [Inquirer](https://github.com/SBoudrias/Inquirer.js) to handle the front end interface. This saved me time creating a re-prompting system, and it looks better than bare `console.log()` statements. I did run into a few issues while using Inquirer which I will elaborate on later. For password hashing, I chose to use [bcrypt](https://github.com/kelektiv/node.bcrypt.js) over Node's [Crypto](https://nodejs.org/api/crypto.html) module because it looked easier to use.

### Test-driven development

I used [Jest](https://jestjs.io) as my testing framework. Unlike other projects I've worked on, I chose to write my unit tests before implementing the rest of the program. This helped me solidify the requirements and identify the edge cases to look out for.

### Early return

[Early return](https://softwareengineering.stackexchange.com/questions/18454/should-i-return-from-a-function-early-or-use-an-if-statement) is a programming style where invalid input is caught and returned early while the expected result is handled at the end. This comes in handy if there's multiple checks that need to be done on an input and each case needs to be handled differently. This can result in less nesting and more readable code.

```js
function validatePassword(password) {
    if (password.length < MIN_PASSWORD_LENGTH) {
        return `Password must contain at least ` +
               `${MIN_PASSWORD_LENGTH} characters.`;
    }
    if (password.length >= MAX_PASSWORD_LENGTH) {
        return `Password must contain less than ` + 
               `${MAX_PASSWORD_LENGTH} characters.`;
    }
    if (!hasUppercase(password)) {
        return 'Password must contain at least ' +
               'one uppercase letter.';
    }
    if (!hasLowercase(password)) {
        return 'Password must contain at least ' +
               'one lowercase letter.';
    }
    if (!hasNumber(password)) {
        return 'Password must contain at least ' + 
               'one number.';
    }
    if (!hasSpecialChar(password)) {
        return 'Password must contain at least ' + 
               'one special character.';
    }
    // if the password passed the above tests
    // then it's valid
    return true;
};
```

## Challenges

---

### Validation functions

Inquirer takes in an array of question objects to use to prompt the user. These question objects consist of a type, message, and validation function.

```js
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name:',
        validate: validateName
    },
    {
        type: 'input',
        name: 'birthday',
        message: 'Enter your birthday:',
        validate: validateBirthday
    },
    // etc.
];
```

This made creating the prompts easy, but I ran into issues when I needed to validate an input based on a previous input. As part of the assignment, I needed to take in two integers, and make sure they won't cause overflow when added or multiplied together. The validate function for the questions only takes in one argument, which posed a problem. I got around this by storing the first integer as a variable in the script file that contained all the validation functions, so the validation function for the second integer could reference it. This wasn't ideal, but it worked.

I ended up running into a similar problem when I needed to ask the user to resubmit their password to compare it against the stored hash of their password they input previously. How I ended up solving this is by creating a password validation function using the results from the first Inquirer prompt sequence, and then feeding it into a second Inquirer prompt sequence.

```js
inquirer
    .prompt(questions)
    .then((answers) => {
        const confirmPassword = (password) => 
                validateConfirmPassword(password, hash);
        inquirer
            .prompt({
                type: 'password',
                name: 'confirmPassword',
                message: 'Enter your password again:',
                validate: confirmPassword,
                mask: true
            });
    });
```

I don't think this is ideal and it causes a lot of nesting, but I wasn't sure how to feed the validation function into the second Inquirer prompt otherwise.

## Takeaways

---

I took the opportunity with Defend Your Code to try out third-party libraries and different programming styles than what I'm used to. I think using libraries can be a great way to enhance and expedite the development of your project, but they can also end up being another thing you have to learn and work around.