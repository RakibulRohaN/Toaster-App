# 🧈 Simple JS Toaster Component

A lightweight and reusable toaster notification system built with **JavaScript** and **Tailwind CSS**.

### 🚀 Features
- Supports Light & Dark themes  
- Custom position (top/bottom + left/right)  
- Smooth fade-in and fade-out animations  
- Auto-remove after custom duration  
- Fully responsive and reusable

### 🧩 Example Usage
```js
const toaster = createToaster({
  positionX: "right",
  positionY: "top",
  theme: "dark",
  duration: 3
});

toaster("Hello, World!");
