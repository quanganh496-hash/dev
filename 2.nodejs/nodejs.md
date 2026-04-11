# 1. So what is Node.js?

- Node.js is an open source JavaScript runtime environment that allow you to execute JavaScript code outside,the web browser.

- JavaScript is a programming language that was primarily built to be run on a browser such as Chrome,Firefox, Safari, etc..

- So as JavaScript grew grew very popular, there was a demand for JavaScript to be used to build server,side applications.

# 2. What node is used for.

- Building web server
- Real time applications
- RESTfulAPIs
- Internet of things
- E.T.C

# 3. What are the advantages of using Node.js?

- High performace and speed
- Non - blocking, Event - driven I/O
- Scalability
- E.T.C

# 4. The architectural design

![alt text](/2.nodejs/image/image-2.png)

- The client is basically anything that is making requests to our NodeJS application.
- The client can be the browser, it can be other applications that are going to be calling our service.


# 5. the broader architectural design.

![alt text](/2.nodejs/image/image-1.png)

- Non-blocking requests are short lived requests like charts or things that are not data intensive

- So for non-blocking operations, those are very fast.And it's returned back immediately without the user having to wait for the next user.

- But for heavy data intensive applications, the requests are channeled into the blocking operations pool into a thread.
- And those operations are executed before the next operation commenced. 