# Express.js - Unexpected Token Error in JSON Response

This repository demonstrates a common issue in Express.js applications: receiving an "Unexpected token" error when working with JSON responses.  This error arises from sending invalid JSON data or sending non-JSON data with the incorrect content type.

## Scenario

The `bug.js` file contains an Express.js server that might generate an unexpected token error depending on the response sent.  The solution is detailed in `bugSolution.js`.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.  Observe the error in the console.
4. Run `node bugSolution.js`. Observe the corrected behavior.

## Solution

The solution involves carefully validating the JSON data before sending it as a response and ensuring that the response's content type accurately reflects the data being sent.