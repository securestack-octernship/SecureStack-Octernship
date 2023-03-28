# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

### Task submission by kartikkc

Here are the issues I found in the "Find some bugs!" GitHub Classroom:

##### 1. Exposed Credentials
    
The password is exposed and hard-coded in App.js file.

```
         password="v6faF+gC7Zs@?VyCqtEYQ%?S"
```

###### Solution: 
The Credentials must not be exposed or hard-coded.  

##### 2. Open API Dumps user-data

We sent reqest to the  website

```link
        https://reqres.in
```

and it returned with all the 6 users/page out of 2 pages present in the database. We choose the user to Tracey and pick her email 
```email
        tracey.ramos@reqres.in
``` 

and the password above mentioned to log-in and we can successfully login.

From this,
We can say that the api used in this webapp uses an open api which is not secure and dumps data to every request which is sent to fetch user-data.

###### Solution:
 More Secure api can be used to fetch the user data or OAuth which is more secure way to get the login details. Link of api must be stored in the .env file which must not be shared publically.


##### 4. SSRI
ssri is a Standard Subresource Integrity library -- parses, serializes, generates, and verifies integrity metadata according to the SRI spec. Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS). Malicious SRIs could take an extremely long time to process, leading to denial of service.

##### 5. HSTS header missing

This will allow attackers to access the website over the HTTP which can allow them to open a variety of attacks like: MITM(man-in-the-middle) attack, Cookie hijacking and etc.



##### 6. Request
Request is a simplified http request client. Affected versions of this package are vulnerable to Server-side Request Forgery (SSRF) due to insufficient checks in the lib/redirect.js file by allowing insecure redirects in the default configuration, via an attacker-controller server that does a cross-protocol redirect (HTTP to HTTPS, or HTTPS to HTTP).


### References

- Server Side Request forgery: https://owasp.org/www-community/attacks/Server_Side_Request_Forgery
- ReDOS reference: https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS
- HSTS Header : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
