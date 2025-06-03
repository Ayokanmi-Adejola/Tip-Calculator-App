# Tip Calculator App

A fully functional tip calculator app built with HTML, CSS, and JavaScript. This project is a solution to the [Frontend Mentor Tip Calculator App challenge](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).


## ✨ Features

- **Real-time calculations** - Results update instantly as you type
- **Multiple tip options** - Choose from preset percentages (5%, 10%, 15%, 25%, 50%) or enter a custom amount
- **Input validation** - Error handling for invalid inputs with helpful messages
- **Responsive design** - Optimized for both mobile (375px) and desktop (1440px) screens
- **Interactive UI** - Hover states and visual feedback for all interactive elements
- **Reset functionality** - Clear all inputs and start fresh with one click
- **Accessibility** - Proper semantic HTML, labels, and keyboard navigation

## 🖼️ Design Preview

![Design preview for the Tip calculator app coding challenge](./preview.jpg)

## 🛠️ Built With

- **HTML5** - Semantic markup with proper form elements
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript** - No frameworks, pure JavaScript for functionality
- **Google Fonts** - Space Mono font family

## 📱 Screenshots

The app includes:
- Bill input with dollar icon
- Tip selection buttons with active states
- Number of people input with person icon
- Results display showing tip amount and total per person
- Reset button that enables/disables based on input state

## 🎯 Functionality

### Core Features
- Calculate tip amount per person based on bill total, tip percentage, and number of people
- Handle edge cases (zero values, negative numbers, invalid inputs)
- Provide visual feedback for errors and active states
- Reset all calculations and inputs

### Input Validation
- Bill amount: Must be positive number
- Tip percentage: Can be 0 or positive
- Number of people: Must be at least 1
- Error messages display for invalid inputs

## 🎨 Design Specifications

### Colors
- **Primary Green**: `hsl(172, 67%, 45%)`
- **Dark Green**: `hsl(183, 100%, 15%)`
- **Grey variants**: `hsl(186, 14%, 43%)`, `hsl(184, 14%, 56%)`, `hsl(185, 41%, 84%)`, `hsl(189, 47%, 97%)`
- **White**: `hsl(0, 100%, 100%)`

### Typography
- **Font Family**: Space Mono
- **Font Weight**: 700
- **Input Font Size**: 24px

### Layout
- **Mobile**: 375px design width
- **Desktop**: 1440px design width
- **Responsive**: Adapts to all screen sizes from 320px to large screens

## 📁 Project Structure

```
tip-calculator-app/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── test.html           # Test suite for calculations
├── images/             # SVG icons and favicon
├── design/             # Design reference images
└── README.md           # This file
```

## 🧪 Testing

A comprehensive test suite is included in `test.html` that verifies:
- Basic tip calculations
- Edge cases (zero values, high percentages)
- Invalid input handling
- Decimal precision
- Multiple scenarios

Run the tests by opening `test.html` in your browser.

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Start calculating** tips by:
   - Entering a bill amount
   - Selecting a tip percentage
   - Entering the number of people
   - Viewing the calculated results

## 💡 Key Learning Points

- **Form validation** and user input handling
- **Real-time calculations** with JavaScript event listeners
- **Responsive design** with CSS Grid and Flexbox
- **State management** in vanilla JavaScript
- **Accessibility** best practices
- **Error handling** and user feedback

## 🎯 Challenge Requirements Met

✅ View optimal layout for different screen sizes
✅ See hover states for all interactive elements
✅ Calculate correct tip and total cost per person
✅ Handle invalid inputs with proper error messages
✅ Reset functionality to clear all inputs

## Author

- Frontend Mentor - [Ayokanmi Adejola](https://www.frontendmentor.io/profile/Adejola-Ayokanmi)

