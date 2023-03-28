# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

### Task submission by MR-DHRUV

Here are the issues I found in the "Find some bugs!" GitHub Classroom:

1.  **Exposed Credientials to login to the application**

    On carefully inspecting the source code in of the application, in the file   ```app.js``` the password is exposed.
    
    ```javascript
            const password="v6faF+gC7Zs@?VyCqtEYQ%?S"
    ```         

    Now we are left with email feild. On inspecting the API `https://reqres.in` used for auth purpose, I found out that a GET request to url : ```/api/users?page=2``` reveals all the users with their information.
    
    </n>
    
    On using email : ```lindsay.ferguson@reqres.in``` and password as above mentioned, I was able to log into the application.
    
    ![Screenshot 2023-03-28 233430](https://user-images.githubusercontent.com/96336775/228333817-af7fcdb3-8da6-4bd3-b9f8-85e34975ec75.png)

    </n>
    
    Further ```.npmrc``` auth token is also exposed.

    #### Solution 
    1. All sensitive information must be kept in .env file.
    2. The API `https://reqres.in/` is unsecure and leaks user information publically. Using a secure auth API, or Oauth methods will eliminate the problem.  

<br>

2. **Source map is exposed**

    In the inspect section of any browser, one can go to the debugger tab to view the complete source map of the react app.

    #### Solution 
    1. In the ```package.json``` file update the ```build command``` as follows
    ```javascript
        "build": "GENERATE_SOURCEMAP=false react-scripts build"
    ```
    <br>

3. **ReDoS**

    In the file ```SignInForm.tsx``` a regex expression is used for validating emails which can cause a ReDoS attack.
    
    <br>

4. **HSTS header is absent**

    Absence of this header allows the site to be accessed in the ```http``` mode making it unsecure.

### References
- ReDos : https://learn.snyk.io/lessons/redos/javascript/
- HSTS : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security

