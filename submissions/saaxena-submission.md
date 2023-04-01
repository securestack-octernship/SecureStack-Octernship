TASK SUBMISSION BY @saaxena

"Here are the bugs which i found in the cheapcryptobank application"

#"EXPOSED CREDENTIALS" -

  The password is exposed and hard-coded in App.js file 
  const password="v6faF+gC7Zs@?VyCqtEYQ%?S"

  SOLUTION - 
             
  To address the potential security vulnerability of storing the password in plaintext in the App component, we could consider using a secure storage mechanism such as a .env file or a vault to store sensitive data.

  we could use a .env file to store the password and reference it in the App component using the process.env object:
     
        // .env file
           PASSWORD=v6faF+gC7Zs@?VyCqtEYQ%?S

    // App component
        function App() {
        const password = process.env.PASSWORD
  // rest of the code
          }

#"OPEN API DUMPS USER-DATA" -

   We sent reqest to the website "https://reqres.in" and it returned with all the 6 users/page out of 2 pages present in the database. We choose the user email and used the password above mentioned to log-in and we can successfully login.

   API used in this webapp uses an open api which is not secure and dumps data to every request which is sent to fetch user-data.

   SOLUTION  - 
     
use of 'OAuth' which is more secure way to get the login details. Link of api must be stored in the .env file which must not be shared publically.

Implement Proper Authentication and Authorization: Implement authentication and authorization mechanisms to ensure that only authorized users can access the API. Implement access controls such as rate limiting, IP blocking, and user-agent blocking to prevent unauthorized access to the API.

Use Encryption: Encrypt sensitive data such as passwords and other user information during transmission and storage.

Secure our Server: Ensure that the server hosting the API is secure by implementing best practices such as firewalls, intrusion detection systems, and SSL encryption.

Validate Input: Validate all inputs to the API to prevent injection attacks and other forms of security vulnerabilities.

#"HSTS IS NOT ENABLED" -

to solve this issue in  the .htaccess file we have to write the following  code -
 
    // 
        header set strict-transport-security "max-age=31536000;includesubdomains;
        preload"

    //

#"CSP IS NOT ENABLED" -

     If CSP is not enabled on a website, it means that the website may be vulnerable to XSS attacks, as there is no policy in place to restrict the sources of content that can be loaded on the page.
     to solve this problem we can use the following code in our index.html file
       
        //
           <meta http-equiv="content-security-policy" content ="default-src 'self'">

#"REDOS" -

      In the file ```SignInForm.tsx``` a regex expression is used for validating emails which can cause a ReDoS attack.

#"MISSING REFER POLICY" -

There are various ways to solve this -
// In a response header: Referrer-Policy: no-referrer | same-origin | origin | strict-origin | no-origin-when-downgrading In a META tag In an element attribute or, //
