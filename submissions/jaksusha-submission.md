### Task submission by jakusha

![](https://tenor.com/bjGVv.gif)

Here are the issues I found in the "Find some bugs!" GitHub Classroom:

1. App secrets and tokens exposed in codebase and commited to github which makes it vulnerable to hackers.
2. Username and password credentials provied are invalid.
3. Cross-site scripting.

### Suggested Solutions To Issues

1. Tokens and secrets should be stored in a .env file and added to a .gitignore file.
2. Enabling CSP can prevent cross-site scripting attacks and essential secuirity headers and referrer policy.

## References

-   Cross-site scripting : https://owasp.org/www-community/attacks/xss/
