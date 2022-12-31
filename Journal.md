# _Simple Membership_

#### By **_Andy Plymate_**

### Research & Planning Log
#### 2022.04.29
* 09:23 - Initialize react app
* 10:12 - Finish group brain storming session for additional ideas/paths forward.
* 11:30 - WIP planning log, user stories.
* 13:30 - rough draft of project proposal complete.
* 14.27 - WIP component tree map
* 15.02 - WIP component tree map... _withbuggy eyes_
* 16.30 - Complete rough draft of component tree map
* 16.56 - Finish for day

#### 2022.05.01
* 18:57 - Finish youtube video about MERN stack https://youtu.be/VGo2WbvHurU

#### 2022.05.06
* 10:19 - Finish youtube video about MERN Stack _different one_  https://youtu.be/-0exw-9YJBo
* 15:51 - Going to research differences in npm connect-mongo,  npm connect-mongo-session, npm express-session, npm jwt, npm passport
* 16:53 - going to use passport and express-session.

#### 2022.05.13
* 09:32 - Start passport and discord integration
* 14:25 - Been working all day to try and figure out Discord auth. I've been able to query discord and return the user. Finally overcame creating a user in my DB with the discordID and discord email. Still stuck on persisting the user through express-session with the use of a cookie. 
* 15:53 - Finally got the discord to properly auth a session, save a cookie locally, and store the session ID in MongoDB. This completes the ability to persist sessions across server reloads. FML
* 16:40 - Finished for the day after scrubbing the env file from my git repo

#### 2022.05.16
* 12:20 - Spend the morning reorganizing the folder structure to have a front end and back end folder. The back end is on port 5000 while the front end is on 3000.  Created a login page, which redirects to the discord auth page, and after authentication redirects to '/members' page.  If you try and access '/members' without being authenticated, it redirects you to the login page.  I can utilize these same mechanisms for future pages needing authentication. 
* 16:25 - Been really struggling since lunch to start creating pages for the basic design of the site.  I rearranged some stuff. Moved the router inside the `<App />` component. Created a landing page, with a login button redirecting you to the login page.  I've been struggling with creating a `<Header />` on the member page (only when authenticated), that has access to the user info that is logged in.  There is a React.useEffect hook checking the authentication. This does return the credentials of the user, but is not accessible once the render is complete. I tried to use a React.useState hook, but ended up creating an infinite loop and had to shut the server to break it.  Basically, I don't know react hooks well and trying to piece it together. 
* 17.50 - Finally manage to learn the .useRef is immutable and able to break the .useEffect loop I was stuck in. No time to thoroughly test now but it seems like it's working. 

#### 2022.05.17
* 9:04 - Going to test out the .useRef hook that I think solved my issue last night. Then I'm going continue building out the various pages and such for a working site.  I'm going to leave the authentication at just Discord for now, and integration of stripe payments later as well. There isn't much time to have a presentable project for Thursday. 
* 12:15 - Found an accordion style menu online and decided to use it. First had issues with dependencies. Got over that hurdle. Then realized the the syntax of the `Accordion.js` file was 5 years old. I had to reformat it for current React syntax. It work now though!!  I have absolutely no CSS styling yet. I'm wrapping each of my components in a `<div className='componentName>` so that later the styling *should* go easy. haha
* 13:02 - I played around with dynamically displaying all the userData on the members page, but couldn't get it to work... Absolutely no idea why. Console.log shows "userData" is an object, but when I tried to Object.entries() and display it, it threw an error that it was null. I think this was due to the loading screen where userData is == null. But couldn't figure out how to get around it. 
* 13:19 - I created a MemberControl and Member Component. I think it's time I figured out how to reach into the MongoDB store from the backend and pull information to the front end to be rendered. I want to grab all the users in the database and display them on the member page. I think I can do this with an api call on the front end, calling a authorized protected route on the backend returning all the users. I feel like I have a little bit of changing to do on the backend, but mostly have it set up for success. I have the "user" api routes set up that I can use. I need to protect them with authentication and then have the front end call the route. ... slowly working my way through it.
* 15:06 - Was able to all the members in an array and pass it to MemberControl and have each member display in a list. Nice!  I'm really at a spot where my creativity is limiting me atm.  I feel uninspired on what I want to accomplish. I feel the functionality of the MemberPage.jsx route it working pretty well for a MVP. My sidebar includes:

    * Finances
        * This is will need to come after stripe payment integrations
    * Memberships
        * This is will need to come after stripe payment integrations
    * Members
        * A user can log in through discord. This really only logs the email address, and discordID. Great for authentication, but I need a form to Capture important profile information about the user.
        * I feel a user should authenticate using discord, then be redirected to a create user form. From there I can capture the discord information, and send a PUT request to update that user with the accurate information. Might run into issues when a user logs in a second time. I want to stay away from storing passwords and such and completely rely on discord, google, and facebook. 
        * When a user logs in, there will need to be a check if that user is in the database already. Likely check it by email address. If they are they should be redirected to the member page and not the "New Member Form"
    * Reports
        * Reports will be last and ongoing. Gotta get it working and with data to do any report structure. ha
    * Setup
        * Setup will be last I think. A place where the use can add new memberships, or member profile fields etc.  
* 16:02 - I added a lot of fields to my mongoose user schema. I this is more than enough to get me started. Next I want to create a newMemberForm component. A user will go to the login page, authenticate through discord, redirect to the newMemberForm, and upon submission of the form, it will send a put request and update the users profile. I'll deal with existing members logging in after that.   I think I'm going to commit and merge the react back end from here too. Everything works as intended right now. 

#### 2022.05.18
* 10:25 - I'm going to work on that newMemberForm and see if I can get it to populate after authentication
* 13:41 - WIP on the newMemberForm. The form itself took awhile just to plug and play the fields. I'm stuck atm using the form to make a PUT request to the database. HTML forms cannot make PUT requests... trying to find a way to make it happen. 
* 20:03 - Spend the entire afternoon trying to figure how to submit the editMemberForm with a PUT request. I was just about there for hours and hours. I just needed a event.preventDefault call at the top. I circled around that for quite a while.   I also learned there is a console setting to persist the console through a url redirect. That is really handy here!  I did manage to get my presentation outline complete as well. So I'm prepped for tomorrow. 
* SometimeLate - I ended up refactoring the api calls, committing it, causing an infinite re-render loop somehow. Couldn't figure it out, so i went down a rabbit hole of reverting and resetting my git commit history.  This caused me to not trust what I had so I deleted the entire project locally and cloning it down from the repo. Realized I was missing my entire .env file and had to reconstruct it.... This led me to connecting to a "test" database in mongoDB instead of the "simple-membership" database.... FML.  I spend a lot of time trying to figure it out and gave up after midnight.  The project works, I just don't like it in the test database. 

#### 2022.05.19
* 8:58 - So within about 10 minutes this morning i realized my MONGO_URI did not specify a database. So adding one in the middle of the URI, at the intended space, worked perfect. The simple things. 
* 10:45 - Need to look at where mongo is creating the collections. I figured out the database name, need to figure out the collections. The user scheme is where the user collection comes from but what about the sessions collections. and how does a user get entered? Is it through passport? 
        * Notes from Capstones:
                * Tiffany has a great header and sidebar I want to steal. She also has a cool dialog box popup that I want to steal as well!
                * Eric Crudup transformed css div into a a racecar! 
* 16:30 - Just some thoughts. I want to implement multi-level authentication next. Get the mailing address and Name to combine from smaller key-values. https://www.mongodb.com/docs/manual/reference/method/#std-label-role-management-methods

#### 2022.05.24
* 13:56 - My last notes said to implement multi level authentication.... This prob isn't the easiest path forward. IF that was there it would be one more thing to track and make sure continually works correctly throughout building out the rest of the application. It could easily break, which means I would need to test and verify it every step of the way.  Re-reading my notes from 5/17 it seems stripe integration might be the next thing. Once that is included, I can shore up the membership types withing the program. Verify users can correctly select memberships, verify it correctly transmits to stripe, etc etc.  Lets start there. 
* 15:31 - Got the params right so that Discord will only ask the user to authorize the app on the first log in. Subsequent logins will auto redirect back to the application.  If the user was just created then they will be directed to the edit member form, otherwise directed to the member page.  I'm not happy with this flow, but it works for now.... Hopefully I learn something to fix this later. 
* 15:37 - I wanted to note that I dug into the passport NPM modules and learned a fair bit.  I still don't 'fully' understand what is happening under the hood there, but i learned that passport has a authenticate() method that might be a lot better to ensure the backend api is protected. 
* 16:20 - Added ability to edit members from the members page. Since implementing the auto redirect from authentication to /members I wanted a way to edit the member details. 

#### 2022.11.23
* This journal was used for the epicodus capstone review, but I thought it would be to continue here. It'll be less "formal" with timestamps and more like an actual journal written in sporadically. 
* The long time between the last post and this one was due to,  ta-da!, not working on it. After epicodus, I had a very full summer and wasn't ready to sit down and work on this. I spent the summer focusing on my HEMA club as well as enjoying the summer. Summer is now over and I wanted to get to back to this project. Not only to add it as a shining portfolio piece, but because I want to finish it and use it within my HEMA club. Possible extend it's use to other local clubs as well. 
* Couple days ago I reacquainted myself with the project and included the google authentication method. Interestingly, I spent a lot of time looking up basic stuff to shake off the rust. Today I'm looking to include the facebook auth method and expect it to go fairly easy.
* I expect to continue shaking the 'rust' off basic skills I've forgotten. As I progress I'll be using the readme as a road map and keep my future implementation ideas there.
* Alright, got the facebook auth method working. Had some small issues getting the right scope lined up with the facebook app. Got it working though.
* I might tackle the stripe integration next. Not sure how stripe will want info to charge cards, will the membership types be hosted on stripe or will I simply pass a $$ amount to stripe. Yeah Stripe next. 
* Might want to update require statements to newer import statements... 

#### 2022.11.28
* The authentication check to view pages, and access API routes on the backend get called a lot. Like every time. I wonder if there is a way to decrease the number of times this needs to be called. 
    * Maybe accomplish this through a custom middleware function
* Today was a bit frustrating. I set out to integrate stripe into the program and went down a rabbit hole. I updated the userModel and cleaned it up a bit. Added in mailing address to the schema as well as the input form. 
    * I'm struggling to set a fullName prop from the firstName and lastName only. 
    * Read about the mongoose virtual props and got that to work, but it's not getting passed through into the front end react properties. Only managed to get it to print in the console. 
    * I've tried setting the prop directly, setting it as a virtual (two different ways), also tried changing the JSON middleware to include "virtuals", but that completely broke everything. 
    * UPDATE: Got IT. When creating the schema, I needed to set options to retrieve virtuals when converting to JSON. I saw this before, but thought I needed in the middleware instead of the schema creation.  Yeah!
* I'd like to break the Discord, Google, and Facebook IDs into their own schema. As well as the subscriptions, and mailing addresses. 

#### 2022.11.29
* After researching MongoDB sub-documents versus nested data, I feel like the auth IDs should stay on the user model at the top level. There is no need to create a separate schema or sub-document at all. Creating sub documents is a very valid thing, but will better utilized in a many to one relationship.  For example, classes attended or payments made would be better suited. That said, maybe these exact two examples are not great either. They should be their own collections. 
* Ran across something today about creating an express middle ware that would call my protect the site through authentication. I'll have to look at this versus the MongoDB roles to see which is more viable. 
* Being so new to coding is tough because there is 10 different ways to solve problems. Working for a company would give me some boundaries on best practices. Working on my own is like the wild west. Sometimes I feel like a kid in a candy shop running from one solution to the next with no foresight on the unknown repercussions down the road. 
* It's been another frustrating day. Yesterday I figured out how to create a virtual at the top level of the document. Today I wanted to nest those virtuals. eg name.fullName from name.firstName + name.lastName.
    * Seemed simple at first and really it is; once you know how. I had create the schema and THEN add the virtuals.
    * Went around for a while trying to it at the schema creation with the OPTIONS and couldn't figure it out. Tried a second nested schema and kept running into an error on the React side not being able to find prototype.map on a list. 
        * Toward the end I figured out this was because I was iterating over a object and changing that object at the same time. Causing a rerender and creating a infinite loop of calls. 
        * tried a deep copy with JSON.parse(JSON.stringify(obj)) but still didn't work. Really cool way to create a deep copy though!
    * Once I figured these two problems out I was able to combine the solutions to create fullName and fullMailingAddress nested a level deep. 
* Spinning my wheels today was rough, again, but with each step I learn a bit more about data structures and mongoDB
* Learned today
    * Express Middleware next() and might be able to use for auth verification.
    * MongoDB Sub-documents versus nesting
    * Learned that MongoDB auth roles exist
    * Creating nested virtuals in Mongoose
* Next up
    * Look at auth in the middleware instead of by page
    * Integrate stripe

#### 2022.12.28
* Pff it's been a month since I've visited this.
* Signing up on Stripe and preparing to integrate with the app. 
* That took way too long to figure out my bugs. First I got a React Payment set up, which didn't take long. Then I had a bear of a time setting up the endpoint to creat a stripe checkout session. Turns out I was using router.route().post() incorrectly. bah. That literally took a few hours all by itself today. 
* In the end it looks like i have a payments landing page, and an endpoint to subscribe to stripe subscriptions. 
* Next I need to add the subscription options into a front end table that will then direct to the endpoint.

#### 2022.12.30
* Need to look at how to pull all product options from Stripe and dynamically generate them in a table. 
*Fuck me I'm bad at Fetch requests apparently. Spent my time preparing the payment page to have mulitple buttons to subscribe to different subscriptions and the API dynamically take the data. I for a "form" set up pretty quick. Realized I didn't it and wanted just a button. TOOK forever to figure out how to just use a button. It's default behavior is "submit" had to change it to type='button'. 
* Then the onClick inline function wasn't working. Went down a rabbit hole there too. Found out the inline functions are not best practice. That like the way that Epicodus taught us. Then I found out that in the react the best practice IS to do the onClick inline and what I was missing was arrow function in line so it calls when clicked and not onMount and onRender. ugg. 
* Next I couldn't figure out why postman was calling the API correctly yet my fetch wan't returning it correctly. I needed to res.json() to properly see my link. 
* Finally I moved the code around a little. Moving the functions to a utils file and adding in an error handling function. 
* Currently works. One button subscribes to the one strip thing. 
* Next I want to pass in the domain to the API as well as see how to get the subscription data into MongoDb
* OK actually creating a pricing table in stripe to display all the products dynamically.