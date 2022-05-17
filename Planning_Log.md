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
