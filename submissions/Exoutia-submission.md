# Bugs report
This is a simple file to note the different vulnerability I found using the tool SecureStack.

## Exposures
Using the tool I found 7 vulnerabilities in 'Exposures' section. These vulnerabilities happen due to not following the best practices while making the web-application and before deploying it or due to human error.

According to the SecureStack these vulnerabilities can be divided into
different tiers from critical to low risk.

### High
- Hard Coded .npmrc authtoken
- HSTS is not enabled

### Medium
- detect
- CSP is not enabled

### low
- no security.txt file
- missing referrer policy
- missing security headers

lets see how those high risks issues can be dealt with.

- Hard  Coded .npmrc authtoken should be dealt with by removing it from the variable where it is stored and make a new .env file to store the variable which should be noted inside into a .gitignore file so that when the project is published the authtoken is not published.
- HSTS should be enabled for site to save normal users from being targeted by hackers if they try to acess the site using the http instead of https.
- Other risks should be also taken care using the different method according to industry standard.

## Code Vulnerabilities
These vulnerabilities are occured inside source code of web-application. Using the SecureStack tool I found 72 vulnerabilities inside the source code of which 13 are critical vulnerabilites and most of these occured due to using different third party packages while making the app.

My points on the these vulnerabilities.
- Third party packages are important and make life easier for every one so only use those who you are sure of that will not cause any back door and use the updated one with all the bug fixed.
- Other low and medium risk vulnerabilities can be fixed but are not critical to the survival to the app in wild.


## Conclusion
As above stated these vulnerabilities can be fixed by using and following industry and avoiding the human error. Most important thing is to right now fix those mistakes which will break the app or will help the malicious people to steal data or money from the site. Other low risk vulnerabilities can be fixed with time by updating the site frequently.
