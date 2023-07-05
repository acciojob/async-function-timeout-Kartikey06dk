//your JS code here. If required.
// Get the required elements from the HTML document
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Create an async function that waits for a specified time before resolving with a message
async function displayMessageWithDelay(message, delay) {
  // Wrap the setTimeout function in a Promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Attach a click event listener to the button
btn.addEventListener('click', async () => {
  // Get the input values
  const message = textInput.value;
  const delay = parseInt(delayInput.value);

  // Call the async function to display the message after the specified delay
  const displayedMessage = await displayMessageWithDelay(message, delay);

  // Update the output div with the displayed message
  outputDiv.textContent = displayedMessage;
});
