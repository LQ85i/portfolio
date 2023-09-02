# Portfolio website of LQ85i

Deployed live here: https://lq85i.github.io/portfolio/

## Developed with

This project was bootstrapped using create-next-app with app router.

Front-end:
- NextJS, a ReactJS framework
- TypeScript, a JavaScript framework
- Tailwind CSS, a CSS framework

Back-end:
- Express, a NodeJS framework
- React Email, a collection of components for creating emails using ReactJS and TypeScript
- Nodemailer, a NodeJS module for sending emails

Site is tested on:
- Firefox 117
- Chrome 116
- Chrome android 116

## Includes

Site content, single page: 
- Introduction
- Project slides
- Skill tables
- Contact form

Technical features:
- Responsive design for all resolutions down to 320px width
- Two types of slide presentations:
    - Fade-out fade-in switching for Projects, with indicator for current slide
    - Scroll snap for Skills, slider only on lower resolutions
- Contact form sends an email with the data, details further down
- Keyboard and touch navigation:
    - presentations support swipes and arrow keys
    - all interactive elements can be tab-keyed into


## Contact form details

Contact form back-end:
- Server bootstrapped with Express and hosted on Fly.io
- Client sends post request to server url with form data
- Server validates the form data, makes sure its all type string
- Server renders an email using react-email, filled with form data
- Server sends me the email using nodemailer and gmail smtp service
- Source code of the server is private for security reasons

Contact form front-end:
- Validates input fields client-side
- Shows rotating loading indicator after pressing send
- When server responds, loading indicator turns into success or error indicator
- In case of error, displays error message with an email address to send message to (address only used for this website to avoid malicious use)
