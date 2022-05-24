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
* SometimeLate - I ended up refactoring the api calls, committing it, causing and infinite re-render loop somehow. Couldn't figure it out, so i went down a rabbit hole of reverting and resetting my git commit history.  This caused me to not trust what I had so I deleted the entire project locally and cloning it down from the repo. Realized I wa missing my entire .env file and had to reconstruct it.... This led me to connecting to a "test" database in mongoDB instead of the "simple-membership" database.... FML.  I spend a lot of time trying to figure it out and gave up after midnight.  The project works, I just don't like it in the test database. 

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





