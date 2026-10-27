# Abu Huraira Shaikh — Developer Portfolio

The source code for [Abu Huraira Shaikh's portfolio](https://developer-abu.me/), a responsive portfolio website showcasing his background, technical skills, selected projects, and contact form.

The project has two parts:

- **Client:** A React single-page application built with Vite. It presents the portfolio and sends contact form submissions to the backend.
- **Server:** An Express API that validates contact messages and uses Brevo to email the portfolio owner and confirm receipt to the sender.

## Features

- Portfolio introduction, skills, featured projects, and contact form
- Responsive styling with Tailwind CSS and animated UI elements
- Contact form validation on the server
- Transactional email notifications and visitor confirmations through Brevo
- Search and social sharing metadata for the deployed portfolio

## Technology

**Client:** React, Vite, Tailwind CSS, Motion, Axios  
**Server:** Node.js, Express, Zod, Brevo

## Project layout

```text
client/
  public/              Portfolio images, CV, and SEO files
  src/
    component/         Header, introduction, skills, projects, contact, and footer
    pages/             Home page
    App.jsx
    main.jsx
server/
  controller/          Health check and contact form handlers
  emailService/        Brevo transactional email integration
  middleware/          Contact request validation
  routes/              API routes
  zodValidation/       Contact form schema
  app.js
  index.js
```

## Run locally

You need Node.js and npm installed. The client and server are separate npm projects, so install their dependencies independently.

### 1. Configure the client

In a terminal from the repository root:

```powershell
cd client
npm install
```

Create `client/.env` and set the backend base URL:

```dotenv
VITE_BACKEND_API=http://localhost:3000
```

### 2. Configure the server

In a second terminal from the repository root:

```powershell
cd server
npm install
```

Create `server/.env` with the following values:

```dotenv
PORT=3000
BREVO_API_KEY=your_brevo_api_key
MAIL_FROM=your_verified_sender@example.com
CONTACT_TO=your_inbox@example.com
```

Use a Brevo API key, a sender address verified with Brevo, and the mailbox where you want to receive contact messages. Keep `.env` files and real credentials private.

### 3. Start the applications

Start the backend in the server terminal:

```powershell
npm start
```

Start the Vite development server in the client terminal:

```powershell
cd ..\client
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

**Local contact form note:** The server currently allows browser requests from `https://developer-abu.me`. To submit the contact form from a local development origin, update the CORS origin in `server/app.js` to match the local Vite URL.

## API

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/` | Server health check |
| `POST` | `/contact` | Validate a contact message and send transactional emails |

Contact submissions contain `name`, `subject`, `email`, and `message`. The server validates these fields before sending: name (3–80 characters), subject (5–35), valid email (up to 40 characters), and message (20–2,000 characters).

## Useful commands

Run these from the relevant project directory:

| Directory | Command | Description |
| --- | --- | --- |
| `client` | `npm run dev` | Start the Vite development server |
| `client` | `npm run build` | Create the production client build in `client/dist` |
| `client` | `npm run preview` | Preview the production build locally |
| `client` | `npm run lint` | Run ESLint |
| `server` | `npm start` | Start the API with Nodemon |
