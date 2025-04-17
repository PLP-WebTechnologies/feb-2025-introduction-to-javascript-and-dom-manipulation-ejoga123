document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleText");
  const addButton = document.getElementById("addElement");
  const dynamicText = document.querySelector(".dynamic");
  const container = document.getElementById("container");

  // Change text content dynamically
  toggleButton.addEventListener("click", () => {
    if (dynamicText.textContent === "This is dynamic content!") {
      dynamicText.textContent = "Dynamic content has changed!";
      dynamicText.style.color = "red"; // Modify CSS dynamically
    } else {
      dynamicText.textContent = "This is dynamic content!";
      dynamicText.style.color = "blue"; // Modify CSS dynamically
    }
  });

  // Add or remove an element
  addButton.addEventListener("click", () => {
    const newElement = document.createElement("p");
    newElement.textContent = "Hi there! I am a new element.";
    container.appendChild(newElement);

    // Remove element after 3 seconds
    setTimeout(() => {
      container.removeChild(newElement);
    }, 3000);
  });
});
