# API interaction and API docs
The API documentation for the backend can be found (after it's been spun up) [here](http://localhost:8080/swagger/index.html),
i.e. at the route `/swagger/index.html`.

Some terminology first:
- *host*: The URL or hostname of the server to connect to
- *path(name)* or *route*: what comes after the host and port (i.e. which describes what resource to get)
- *param* (short for *URL parameter*): A placeholder in the *path*, such as `/subjects/get/{id}`.
This must be replaced when requesting the resource for it to resolve properly and it is used to have a common route for multiple related resources.
- *query*: used typically to search for things (thus the name) and to specify extra details in a bodyless request. Example: `<rest of url>/subjects/search?q=test&subtopic=false`
- *http method*: The "type" of request. Can be `GET`, `DELETE` (both bodyless), `PUT`, `POST` or `PATCH` in our case.
While in theory you can achieve the same result by just using `POST` requests, they have semantic differences.
If you are interested, you can read more [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods),
but all you need to know for now is that you need to use the one specified in the docs.


## Making calls
Make sure to always use the `request` module from `@janishutz/oidc-login-sdk-browser` such that my SDK can handle unauthorization gracefully.
It also makes sure that any changes to the request process that is made on the backend is addressed in the frontend without requiring changes to the request code.

Making a call is VERY easy. Say you want to retrieve the subject with a given ID from the API, the following code is all you need:
```typescript
import {
    request
} from '@janishutz/oidc-login-sdk-browser';

export const getSubject = async ( id: string ) => {
    return await ( await request.get( `/subjects/get/${ id }` ) ).json();
};
```
Of note, the URL you need to enter when using the `request` module is just the `path`.
The above example also shows how to handle a param.
