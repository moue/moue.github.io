---
title: Building Join Harvard (Wireframes)
layout: post
---

A favorite side project of mine was the development of [Join Harvard](http://www.joinharvard.com), which I built with my friend [Sharon](http://sharonzhou.me/) and three other students over spring break two years ago. We wanted to build a website that would help students discover new clubs, since we found the offical student organizations list overwhelming and unintuitive to use. 

Sharon and I worked together to design the app and plan out what we wanted to get done each day of the week. 

![Our plan for the first two days]({{ site.url }}/imgs/joinharvard/plan.jpg){: .image-half-width-center}

I also worked on the homepage of the app, building the front-end that would hook into the database to pull ten random clubs to display when the user first visited the site. After we developed the site, we demonstrated our work to the CTO of Harvard who was so impressed with our work that he promised to champion us in our quest to replace the current student activity finder site and to get Harvard University IT to maintain the code so that students could use what we had made after we graduated. We also recently got the Dean of Student Life to support us as well. 

Our original plan had a lot more features than actually got built in the span of a week. 

Features: 

* [Built] Update list of clubs - screen Scrape from [OSL Organizations List](http://osl.fas.harvard.edu/student-organizations) (Python / Beautiful Soup)
* [Built] Tags (organization categories)
* [Built with adjustments] Refreshable, random side bar of other clubs
* Search
* Club Profiles
    * [Built] Contact info ("Connect with Club Officers") - allow users to contact the club while keeping club member emails anonymous 
    * [Built] Blurb / short description
    * [Built] Link to website / join list-servs
    * Photo(s)
    * Major events (+ dates)
    * Perks (i.e. some clubs give you a subscription to WSJ or NYT)
    * Comp / meeting times
    * Lists (comping, joined)
        * Link with user's Facebook profile
        * Allow users to "List publically" or "List privately"
* Time commitment (see how many hours/week you'll spend on extracurriculars)
    * Email upperclassmen with survey
        * What do you wish you'd known before joining?
        * What have you learned since joining?
* Analytics (who likes what clubs?)
* Featured clubs (based on events) - "Have you considered partnering with these clubs for this event?"

## Initial Wireframes
![About page design]({{ site.url }}/imgs/joinharvard/wireframes/about.jpg){: .image-half-width-left}

![Explore page design]({{ site.url }}/imgs/joinharvard/wireframes/explore.jpg){: .image-half-width}

![Club pop up, Yuqi's design]({{ site.url }}/imgs/joinharvard/wireframes/popup1.jpg){: .image-half-width-left}

![Club pop up, Sharon's design]({{ site.url }}/imgs/joinharvard/wireframes/popup2.jpg){: .image-half-width}

## This was the final design.
![Explore page design]({{ site.url }}/imgs/joinharvard/clubs.png){: .image-half-full-width}