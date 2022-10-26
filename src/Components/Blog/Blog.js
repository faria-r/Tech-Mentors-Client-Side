import { Accordion } from "flowbite-react";
import React from "react";

const Blog = () => {
  return (
    <div className="container w-3/4 mx-auto mt-16 rounded drop-shadow-xl pb-64">
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>what is Cors?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Why I'm using firebase? What other options do I have to implement
            authentication?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            With Firebase, we can connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others.we also can implement user log in authorization using email and password.Thats why we use firebase, mainly for authentication purpose. <br />
            there are different ways to implement authentication without firebase: they're : <ul className="text-amber-500 text-xl font-semibold">
                <li>Okta</li>
                <li>Auth 0</li>
                <li>Amazon cognito</li>
                <li>keyCloak</li>
                <li>Frontegg</li>
                <li>OneLogin</li>
            </ul>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How does the private route work?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Private Routes in react Works Like a Protector For any kind of sensitive information. In react private Routes takes a component as a child which have to be protected.and as user condition it will give the permission to access the routes if the user is authorized or logged in and it will not allow user to access the routes if the user is not logged in or authorized by any means.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is Node? How does Node work?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Node.js is a cross-platform open-source runtime environment for running JavaScript code outside a browser. <br />
            How it work: <br />
            Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
            Node.js basically works on two concept:
            <ul className="text-amber-500 text-xl font-semibold">
                <li> Asynchronous</li>
                <li> Non-blocking I/O</li>
            </ul>
           
            
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blog;
