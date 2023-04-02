# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

### Task submission by Jatin
I appreciate the SecureStack platform for assisting me in identifying numerous vulnerabilities present in the CheapCryptoBank app. The insights it provided were simply remarkable. I came across several security bugs, ranging from critical to high severity, that I wouldn't have detected otherwise. The application is incredibly powerful and easy to use. It not only helped me to resolve the security issues but also enhanced my skills in security testing. <br/>
Here are the issues I found in the "Find some bugs!" GitHub Classroom:

## 1. Hardcoded Password
Use of Hardcoded Password in your code.Storing credentials in a secure location, such as a configuration file, a database, or an environment variable, is advisable. This approach can increase the difficulty for attackers to obtain the credentials since they would require access to both the code and the secure location. <br/>
in `src/App.js` in 6:7 <br/>
`const password="v6faF+gC7Zs@?VyCqtEYQ%?S"` <br/>
Create `.env` file in root directory and add following code inside it. Add this to a `.gitignore`.<br/>
```
PASSWORD=v6faF+gC7Zs@?VyCqtEYQ%?S
```
in `App.js` replace make `const password="v6faF+gC7Zs@?VyCqtEYQ%?S"` with `const password = process.env.PASSWORD` <br/>

## 2. Hardcoded .npmrc AuthToken
When using the npm package manager, the .npmrc file plays a crucial role in configuring various settings, such as authentication tokens. However, including an authentication token in this file by hardcoding can expose a significant security risk. This is because the token can be easily accessed by anyone with access to the project's code. <br/>
Best Solution is create a `.gitignore` file and add `.npmrc` to it. <br/>
![image](https://user-images.githubusercontent.com/94428262/229102059-958f9f08-c4c3-43f8-a56c-4a850d556144.png)


## 3. HSTS in not enabled
HTTP Strict Transport Security (HSTS) is a crucial security mechanism that safeguards against various security vulnerabilities, including man-in-the-middle attacks. By enabling HSTS, the website's server sends a header to the user's browser, instructing it to use HTTPS when communicating with the server.

If a website does not have HSTS enabled, it becomes vulnerable to attacks that exploit non-secure HTTP connections, creating opportunities for attackers to intercept, modify or steal user credentials and perform other malicious activities.

Therefore, it is highly recommended to enable HSTS as a best practice for website security. Enabling HSTS involves adding a response header to the website's HTTP responses, instructing the user's browser to always use HTTPS for future requests. This is the most effective mitigation technique to ensure that all communication between the user and the website is encrypted and secure. <br/>
&nbsp;

One approach to enable HSTS on a website is to include a response header in the website's HTTP responses. 
```
header("Strict-Transport-Security: max-age=31536000; includeSubDomains; preload");
```

## 4. CSP not enabled
A website without Content Security Policy (CSP) is susceptible to cross-site scripting (XSS) attacks, given the absence of restrictions on the content sources that can be loaded onto the page.

In order to prevent such XSS attacks, implementing CSP is highly recommended as a security best practice. With CSP enabled on the website, only trusted sources of content can be loaded and executed, thus reducing the risk of XSS attacks. <br/>
Add following code in html file <br/>
```
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
```

## 5. Referrer policy
The Referrer-Policy HTTP header provides control over the amount of referrer information sent with a request through the Referer header. In addition to setting the policy through the HTTP header, it is also possible to configure this setting in HTML. By managing this policy, website developers can ensure the privacy of their users and restrict the exposure of sensitive information to potentially malicious third parties. <br/>
Add following code in html file <br/>
```
<meta name="Referrer-Policy" value="no-referrer | same-origin"/>
```

## 6. denial-of-service attack
A Denial-of-Service (DoS) attack is a cyber attack that involves a malicious actor attempting to disrupt the normal functioning of a computer or device, rendering it unavailable to its intended users. The primary technique used in DoS attacks involves flooding the targeted device with excessive requests or traffic, causing it to become overwhelmed and unable to handle normal user requests, resulting in the denial-of-service to legitimate users. This type of attack can lead to significant damage, financial loss, and reputational harm for organizations and businesses. <br/>
&nbsp;

<b>Solution</b> is to enhance the security of web applications, utilizing a Web Application Firewall (WAF) is considered a best practice. WAFs offer protection against a wide range of attacks, including cross-site request forgery and SQL injection, which aim to exploit vulnerabilities in the application itself. Additionally, these attacks can be unique in nature, and thus a customized approach to mitigating them is necessary. WAFs offer the ability to create tailored mitigations against malicious requests that may attempt to bypass security measures by disguising themselves as legitimate traffic or originating from unexpected geographies or IPs. <br/>

- ### i) via tmpl
    The main functionality of the tmpl package has Regular Expression Denial of Service (ReDoS) vulnerability in its affected versions. This can be exploited by attackers to launch DoS attacks by sending malicious inputs that cause the application to get stuck in an infinite loop while processing the regular expressions. <br/>
    <b>Solution</b> is <br/>
    ```
    npm i tmpl@1.0.5
    ```

- ### ii) via ws
    The WebSocket-Extensions library, a generic extension manager for WebSocket connections, is susceptible to Regular Expression Denial of Service (ReDoS) in affected versions. The issue lies within the extension parser's EXT_LIST variable, which may cause a quadratic time complexity when parsing a literal backslash () followed by any character, leading to excessive backtracking. A malicious actor could exploit this vulnerability by providing a malicious payload with the Sec-WebSocket-Extensions header, potentially causing a Regex Denial of Service (ReDoS) on a single-threaded server.
    <b>Solution</b> is 
    ```
    npm i ws@7.4.6
    ```

- ### iii) browserslist
    The package 'browserslist' is susceptible to Regular Expression Denial of Service (ReDoS) attacks when parsing queries. Malicious input with a pattern that takes long to process can cause the program to hang or crash, leading to a denial-of-service condition. <br/>
    <b>Solution</b> is
    ```
    npm i browserslist@4.16.5
    ```

## 7. Exposed Source Map
To view the complete source map of a React application, one can access the debugger tab in the inspect section of any browser. The source map provides an overview of the entire codebase, making it easier to navigate through the different files and components of the application. <br/>
To modify the `build` command in the `package.json` file, you can make the following update:
```
"build": "GENERATE_SOURCEMAP=false react-scripts build"
```
This change disables the source map generation during the build process of a React application. <br/>
&nbsp;

## 8. API without authentication
After sending a request to the website  <br/>
```
https://reqres.in
```  
we received data on all the 6 users present in the database, which was spread across 2 pages. <br/> 
I tried  along with `michael.lawson@reqres.in` the provided password to log in successfully.

This indicates that the web application's API employs an open API that lacks proper security measures and provides access to data to every request made to retrieve user data. This vulnerability may pose a significant risk to the confidentiality and privacy of user data, which highlights the need for better security measures in place to prevent unauthorized access and data breaches. <br/>
&nbsp;

<b>Solution</b> is implement an authorization system with token and jwt.

## 9. Prototype Pollution
Prototype Pollution is a security vulnerability that affects the JavaScript language. It occurs when an attacker is able to inject properties into existing JavaScript object prototypes, including those with magical attributes such as `_proto_`, `_constructor_`, and `_prototype_`. Once the attacker manipulates these attributes, they can overwrite or pollute the object prototype of the base object by injecting other values. This can lead to a variety of attacks, such as triggering JavaScript exceptions or manipulating the application source code to execute the attacker's code remotely. Since Prototype Pollution can cause serious harm to an application, it is important for developers to be aware of this vulnerability and take necessary steps to mitigate it. <br/>

- ### i) Minimist
    Minimist is a lightweight library that allows developers to easily parse command-line arguments in their Node.js applications.

    One way that an attacker can exploit prototype pollution in minimist is by injecting properties into existing construct prototypes using the setKey function.  <br/>
    Run 
    ```
    npx npm-force-resolutions
    ``` 
    and add following in `package-lock.json` to force the installation of a specific version of a transitive dependency.
    ```
    "resolutions": {
        "minimist": "1.2.6"
    }
    ```
- ### ii) via json-schema
    JSON Schema is a vocabulary that allows users to annotate and validate JSON documents. It defines the data types and the structure of a JSON document, along with the rules for the data in the document. However, JSON Schema is vulnerable to a type of attack called Prototype Pollution. <br/>

    Prototype Pollution is a vulnerability that allows attackers to modify the prototype of an object and inject malicious code. In JSON Schema, an attacker can use Prototype Pollution to bypass the validation checks and inject <br/>
    <b> Solution</b> is run 
    ```
    npm i json-schema@0.4.0
    ```
&nbsp;

- ### iii) merge-deep
    Applications using merge-deep library for Node.js are at risk of prototype pollution attacks. This is because the library can be manipulated to overwrite properties of Object.prototype or add new properties to it, which are inherited by every object in the program. <br/>
    <b>Solution</b> is to use version > 0.3.0.
    ```
    npm upgrade merge-deep
    ```

- ### iv) property-expr
    Package property-expr before 2.0.3 are vulnerable to Prototype Pollution via the setter function. <br/>
    <b>Solution</b>
    ```
    npm i property-expr@2.0.3
    ```

- ### v) Async
    The `mapValues()` method in `Async` versions before 2.6.4 and 3.x before 3.2.2 is vulnerable to prototype pollution via `lib/internal/iterator.js createObjectIterator`. This can be exploited by a malicious user to obtain elevated privileges.
    <b>Solution is </b>
    ```
    npm  i saync@3.2.2
    ```

- ### vi) via qs
    qs is vulnerable to a type of attack that can cause a Node process to hang. This vulnerability is caused by the ability to use an proto key. An attacker can inject the attack payload into the query string of the URL used to visit the application, such as a[proto]=b&a[proto]&a[length]=100000000. This can result in a denial-of-service attack on the application. It's important to note that this vulnerability can be exploited remotely by an unauthenticated attacker without any need for authentication. <br/>
    <b>Solution</b> is <br/>
    ```
    npm i qs@6.10.3
    ```

- ### vii) via y18n
    The y18n library, which is used by yargs for internationalization, is vulnerable to Prototype Pollution due to inadequate sanitization in affected versions. This can allow an attacker to inject arbitrary properties into the Object prototype, which can lead to further attacks. It is recommended to update to the latest version of yargs to mitigate this vulnerability.
    <b> Solution</b> is
    ```
    npm i y18n@5.0.5
    ```

- ### viii) via node-forge
    Node-forge is a package containing JavaScript implementations of network transports, cryptography, ciphers, PKI, message digests, and utilities. The package is vulnerable to Prototype Pollution via the forge.debug API, if executed with untrusted input. An attacker can exploit this vulnerability to manipulate or add properties to the prototype object, affecting the behavior of all instances that inherit from it, leading to arbitrary code execution or a crash of the Node.js application. <br/>
    <b>Solution</b> is 
    ```
    npm i node-forge@1.3.0
    ```


## 10.OS command injection 
OS command injection, also referred to as shell injection, is a serious vulnerability that can result in complete compromise of a web application and its associated data. This vulnerability allows an attacker to execute unauthorized operating system (OS) commands on the server running the application. As a result, the attacker can gain unauthorized access to sensitive information, modify data, or take control of the entire application. <br/>



- ### i) via React-dev-utils
    <b>Solution</b> is to use `react-dev-utils` version > 11.0.4 <br/>
    ```
    npm upgrade react-dev-utils
    ```

- ### ii) via Shell-quote
    Injecting unescaped shell metacharacters through a regex designed to support Windows drive letters. This vulnerability arises because the Windows drive letter regex character class is {A-z] instead of the correct {A-Za-z], and there are several shell metacharacters that exist in the space between capital letter Z and lowercase letter a, such as the backtick character. If the output of this package is passed to a real shell as a quoted argument to a command with exec(), an attacker can inject arbitrary commands, potentially compromising the entire application and all of its data. It is important to fix vulnerabilities like this in order to protect against exploitation by malicious actors. <br/>
    <b>Solution</b> use `shell-quote` version > 1.7.3
    ```
    npm upgrade shell-quote
    ```

## 11. ansi-html
he ansi-html library is a sophisticated tool that transforms chalked (ANSI) text to HTML. However, certain versions of this package can be susceptible to Regular Expression Denial of Service (ReDoS) attacks. If a malevolent string is supplied, the processing of the input could take an inordinately long time. <br/>

## 12. Follow-redirects
When a website with the HTTPS protocol redirects to the HTTP protocol on the same hostname, it may lead to the leakage of the Authorization header. This vulnerability allows an attacker, who can monitor the network traffic or perform a MITM attack, to intercept the Authorization header. The insecure HTTP protocol does not validate the hostname that the request is being sent to, making it easier for the attacker to exploit the vulnerability. The attacker does not need to have control over the website, but only the capability to intercept network traffic.<br/>
<b>Solution</b> is to use latest version.
```
npm i follow-redirects@1.14.8
```

## 13. jsdom
The affected versions of jsdom, a JavaScript implementation of many web standards, are vulnerable to Improper Access Control. JSDom permits the loading of local resources, allowing local files to be manipulated by a malicious web page if script execution is enabled. <br/>
<b>Solution is </b>
```
npm i jsdom@16.4.2
```

## 14. SSRF
SSRF, or Server-Side Request Forgery, is an attack that enables an attacker to send arbitrary requests from a server. Through SSRF, attackers can pivot throughout corporate networks, exploit internal systems that are otherwise inaccessible, or extract secrets by querying metadata endpoints. The severity of an SSRF attack ranges from informational to critical, based on factors such as the response's visibility and the assets that can be accessed. The severity of the defect can be determined based on these factors. <br/>

<b>Solution</b> <br/>
One effective approach to mitigating Server-Side Request Forgery (SSRF) attacks is to implement a firewall policy that specifies which hosts an application is permitted to connect to. This can be accomplished in a number of ways, such as deploying a firewall directly on the host or within the network infrastructure near the application servers.

By defining a list of trusted hosts, the firewall can block any outgoing requests that attempt to access non-permitted hosts. This helps prevent attackers from exploiting SSRF vulnerabilities to pivot through corporate networks, query metadata endpoints for sensitive information, or exploit otherwise unreachable internal systems. It is important to keep the firewall rules updated and to limit the s>cope of access to only necessary hosts in order to ensure maximum security. <br/>

### References
- Cross site scripting reference: https://owasp.org/www-community/attacks/xss/
- Vm2 CVE-2021-23555: https://www.cvedetails.com/cve/CVE-2021-23555/ 
- HTTP Strict-Transport-Security(HSTS) : https://owasp.org/www-project-secure-headers/#http-strict-transport-security-hsts
- CSP : https://content-security-policy.com/
- Referrer Policy: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy 
- denial-of-service attack: https://aws.amazon.com/shield/ddos-attack-protection/
- tmpl: https://security.snyk.io/vuln/SNYK-JS-TMPL-1583443
- ws: https://security.snyk.io/vuln/SNYK-JS-WEBSOCKETEXTENSIONS-570623
- browserslist: https://security.snyk.io/vuln/SNYK-JS-BROWSERSLIST-1090194
- Exposed Source Map: https://bugcrowd.com/disclosures/8cc82a04-b1b2-452a-9e68-b332e4fc7794/source-code-leakage-due-to-exposed-sourcemap
- API authentication: https://blog.logrocket.com/secure-rest-api-jwt-authentication/
- Prototype Pollution in Minimist: https://lightrun.com/answers/vuejs-vue-cli-upgrade-dependency-minimist-to-avoid-prototype-pollution-security-risk
- Prototype Pollution in json-schema: https://github.com/advisories/GHSA-896r-f27r-55mw
- Prototype Pollution in merge-deep: https://github.com/advisories/GHSA-r6rj-9ch6-g264
- Prototype Pollution in property-expr: https://github.com/advisories/GHSA-6fw4-hr69-g3rv
- Prototype Pollution in Async: https://nvd.nist.gov/vuln/detail/CVE-2021-43138
- Prototype Pollution in qs: https://github.com/advisories/GHSA-hrpp-h998-j3pp
- Prototype Pollution in y18n: https://github.com/advisories/GHSA-c4w7-xm78-47vh
- Prototype Pollution in node-forge: https://security.snyk.io/vuln/SNYK-JS-NODEFORGE-2331908
- Command injection via React-dev-utils: https://portswigger.net/web-security/os-command-injection
- Command injection via shell-quote: https://nvd.nist.gov/vuln/detail/CVE-2021-42740
- ansi-html: https://security.snyk.io/vuln/SNYK-JS-ANSIHTML-1296849
- jsdom: https://security.snyk.io/vuln/SNYK-JS-JSDOM-1075447
- SSRF: https://learn.snyk.io/lessons/ssrf-server-side-request-forgery/javascript/
