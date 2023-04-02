# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

### Task submission by Generousdev

Here are the issues I found in the Cheapcryptobank using SecureStack,
other vulnerabilities are dependency based vulnurability

| NO  | ISSUE                      | SEVERITY |
| --- | -------------------------- | -------- |
| 1   | hardcoded .npmrc authtoken | High     |
| 2   | hsts is not enabled        | High     |
| 3   | csp is not enabled         | Medium   |
| 4   | No security.txt file       | Low      |
| 5   | missing referrer policy    | Low      |
| 6   | missing security headers   | Low      |

Solutions for listed above issues

1.  hardcoded .npmrc authtoken

            1. More secure alternative is to use environment variables to store the token.
            2. Create a .env file in the root directory of your project.
            3. Add the following line to the .env file, replacing your_auth_token_here with your actual authentication token:
            REACT_APP_NPM_TOKEN=your_auth_token_here
            4. In the code, you can access the token using process.env.REACT_APP_NPM_TOKEN
            5. Add the .env file to your .gitignore file to avoid committing your authentication token to your repository.

2.  hsts is not enabled
    To enable HTTP Strict Transport Security (HSTS) for your React application, you can add the appropriate HTTP response headers to your server's configuration. Here are the general steps:

            1. Determine the length of time for which you want to enforce HTTPS. The HSTS policy will remain in effect for the specified time period, even if the user attempts to access the site over HTTP.

            2. Add the Strict-Transport-Security header to your server's HTTP response with the value of your desired HSTS policy. For example, if you want to enforce HTTPS for one year, you can include the following header:

            Strict-Transport-Security: max-age=31536000

            4. Test your HSTS policy to ensure that it is working correctly. You can use the Qualys SSL Labs Server Test (https://www.ssllabs.com/ssltest/) to check your policy.

            5. Adjust your HSTS policy as needed, taking into account any considerations such as domain migration or subdomain handling.

            Once HSTS is enabled, any future requests to your application will be automatically redirected to HTTPS, even if the user types in "http://" instead of "https://". This provides an additional layer of protection against man-in-the-middle attacks and other security threats.

            Enabling HSTS is a recommended best practice for securing your React application, and can significantly enhance its security.

3.  csp is not enabled

            To enable Content Security Policy (CSP) for your React application, you can add the appropriate HTTP response headers to your server's configuration. Here are the general steps:

            1. Determine which CSP directives you need to include. You can use a tool like the Content Security Policy Builder (https://content-security-policy.com/) to generate a CSP policy that fits your needs.

            2. Add the Content-Security-Policy header to your server's HTTP response with the value of your desired CSP policy. For example, if you want to set the default-src directive to 'self', you can include the following header:

            Content-Security-Policy: default-src 'self'

            3. Test your CSP policy to ensure that it is working correctly. You can use the CSP Evaluator (https://csp-evaluator.withgoogle.com/) to check your policy.

            4. Adjust your CSP policy as needed to allow all necessary resources to load while still enforcing a strong security policy.

            Keep in mind that implementing CSP may require changes to your application's code, particularly if it relies on inline scripts or styles. You may need to use alternative techniques such as using external files or using a nonce or hash to allow specific inline content to load.

            Enabling CSP can significantly enhance the security of your React application by reducing the risk of cross-site scripting (XSS) attacks.

4.  No security.txt file

            A security.txt file is a simple text file that provides information about your organization's security policies and contact information for security researchers who discover vulnerabilities in your application.

            Here are some steps you can take to create a security.txt file for your React application:

            1. Create a new text file named "security.txt" in the root directory of your application.

            2. Define your security policies and contact information in the file using a standardized format. You can find more information about the format and content of security.txt files in the securitytxt.org specification (https://securitytxt.org/).

            3. Test your security.txt file to ensure that it is working correctly. You can use the Security.txt Validator (https://securitytxt.org/#validator) to check your file.

            4. Publish your security.txt file to your web server, and include a link to it in your website's footer or security policy page.

            By creating a security.txt file, you can provide valuable information to security researchers who discover vulnerabilities in your React application, and demonstrate your organization's commitment to security best practices.

5.  Missing referrer policy

            The Referrer-Policy header helps to control how much information is included in the HTTP referrer header, which is sent by a user's browser when they navigate from one page to another.

            Here are some steps you can take to add a Referrer-Policy header to your server's HTTP responses:

            1. Determine which referrer policy you want to use. The default behavior of browsers is to send the full URL of the page the user is navigating from in the referrer header. However, you may want to modify this behavior to protect sensitive information. For example, you could set the referrer policy to "strict-origin-when-cross-origin" to send the full URL only when the user navigates within your site, but to only send the origin of the referring page when the user navigates to an external site.

            2. Add the Referrer-Policy header to your server's HTTP response with the value of your desired referrer policy. For example, if you want to use the "strict-origin-when-cross-origin" policy, you can include the following header:

            Referrer-Policy: strict-origin-when-cross-origin

            3. Test your Referrer-Policy header to ensure that it is working correctly. You can use the Referrer-Policy Evaluator (https://referrer-policy.com/) to check your policy.

            4. Adjust your Referrer-Policy header as needed, taking into account any considerations such as tracking or third-party integrations.

            By adding a Referrer-Policy header to your server's HTTP responses, you can help to protect your users' privacy and improve the security of your React application.

6.  Missing security headers

            If your React application is missing important security headers, you can add them to your server's configuration to improve the security of your application. Here are some common security headers that you may want to consider adding:

            1. X-Content-Type-Options: This header is used to prevent browsers from attempting to MIME-sniff the content type of a response, which can be used to protect against certain types of attacks such as XSS.

            To add this header, include the following line in your server's HTTP response:

            X-Content-Type-Options: nosniff

            2. X-XSS-Protection: This header is used to enable the browser's built-in XSS protection, which can help to prevent certain types of cross-site scripting (XSS) attacks.

            To add this header, include the following line in your server's HTTP response:

            X-XSS-Protection: 1; mode=block

            3. Content-Security-Policy: This header is used to define a whitelist of content sources that a browser can load for a particular page, which can be used to protect against a wide range of attacks including XSS, clickjacking, and data injection attacks.

            To add this header, include the following line in your server's HTTP response:

            Content-Security-Policy: default-src 'self'

            4. Strict-Transport-Security: This header is used to enforce the use of HTTPS for a particular domain, which can help to prevent man-in-the-middle (MITM) attacks and other security threats.

            To add this header, include the following line in your server's HTTP response:

            Strict-Transport-Security: max-age=31536000

            5. Referrer-Policy: This header is used to control how much information is included in the HTTP referrer header, which can help to protect user privacy.

            To add this header, include the following line in your server's HTTP response:

            Referrer-Policy: strict-origin-when-cross-origin

            By adding these security headers to your server's HTTP responses, you can help to improve the security of your React application and protect your users from a wide range of security threats.


### References
- Cross site scripting reference: https://owasp.org/www-community/attacks/xss/
- Vm2 CVE-2021-23555: https://www.cvedetails.com/cve/CVE-2021-23555/ 
