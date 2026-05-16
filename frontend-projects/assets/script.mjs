  // Example brick data - expand as needed
  const bricks = [
    {
      name: "single-page-CV",
      url: "https://devottr.github.io/roadmap.projects/frontend-projects/single-page-CV/",
      icon: "📜",
      description: "Create a single-page HTML CV to showcase your career history.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "basic-HTML-website",
      url: "",
      icon: "🌍",
      description: "Create simple HTML only website with multiple pages.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Personal Portfolio",
      url: "",
      icon: "💼",
      description: "Convert the previous simple HTML website into a personal portfolio.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Changelog Component",
      url: "",
      icon: "↕️",
      description: "Create a changelog component for a website using HTML and CSS.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Testimonial Cards",
      url: "",
      icon: "👏",
      description: "Create testimonial cards for a website using HTML and CSS.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Datepicker UI",
      url: "",
      icon: "📅",
      description: "Create a simple datepicker UI using HTML and CSS.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Accessible Form UI",
      url: "",
      icon: "↔️",
      description: "Create an accessible form UI using HTML and CSS.",
      category: "",
      progress: "beginner"
    },
    {
      name: "Image Grid Layout",
      url: "",
      icon: "🎑",
      description: "Create a grid layout of images using HTML and CSS.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Tooltip UI",
      url: "",
      icon: "↖️",
      description: "Create a tooltip for navigation items using only HTML and CSS.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Tabs",
      url: "",
      icon: "📑",
      description: "Create a simple tabs component using HTML, CSS, and JavaScript.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Cookie Consent",
      url: "",
      icon: "✅",
      description: "Create a simple cookie consent banner using JavaScript.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Restricted Textarea",
      url: "",
      icon: "❎",
      description: "Create a textarea with live character count and a max character limit.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Accordion",
      url: "",
      icon: "🌀",
      description: "Create an accordion component using HTML, CSS, and JavaScript.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Age Calculator",
      url: "",
      icon: "〰️",
      description: "Create an age calculator using HTML, CSS, and JavaScript.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Flash Cards",
      url: "",
      icon: "🎴",
      description: "Create a flash card app using JavaScript frameworks.",
      category: "",
      progress: "Beginner"
    },
    {
      name: "Quiz App",
      url: "",
      icon: "🎓",
      description: "Build a browser-based quiz application to test any knowledge",
      category: "",
      progress: "Intermediate"
    },
    {
      name: "Weather Web App",
      url: "",
      icon: "🌫️",
      description: "Build a weather app that fetches and displays weather for a given location.",
      category: "",
      progress: "Intermediate"
    },
    {
      name: "GitHub Tandom Repository",
      url: "",
      icon: "↩️",
      description: "Create a GitHub random repository finder using GitHub API.",
      category: "",
      progress: "Intermediate"
    },
    {
      name: "Task Tracker",
      url: "",
      icon: "🛤️",
      description: "Create a task tracker with a to-do list using JavaScript.",
      category: "",
      progress: "Intermediate"
    },
    {
      name: "Reddit Client",
      url: "",
      icon: "🦊",
      description: "Create a Reddit client with customizable subreddit lanes.",
      category: "",
      progress: "Intermediate"
    },
    {
      name: "Temperature Converter",
      url: "",
      icon: "🌡️",
      description: "Build a temperature converter that converts between different units.",
      category: "Fun & Games",
      progress: "In Progress"
    },
        {
      name: "Pomodoro Timer",
      url: "",
      icon: "📌",
      description: "Create a pomodoro tracker application for productivity",
      category: "",
      progress: "Intermediate"
    },
    {
      name: "24hr Story Feature",
      url: "",
      icon: "💽",
      description: "Create a client-side instagram stories feature clone.",
      category: "",
      progress: "Advanced"
    }
  ];

  const gridContainer = document.getElementById("brickGrid");
  const searchInput = document.getElementById("search");

  function renderBricks(list) {
    if (list.length === 0) {
      gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #999;">No matching bricks found.</p>`;
      return;
    }
    gridContainer.innerHTML = list.map(brick => `
      <a href="${brick.url}" class="code-btn tooltip" tabindex="0" aria-label="${brick.name}: ${brick.description}">
        <span class="code-icon" aria-hidden="true">${brick.icon}</span>
        ${brick.name}
        <div class="code-desc">${brick.description}</div>
        <span class="tooltiptext">${brick.category}</span>
        ${brick.progress ? `<span class="progress-badge">${brick.progress}</span>` : ''}
      </a>
    `).join('');
  }

  function filterBricks() {
    const q = searchInput.value.trim().toLowerCase();
    const filtered = bricks.filter(b =>
      b.name.toLowerCase().includes(q) || b.description.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)
    );
    renderBricks(filtered);
  }

  searchInput.addEventListener('input', filterBricks);

  // Initial render
  renderBricks(bricks);
