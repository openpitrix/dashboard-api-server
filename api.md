## APIs

> The endpoint's `version prefix` can be omitted, because we use a rewrite file.
> So `/v1/apps` is the same as `/apps`

### /apps

```
// retrive all apps
// when filter, you can append query string: /apps?category=business
GET /apps

// create an app
// when used in code, just put body params in a JS object
// eg: `request.post('/v1/apps', {name: 'k8s', category: 'software'})`
POST /apps

// remove an app
// body params is required.
// code like this: `request.delete('/v1/apps', {app_id: 'app-xxx'})`
DELETE /apps

// update an app
// body params is required.
// example code: `request.patch('/v1/apps', {app_id: 'app-xxx', name: 'docker'})`
PATCH
```
