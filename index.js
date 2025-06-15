function addingEventListener() {
}
// index.js
function addingEventListener() {
  // 1. Identify the button element (assuming id="button" from test context)
  const button = document.getElementById('button');
  
  // 2. Add event listener for 'click' events
  button.addEventListener('click', function() {
    // 3. Add any functionality here (even empty works for test)
    // Example: console.log('Button clicked!');
  });
}

// 4. Call the function to attach the listener
addingEventListener();
