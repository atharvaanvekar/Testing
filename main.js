const nameDatabase = [
    // Cafe names
    { category: 1, name: "Brewed Awakening" },
    { category: 1, name: "The Daily Grind" },
    { category: 1, name: "The Coffee Spot" },
  
    // Restaurant names
    { category: 2, name: "Tasty Bites" },
    { category: 2, name: "The Gourmet Kitchen" },
    { category: 2, name: "Flavors of the World" },
    
    // Ice Cream Shop names
    { category: 3, name: "Sweet Treats" },
    { category: 3, name: "The Creamery" },
    { category: 3, name: "Frozen Delights" },
  
    // Barber Shop names
    { category: 4, name: "Cutting Edge" },
    { category: 4, name: "The Barber's Chair" },
    { category: 4, name: "Fade Factory" },
    
    // School Name names
    { category: 5, name: "Springfield Elementary" },
    { category: 5, name: "Lincoln High School" },
    { category: 5, name: "Riverview Academy" },
  
  ];
  
  const form = document.querySelector("form");
  const categorySelect = document.querySelector("#category");
  const generatedNameDiv = document.querySelector("#generated-name");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedCategory = parseInt(categorySelect.value);
    const filteredNames = nameDatabase.filter((name) => name.category === selectedCategory);
    const randomIndex = Math.floor(Math.random() * filteredNames.length);
    const generatedName = filteredNames[randomIndex].name;
    generatedNameDiv.textContent = `Generated Name: ${generatedName}`;
  });
