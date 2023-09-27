const mainData = {
  ATHLETES: {
    CONNECTION: "Connect with coaches directly and view their profiles.",
    COLLABORATION:
      "Work with other student athletes to increase your visibility by sharing and liking videos.",
    GROWTH:
      "Access resources and tools to improve as a student athlete, including training classes and tutor sessions.",
  },
  PLAYERS: {
    CONNECTION:
      "Connect with talented athletes and watch their video showreels.",
    COLLABORATION: "Collaborate with recruiters to find talented athletes.",
    GROWTH: "Save time and recruit the right athletes for your team.",
  },
};

function createSections(data, containerSelector) {
  const mainContainer = document.querySelector(containerSelector);

  let index = 1;
  for (const category in data) {
    const section = document.createElement("div");
    section.className = `section-${index}`;
    mainContainer.appendChild(section);

    const header = document.createElement("h2");
    header.textContent = category;
    header.classList.add("text-secondary");
    section.appendChild(header);

    let indexSubCategory = 1;
    for (const subcategory in data[category]) {
      const indexHeader = document.createElement("span");
      indexHeader.textContent = indexSubCategory;

      const subHeader = document.createElement("h3");
      subHeader.textContent = subcategory

      const p = document.createElement("p");
      p.textContent = data[category][subcategory];

      subHeader.insertBefore(indexHeader, subHeader.firstChild);

      section.appendChild(subHeader);
      section.appendChild(p);
      indexSubCategory++;
    }
    index++;
  }
}

createSections(mainData, ".container");
