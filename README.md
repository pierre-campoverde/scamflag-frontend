## Scamflag

Scam flag is a websites review repository where customers can share there experience or complain about bad practices so our voices can be listened.

## TODO LIST

### Pages

    [ ] Your reviews page.

    [ ] Search Site page.

    [ ] User account page.

### Components

    [ ] Review card.

    [ ]  Signup form

## Routes

### Search url page

This is the index route, here the user can search for a url in the database, the result shoud be a overall average comments and ratings.

    /write

This route is to make a review, it contains a form with following input data:

- URL (Text)
- Rating (Int)
- Comment (Text)[optional].

### Your reviews

    /users/:userId/reviews

This route lets user check his reviews, the system should check if there is a user logged in, in case there is not user the system should redirect him to the loggin page.
The features of this page are:

- Check all reviews
- Edit a review
- Delete a review

### Your account

This page contains user's profile actions and information.

    /users/:userId

### Log In

Lets existing user logs into his account. In case the there is an account logged in the system should redirect to user's profile page.

    /login

- Log in with email and password.
- Log in with email and facebook.

### Sign Up

Lets user create a an account.

    /signup

- Sign up with with google.
- Sign up with facebook.
