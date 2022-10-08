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

### Make a review

    /write

This route is to make a review, it contains a form with following input data:

- URL (Text)
- Rating (Int)
- Comment (Text)[optional].

### Your reviews

    /users/:userId/reviews

This router lets user check his reviews, the system should check if there is a user logged in, in case there is not user the system should redirect him to the loggin page.
