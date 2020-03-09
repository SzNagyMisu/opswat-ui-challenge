# OPSWAT ui challenge

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm rum serve
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

## Routes

### #/register

> Creates user

* validates required fields and e-mail format on front end
* displays back end validation errors

### #/login

> Logs in

* validates required fields and e-mail format on front end
* displays invalid login data error

### #/

> Landing page

* no logic

### #/profile

> Possibility for user to edit their profile

* validates required fields and e-mail format on front end
* no backend validation errors
  * all validation can be done on front end
  * `username` and `email` uniqueness not validated on back end...

### #/delete-user

> Possibility to delete user by email

* had some difficulties implementing this one
  * logged in user cannot delete their profile
    * (back end validation error displayed)
  * we have no information about other users (no user list endpoint)
* finally decided to implement a input field with e-mail format and required validation
  * user can enter random e-mail addresses to destroy
  * no hint from the back end if user with given e-mail ever existed

### #/articles

> Articles list

* shown in a table
* link to new, show, edit pages
* button to destroy action
  * destroy after confirmation

### #/articles/new

> Create article

* no validation as back end does not require any
* after create redirection to list page with new article

### #/articles/:slug/edit

> Edit selected article

* no validation as back end does not require any
* after update redirection to list page with updated article

### #/articles/:slug

> Show selected article

* show article in greater detail
* tried to show author but `<backend_url>/articles/:slug` endpoint does not provide any hint about author

### logout

> Logs out

* button in the main layout
* destroys session and redirects to login page
* when requesting a url where logged in user is required, redirection to login page
