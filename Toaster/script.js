let mainDiv = document.querySelector(".mainDiv");


// 🔥 Toaster Function
function createToaster(config){
  return function (str){
    // Apply theme & base styling
    let newDiv = document.createElement("div");
    newDiv.textContent = str
    newDiv.className =` w-full ${config.theme === "dark" ? "bg-gray-950 text-white" : "bg-gray-100 text-black" } rounded shadow-lg pointer-events-none transition-opacity wi`;
    mainDiv.appendChild(newDiv)


   // Set toaster position
    if(config.positionX !== "left" || config.positionY !=="top"  ){
      mainDiv.className = ` fixed p-4 z-50
      ${config.positionX === "right"? "right-5" : "left-5"} ${config.positionY === "bottom"? "bottom-5" : "top-5"}`
    }
    
    // Small delay for smooth fade-in animation
    requestAnimationFrame(() => {
      newDiv.classList.remove("opacity-0", "translate-y-2");
      newDiv.classList.add("opacity-100", "translate-y-0");
    });

    setTimeout(() => {
      newDiv.classList.add("opacity-0", "translate-y-2");
        mainDiv.removeChild(newDiv)
    },config.duration * 1000);
}
}

// ⚙️ Usage Example
const toaster = createToaster({
  positionX: "right",
  positionY: "top",
  theme: "light",
  duration: 3, // seconds
});

toaster("✅ File downloaded successfully!");
setTimeout(() => {
  toaster("📦 Another toast message!");
}, 2000);


