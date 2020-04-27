# Back-Proyect_Event

## Introduction

- This is an API for a technology event website.
We have made the distinction between users and organizers, giving the latter the possibility of creating events.

## SETUP

### Install & Update Dependencies

The first time you start the server you may want to make sure you have the dependencies installed, in the right versions. To do so, just go to the terminal and type:

```
$ npm install
```

### Install StandardJS Linter

[StandardJS](https://standardjs.com/) is a JavaScript style guide, linter, and formatter.

#### VSCode Extension

You may want to install [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)

> VSCODE `SETTINGS.JSON`:

```
  "javascript.validate.enable": false,
  "standard.enable": true,
  "standard.run": "onType",
  "standard.autoFixOnSave": false,
  "standard.usePackageJson": true
```

_Make sure you don't have duplicate rules!_

### Environment Variables

The next setup step is to create an `Environment Variable` file `.env` in this folder. We have provided a `.env.example` for you with a sample configuration for both **development** and **production** environments.

Make your own copy\_

```
$ cp .env.example .env
```

And customize the sample params to your needs

- mongoURL: "mongodb://localhost/",
- mongoDBName: 'reboot',
- apiKeys : "fakeapikey",
- port : 5000

Happy coding!

## MODELS

### USER MODEL

| KEY            | TYPE     | REQUIRED | VALIDATIONS  | EXTRA |
| -------------- | -------- | ---------|------------- |-------
| firstName      | String   | true     |              |
| lastName       | String   | true     |              |
| email          | String   | true     | regex(email  |
| password       | String   | true     | min(8)       |
| mobile         | String   | true     | min(6)       |
| social_tw      | String   | false    |              |
| social_fb      | String   | false    |              |
| social_it      | String   | false    |              |
| social_lk      | String   | false    |              |
| birthday       | Date     | false    |              |
| favorites      | ObjectId | false    |              | Events favorites
| role           | String   | true     |              | Enum: User, Organizer, default: User
| VATIN          | String   | true     | regex(dni)   |
| business_name  | String   | true     |              |
| organizer_type | String   | true     |              |
| address        | String   | true     |              |
| postal_code    | String   | true     |              |


<!-- ### ORGANIZADOR MODEL


| KEY            | TYPE   | REQUIRED | VALIDATIONS  | EXTRA |
| -------------- | ------ | ---------|------------- |-------
| firstName      | String | true     |              |
| lastName       | String | true     |              |
| VATIN          | String | true     |              |
| business_name  | String | true     |              |
| organizer_type | String | true     |              |
| address        | String | true     |              |
| postal_code    | String | true     |              |
| email          | String | true     | regex(email  |
| password       | String | true     | min(8)       |
| mobile         | String | true     | min(6)       |
| social_tw      | String | false    |              |
| social_fb      | String | false    |              |
| social_it      | String | false    |              |
| social_lk      | String | false    |              |
| favorites      | ObjectId | false  |              | Events favorites
| role           | String | true     |              | Enum: User, Organizer, default: User -->

### EVENT MODEL
| KEY                  | TYPE     | REQUIRED  |  EXTRA
| -------------------- | -------- | --------- |----------
| owner                | ObjectId |  false    |
| name                 | String   |  true     |
| place                | String   |  true     |
| date                 | Date     |  true     |
| price                | Number   |  true     |
| type                 | String   |  true     | enum: Web Development, UX, product_presentation
| small_description    | String   |  true     |
| large_description    | String   |  true     |
| cover_img            | String   |  true     |
| detail_img           | String   |  true     |


## API ROUTES

Please note that all routes in this API should be called with the `/api` prefix before the endpoint:

```
POST http://DOMAIN/api/auth/signup
```

### AUTHENTICATION ENDPOINTS
> TOKEN Required: NO

| METHOD | URL           | What does it do      |
| ------ | ------------- | -------------------- |
| POST   | `auth/signup` | Create a new account |
| POST   | `auth/login`  | Authenticates a user |

### USER COMMENTS
> TOKEN Required: YES

| METHOD | URL             | What does it do  | Extra
| ------ | --------------- | ---------------- | -----
| GET    | `/users`        | Get All Users    | SUPER ADMIN
| GET    | `/users/:id`    | Get User         |
| POST   | `/users`        | Create User      |
| PUT    | `/users/:id`    | Update a User    |
| DELETE | `/users/:id`    | Deletes User     |

### EVENT ENDPOINTS
> TOKEN Required: NO

| METHOD | URL          | What does it do | Filters
| ------ | -------------| ----------------|-------------------------|
| GET    | `events`     | Get All Events  | Types, Dates of from date to other date
| GET    | `events/:id` | Get One Event   |

> TOKEN Required: YES

| METHOD | URL             | What does it do                           | Filters                         |
| ------ | ----------------| ------------------------------------------| --------------------------------|
| GET    | `me/events`     | Get All Organizer or User-Favorites Events|                                 |
| POST   | `me/events`     | Create One Event Organizer                | Implement Function Check Role   |
| PUT    | `me/events/:id` | Update Event Organizer                    |                                 |
| DELETE | `me/events/:id` | Delete Event  Organizer/Favorites         |                                 |
