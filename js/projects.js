
    const projects = [
      {
        title: "Fabrication des blocs hydraforme et formation en construction",
        description: "Programme pour l’accès à l’éducation dans les zones rurales.",
        image: "images/bloc.jpg"
      },
      {
        title: "Formation en technique de soudure",
        description: "Techniques agricoles respectueuses de l’environnement.",
        image: "images/soudure.jpg"
      },
      {
        title: "Formation en technique d'ajustage",
        description: "Construction de puits et systèmes de filtration.",
        image: "images/ajustage.jpg"
      },
      {
        title: "Programme d'alphabetisation des jeunes en zone rural",
        description: "Cliniques mobiles et campagnes de sensibilisation.",
        image: "images/alphabetisation.jpg"
      },
         {
        title: "Education pour tous",
        description: "Cliniques mobiles et campagnes de sensibilisation.",
        image: "images/WhatsApp Image 2025-05-09 à 18.35.02_776f46a7.jpg"
      }
    ];

    const container = document.getElementById("seed-projects-container");

    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "seed-card";
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="seed-card-body">
          <div class="seed-card-title">${project.title}</div>
          <div class="seed-card-text">${project.description}</div>
        </div>
      `;
      container.appendChild(card);
    });
