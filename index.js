
  function doSomething() {
    console.info("DOM loaded");
  }
  
  if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", doSomething);
  } else {
    // `DOMContentLoaded` has already fired
    doSomething();
  }
  document.addEventListener("DOMContentLoaded", (event) => {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // For example:
    colorBox.style.backgroundColor = "blue";
    changeColorBtn.addEventListener("click", () => {
      colorBox.style.backgroundColor = "red";
    });
  });
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // 1
  const randomHexColor = getRandomColor();
  console.log(randomHexColor); // e.g., "#3BB46D"
  document.addEventListener("DOMContentLoaded", (event) => {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");
  
    // Function to change the background color
    function changeBackgroundColor() {
      const randomColor = getRandomColor();
      colorBox.style.backgroundColor = randomColor;
    }
  
    // Add event listener to the button
    changeColorBtn.addEventListener("click", changeBackgroundColor);
  });
  
  function getRandomColor() {
    // Your getRandomColor function implementation here
    // (as mentioned in the previous response)
  }
  