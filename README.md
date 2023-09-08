# Portfolio website of LQ85i

Deployed live here: https://portfolio-lq85i.vercel.app/

## Developed with

This project was bootstrapped using create-next-app with app router.

Front-end:
- NextJS
- TypeScript
- Tailwind CSS

Back-end:
- Express
- React Email
- Nodemailer

Site is tested on:
- Firefox 117
- Chrome 116
- Chrome android 116
- Safari iOS 16.6

## Includes

Site content, single page: 
- Introduction
- Project slides
- Skill tables
- Contact form
- Footer

Technical features:
- Responsive design for all resolutions down to 320px width
- Two types of slide presentations:
    - Fade-out fade-in switching for Projects, with indicator for current slide
    - Scroll snap for Skills, only on lower resolutions
- Contact form sends an email with the data, details further down
- Keyboard and touch navigation:
    - presentations support swipes and arrow keys
    - all interactive elements can be tab-keyed into
- ReCAPTCHA v3 for protecting contact form

## Contact form details

Contact form back-end:
- Server bootstrapped with Express and hosted on Fly.io
- Client sends post request to server url with form data
- Server validates the form data, makes sure its all type string
- Server renders an email using react-email, filled with form data
- Server sends the email using nodemailer and gmail smtp service
- Source code of the server is private for security reasons

Contact form front-end:
- Validates input fields client-side
- Shows rotating loading indicator after pressing send
- When server responds, loading indicator turns into success or error indicator
- In case of error, displays error message with an email address to send message to (address only used for this website to avoid malicious use)
