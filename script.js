// DOM elements
const billInput = document.getElementById('bill');
const customTipInput = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetBtn = document.getElementById('reset-btn');
const billError = document.getElementById('bill-error');
const peopleError = document.getElementById('people-error');

// State
let billAmount = 0;
let tipPercentage = 0;
let numberOfPeople = 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  setupEventListeners();
  updateDisplay();
});

function setupEventListeners() {
  // Bill input
  billInput.addEventListener('input', handleBillInput);
  billInput.addEventListener('blur', validateBill);

  // Tip buttons
  tipButtons.forEach(button => {
    button.addEventListener('click', handleTipButtonClick);
  });

  // Custom tip input
  customTipInput.addEventListener('input', handleCustomTipInput);
  customTipInput.addEventListener('focus', clearTipButtons);

  // People input
  peopleInput.addEventListener('input', handlePeopleInput);
  peopleInput.addEventListener('blur', validatePeople);

  // Reset button
  resetBtn.addEventListener('click', resetCalculator);
}

function handleBillInput(e) {
  const value = parseFloat(e.target.value);
  billAmount = isNaN(value) || value < 0 ? 0 : value;
  clearError('bill');
  calculateAndUpdate();
}

function validateBill() {
  if (billInput.value && (isNaN(parseFloat(billInput.value)) || parseFloat(billInput.value) < 0)) {
    showError('bill', "Can't be negative");
  } else {
    clearError('bill');
  }
}

function handleTipButtonClick(e) {
  const tipValue = parseInt(e.target.dataset.tip);
  
  // Clear custom tip input
  customTipInput.value = '';
  
  // Remove active class from all buttons
  tipButtons.forEach(btn => btn.classList.remove('active'));
  
  // Add active class to clicked button
  e.target.classList.add('active');
  
  tipPercentage = tipValue;
  calculateAndUpdate();
}

function handleCustomTipInput(e) {
  const value = parseFloat(e.target.value);
  tipPercentage = isNaN(value) || value < 0 ? 0 : value;
  calculateAndUpdate();
}

function clearTipButtons() {
  tipButtons.forEach(btn => btn.classList.remove('active'));
}

function handlePeopleInput(e) {
  const value = parseInt(e.target.value);
  numberOfPeople = isNaN(value) || value < 1 ? 0 : value;
  clearError('people');
  calculateAndUpdate();
}

function validatePeople() {
  if (peopleInput.value && (isNaN(parseInt(peopleInput.value)) || parseInt(peopleInput.value) < 1)) {
    showError('people', "Can't be zero");
  } else {
    clearError('people');
  }
}

function showError(field, message) {
  const errorElement = document.getElementById(`${field}-error`);
  const inputElement = document.getElementById(field);
  
  errorElement.textContent = message;
  inputElement.style.borderColor = '#e17457';
}

function clearError(field) {
  const errorElement = document.getElementById(`${field}-error`);
  const inputElement = document.getElementById(field);
  
  errorElement.textContent = '';
  inputElement.style.borderColor = 'transparent';
}

function calculateAndUpdate() {
  let tipAmountPerPerson = 0;
  let totalAmountPerPerson = 0;

  if (billAmount > 0 && tipPercentage >= 0 && numberOfPeople > 0) {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
    
    tipAmountPerPerson = tipAmount / numberOfPeople;
    totalAmountPerPerson = totalAmount / numberOfPeople;
  }

  updateDisplay(tipAmountPerPerson, totalAmountPerPerson);
  updateResetButton();
}

function updateDisplay(tipAmount = 0, totalAmount = 0) {
  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
}

function updateResetButton() {
  const hasValues = billAmount > 0 || tipPercentage > 0 || numberOfPeople > 0;
  resetBtn.disabled = !hasValues;
}

function resetCalculator() {
  // Reset state
  billAmount = 0;
  tipPercentage = 0;
  numberOfPeople = 0;

  // Reset inputs
  billInput.value = '';
  customTipInput.value = '';
  peopleInput.value = '';

  // Clear active tip buttons
  tipButtons.forEach(btn => btn.classList.remove('active'));

  // Clear errors
  clearError('bill');
  clearError('people');

  // Update display
  updateDisplay();
  updateResetButton();
}

// Prevent negative values and invalid characters
function preventInvalidInput(e) {
  // Allow: backspace, delete, tab, escape, enter
  if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (e.keyCode === 65 && e.ctrlKey === true) ||
      (e.keyCode === 67 && e.ctrlKey === true) ||
      (e.keyCode === 86 && e.ctrlKey === true) ||
      (e.keyCode === 88 && e.ctrlKey === true)) {
    return;
  }
  
  // Ensure that it is a number and stop the keypress
  if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    e.preventDefault();
  }
}

// Add input validation
billInput.addEventListener('keydown', preventInvalidInput);
customTipInput.addEventListener('keydown', preventInvalidInput);
peopleInput.addEventListener('keydown', preventInvalidInput);
