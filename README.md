# Interactive Portfolio Website

## Project Overview
This project is a personal **Interactive Portfolio Website** developed using **HTML, CSS, and JavaScript**.
The objective of this project is to demonstrate basic front-end development skills along with JavaScript interactivity.

The website includes dynamic content, form validation, interactive UI features, and local storage usage to improve user experience.

---

## Project Objectives
- Create a clean and responsive portfolio layout
- Implement JavaScript-based interactivity
- Validate user input using JavaScript
- Enhance UI with animations and dark mode
- Store user preferences using localStorage

---

## Project Structure

portfolio-website/
│
├── index.html # Main HTML structure
├── style.css # Styling and responsive design
├── script.js # JavaScript functionality
├── README.md # Project documentation
└── images/ # Screenshots and gallery images

---

## Technologies Used
- **HTML5** – Structure of the website  
- **CSS3** – Styling and responsive layout  
- **JavaScript** – Interactivity and logic  
- **Web Browser** – Execution environment  

---

## Setup Instructions
Follow these steps to run the project:

1. Download or clone the project repository
2. Ensure all files are in the correct folder structure
3. Open the project folder
4. Double-click on `index.html`
5. The portfolio will open in your web browser

No external libraries or installations are required.

---

## JavaScript Features Implemented

### 1. Form Validation
The contact form uses JavaScript validation to ensure correct input before submission.

**Validation Rules:**
- Name field cannot be empty
- Email must contain `@`
- Message must be at least 10 characters long

**Logic Used:**
- Prevent default form submission
- Check input values using conditions
- Display custom error or success messages dynamically

---

### 2. DOM Manipulation
JavaScript is used to dynamically modify content and styles on the page.

Examples:
- Updating text in the About section on click
- Dynamically creating buttons and messages
- Updating images in the image gallery

Methods used:
- `querySelector()`
- `querySelectorAll()`
- `createElement()`
- `appendChild()`
- `classList.toggle()`

---

### 3. Event Handling
Multiple event listeners are implemented to handle user interactions.

Events used:
- `click`
- `mouseover`
- `mouseout`
- `submit`
- `scroll`
- `load`

These events improve user interaction and responsiveness.

---

### 4. Interactive Features
The project includes more than three interactive features:

- **Dark Mode Toggle**  
  Allows users to switch between light and dark themes.

- **Image Gallery**  
  Clicking on thumbnail images updates the main image.

- **Scroll Animations**  
  Sections animate smoothly when they appear on screen.

- **Hover Effects**  
  Navigation links and buttons respond to mouse hover.

---

### 5. Local Storage
Local Storage is used to save the user's dark mode preference.

- Dark mode state is stored using `localStorage`
- Preference is automatically applied on page reload

This ensures a better user experience.

---

## Technical Details

### Algorithms and Logic
- Conditional statements for validation
- Event-driven programming
- DOM traversal and manipulation
- Simple string validation techniques

### Data Structures Used
- JavaScript variables
- NodeLists (`querySelectorAll`)
- Browser localStorage (key-value pairs)

### Architecture
- Client-side single-page application
- Separation of concerns (HTML, CSS, JavaScript)
- Modular and reusable functions

---

## Testing and Validation

### Manual Test Cases

| Test Case | Input | Expected Result |
|--------|------|----------------|
Empty Name | Blank input | Error message shown |
Invalid Email | Missing `@` | Validation error |
Short Message | Less than 10 characters | Error message |
Valid Input | Correct data | Success message |
Dark Mode Reload | Refresh page | Theme preserved |

All test cases were tested manually and passed successfully.

---

## Visual Documentation
Screenshots demonstrating functionality are included in the `images/` folder.

Examples:
- Home page view
- Dark mode enabled
- Form validation error
- Successful form submission
- Image gallery interaction

---

## Conclusion
This project successfully demonstrates the implementation of **HTML, CSS, and JavaScript** to create an interactive portfolio website.
It showcases form validation, DOM manipulation, event handling, local storage usage, and UI enhancements.

---

## Author
**Nikita Bankar**
