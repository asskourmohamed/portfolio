<div align="center">

# 🌐 Mohamed Asskour — Developer Portfolio

### Built with React.js · Cloud & DevOps · AI & IoT

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-Visit_Portfolio-b8860b?style=for-the-badge)](https://your-portfolio-url.vercel.app/)
[![Video Demo](https://img.shields.io/badge/🎬_Video_Demo-Watch_Now-red?style=for-the-badge)](https://your-video-link-here)

</div>

---

<div align="center">

<!-- Replace with your actual screenshot -->
![Portfolio Preview](https://i.ibb.co/your-screenshot-id/portfolio-preview.png)

</div>

---

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/asskourmohamed/portfolio?color=b8860b&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/asskourmohamed/portfolio?color=b8860b&style=flat-square)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Open Source](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

</div>

<table align="center">
  <thead align="center">
    <tr>
      <td><b>📊 Project Stats</b></td>
      <td><b>🌟 Stars</b></td>
      <td><b>🍴 Forks</b></td>
      <td><b>🐛 Issues</b></td>
      <td><b>🔔 Open PRs</b></td>
      <td><b>🔕 Closed PRs</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/asskourmohamed/portfolio">Portfolio</a></td>
      <td><img alt="Stars" src="https://img.shields.io/github/stars/asskourmohamed/portfolio?style=flat&logo=github&color=b8860b"/></td>
      <td><img alt="Forks" src="https://img.shields.io/github/forks/asskourmohamed/portfolio?style=flat&logo=github&color=b8860b"/></td>
      <td><img alt="Issues" src="https://img.shields.io/github/issues/asskourmohamed/portfolio?style=flat&logo=github"/></td>
      <td><img alt="Open PRs" src="https://img.shields.io/github/issues-pr/asskourmohamed/portfolio?style=flat&logo=github"/></td>
      <td><img alt="Closed PRs" src="https://img.shields.io/github/issues-pr-closed/asskourmohamed/portfolio?style=flat&color=critical&logo=github"/></td>
    </tr>
  </tbody>
</table>

---

## 👨‍💻 About This Portfolio

This is my **personal developer portfolio** built with **React.js**, showcasing my skills, projects, and experience as a second-year engineering student at **INPT (National Institute of Posts and Telecommunications)**, specializing in **Ubiquitous and Distributed Systems — Cloud & IoT**.

The portfolio reflects my passion for:
- ☁️ **Cloud Computing & DevOps** — AWS, GCP, Docker, GitLab CI/CD
- 🤖 **Artificial Intelligence** — Machine Learning, Deep Learning, Computer Vision
- 🌐 **Full-Stack Development** — MERN Stack, Django, REST APIs
- 📡 **IoT & Distributed Systems** — OpenStack, VMware, Networking

---

## ✨ Features

| Feature | Description |
|---|---|
| 📖 **Multi-Page Layout** | Home, Skillset, Projects, Resume, Contact |
| 🎨 **Custom Theme** | Cream & gold design — unique, warm, professional |
| 🧬 **Molecule Particles** | Animated network background via tsParticles |
| 🛠️ **Tech Stack Icons** | Color-accurate brand icons for all technologies |
| 📁 **Project Cards** | Image, category badge, tech tags, modal detail view |
| 📄 **Live Resume** | Embedded PDF viewer + download button |
| 📬 **Contact Form** | EmailJS integration — messages sent directly to inbox |
| 📱 **Fully Responsive** | Mobile, tablet, and desktop ready |
| ⚡ **Smooth UX** | Preloader, scroll-to-top, hover animations |

---

## 🗂️ Project Structure

```
portfolio/
├── public/
├── src/
│   ├── assets/          # Images, PDFs, SVGs
│   ├── components/
│   │   ├── Home/        # About.jsx, Type.jsx
│   │   ├── Navbar/      # Navbar.jsx
│   │   ├── Footer/      # Footer.jsx
│   │   ├── Projects/    # ProjectCard.jsx
│   │   ├── Skillset/    # Techstack.jsx, Toolstack.jsx, Github.jsx
│   │   ├── Particle.js  # Molecule particle background
│   │   └── PreLoader.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Skillset.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── style.css        # Global cream/gold theme
│   └── App.js
└── package.json
```

---

## 🚀 Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 🛠️ Installation & Setup

> You need **Node.js** and **Git** installed globally on your machine.

```bash
# 1. Clone the repository
git clone https://github.com/asskourmohamed/portfolio.git

# 2. Navigate into the project
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page reloads automatically on file changes.

---

## 📬 Contact Form Setup (EmailJS)

To enable the contact form with your own email:

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Add your email service and create a template with fields: `from_name`, `reply_to`, `message`
3. Replace the credentials in `src/pages/Contact.jsx`:

```js
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY"
)
```

---

## 🎨 Customization

All colors are centralized in `src/style.css`:

```css
html {
  --imp-text-color: #b8860b;       /* gold accent */
  --imp-bold-text-color: #b8860b;  /* gold bold */
}
body {
  background-color: #fdf8e1;       /* cream background */
}
```

Change these two values to completely retheme the portfolio.

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

### 🤝 Connect with me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/asskour-mohamed)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/asskourmohamed)
[![Email](https://img.shields.io/badge/Email-b8860b?style=for-the-badge&logo=gmail&logoColor=white)](mailto:asskourmohamed1@gmail.com)

<br/>

⭐ **If you find this portfolio useful, give it a star!** ⭐

<h2>🧠 Happy Hacking 🧠</h2>

</div>