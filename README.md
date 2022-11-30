# _Simple Membership_

#### By **_Andy Plymate_**

#### _A webpage to manage memberships for small clubs or gyms_

# _ENTIRE APP UNDER CONSTRUCTION CURRENTLY_

## Technologies Used

* _MongoDb_
* _Express.js_
* _React_
* _Node.js_
* _JavaScript_

## Description

* _Simple Membership is a simple way to track membership information and membership status within a small hobby groups or businesses. Many small groups utilize excel to keep this information, but excel has many pain points for this work such as: authentication, selective hidden information, no error handling. Simple membership looks to bring the simplicity of an excel tracking sheet and combine it with the structure, and ease, of a web app._

## Setup/Installation Requirements
* _Requires VSCode_

* _You can find the github repository [Simple Membership](https://github.com/Plymatea/SimpleMembership.git)_
* _In your preferred terminal, navigate to the directory you would like to store the project_
* _$ `git clone https://github.com/Plymatea/SimpleMembership.git`_
* _Now that the repository is cloned to your computer, right click on the folder and click "open with vs code"_
* _You will need to create an .env file in /back-end_
* _The .env file will need the following MONGO_URI, EXPRESS_SESSION_SECRET, DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_CALLBACK_URL (You will need to create a mongoDb database and a discord app to receive all these)_
* _$ `npm run start` in both the `/back-end` and the `/front-end` folders_

## Component Map

![Simple Membership Component Tree](https://github.com/Plymatea/SimpleMembership/blob/295f2463390f96cf20e66a65cc5d57105b72e4c3/front-end/public/mermaid-diagram-20220429162821.png "Component Map")
* The component map may be out of date - AP 11/22


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)


## Known Bugs

* _discordID, googleID, and email fields are all set to unique. If data is fed inconsistently, users will receive error when trying to log in_
  * _potential fix: remove update of existing user fields at log in_
* _if user is deleted from database, and user has a session cookie on local, then error will be thrown when trying to log in_

## Road Map

* _Security Classes_
  * _Likely implement mongoDB roles_
  * _User class_
  * _Admin class_
* _Memberships_
  * _Ability to add custom membership types_
* _Payments_
  * _Integrate with Stripe for payments_
  * _Handle record keeping of payments_
* _Reports_
  * _Various reports on financial and memberships_
* _Classes_
  * _Ability to add custom classes, with instructor, and times_
  * _Sign in members to specific classes_
* _Members_ 
  * _Ability to upload documents to a specific member profile_
* _Documentation_
  * _Integrate something like JSDoc to create documentation_


## License - [MIT](https://opensource.org/licenses/MIT)


Copyright (c) _2022_ _Andy Plymate_