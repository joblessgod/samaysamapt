# Samaysamapt

A simple Node.js module to get the current date and time in a formatted string.

## Installation

You can install this package using npm:

```sh
npm install samaysamapt
```

## Usage

Here is an example of how to use the `samaysamapt` module:

```javascript
const samaysamapt = require('samaysamapt');

const formattedDateTime = samaysamapt();
console.log(formattedDateTime); // Outputs: "DD/MM/YYYY HH:MM:SS AM/PM"
```

## Functionality

The module returns the current date and time in the following format:

```
DD/MM/YYYY HH:MM:SS AM/PM
```

For example, the output could be:

```
25/12/2023 10:30:45 AM
```

## License

This project is licensed under the MIT License.
