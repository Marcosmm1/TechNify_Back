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

<<<<<<< HEAD
- mongoURL: "mongodb://localhost/",
- mongoDBName: 'reboot',
- apiKeys : "fakeapikey",
- port : 5000
=======
- mongoURL: "mongodb://localhost:3000/api",
- mongoDBName: 'EventIt',
- apiKeys : "fakeapikey",
- port : 3000
Happy coding!

## MODELS

### USER MODEL

| KEY            | TYPE     | REQUIRED | VALIDATIONS  | EXTRA |
| -------------- | -------- | ---------|------------- |-------
| first_name     | String   | true     |              |
| last_name      | String   | true     |              |
| email          | String   | true     | regex(email  |
| password       | String   | true     | min(8)       |
| mobile         | String   | true     | min(6)       |
| social_tw      | String   | false    |              |
| social_fb      | String   | false    |              |
| social_it      | String   | false    |              |
| social_lk      | String   | false    |              |
| birthday       | Date     | false    |              |
| wishes_list    | ObjectId | false    |              | Events favorites
| role           | String   | true     |              | Enum: User, Organizer, default: User
| VATIN          | String   | true     | regex(dni)   |
| business_name  | String   | true     |              |
| organizer_type | String   | true     |              |
| address        | String   | true     |              |
| zip_code       | String   | true     |              |


### EVENT MODEL

| KEY                  | TYPE     | REQUIRED  |  EXTRA
| -------------------- | -------- | --------- |----------
| owner                | ObjectId |  false    | Ref: User
| name                 | String   |  true     |
| place                | String   |  true     |
| date_start           | Date     |  true     |
| date_end             | Date     |  false    |
| price                | Number   |  true     |
| type                 | ObjectId |  true     | Ref: Type
| small_description    | String   |  true     |
| large_description    | String   |  true     |
| cover_img            | String   |  true     |
| detail_img           | [String] |  true     |
| createAt             | String   |  true     |


### TYPE-MODEL

| KEY                  | TYPE     | REQUIRED  |  EXTRA
| -------------------- | -------- | --------- |----------
| name                 | String   |  true     |
| createAt             | String   |  true     |

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


### ADMIN ENDPOINTS

> TOKEN Required: YES

| METHOD | URL                  | What does it do  | Extra
| ------ | ---------------------| ---------------- | -----
| GET    | `admin/users`        | Get All Users    | CHECKADMIN
| GET    | `admin/events`       | Get Events       | CHECKADMIN
| PUT    | `admin/events/:id`   | Update event     | CHECKADMIN


### USER ENDPOINTS

> TOKEN Required: YES

| METHOD | URL             | What does it do  | Extra
| ------ | --------------- | ---------------- | -----
| GET    | `me      `      | Get Profile      |
| PUT    | `me`            | Update a User    |
| PUT    | `me/password`   | Update My Password  |
| DELETE | `me`            | Deletes Account  |


### EVENT ENDPOINTS

> TOKEN Required: NO

| METHOD | URL          | What does it do | Filters
| ------ | -------------| ----------------|-------------------------|
| GET    | `events`     | Get All Events  | Types, Dates of from date to other date
| GET    | `events/:id` | Get One Event   |

### EVENT USER ENPOINTS

> TOKEN Required: YES

| METHOD | URL                | What does it do                           | Filters                         |
| ------ | -------------------| ------------------------------------------| --------------------------------|
| GET    | `me/events/myevents`| Get Organizer Events                     |                                 |
| GET    | `me/events/wishes` | Get User Wishes                           |                                 |
| POST   | `me/events/wishes` | Add Event to Wishes Organizer             | Implement Function Check Role   |
| POST   | `me/events`        | Create One Event Organizer                | Implement Function Check Role   |
| PUT    | `me/events/:id`    | Update Event Organizer                    |                                 |
| DELETE | `me/events/:id`    | Delete Event  Organizer/Favorites         |                                 |
| DELETE | `me/events/wishes/:d`| Delete Event  Organizer/Favorites       |                                 |
