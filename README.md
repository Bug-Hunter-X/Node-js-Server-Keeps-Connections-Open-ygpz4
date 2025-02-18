# Node.js Server Keeps Connections Open

This repository demonstrates a common issue in Node.js servers where connections remain open after sending a response.  This can lead to high resource utilization and performance degradation.

## Bug

The `bug.js` file contains a simple HTTP server that doesn't properly close connections after sending a response.  This results in the server holding onto these connections, potentially leading to issues like high memory usage or connection timeouts.

## Solution

The `bugSolution.js` file provides a corrected version of the server, where the `res.end()` method gracefully closes the connection after sending the response.  This prevents unnecessary resource consumption and ensures efficient server operation.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js`.
4. Observe the behavior with tools such as `netstat` or similar system monitoring tools showing persistent connections.
5. Run `node bugSolution.js` and repeat step 4 to see the difference.