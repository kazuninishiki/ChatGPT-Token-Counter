// content.js

// Function to count tokens (this is a simplistic approach; you may need a more complex algorithm)
function countTokens(text) {
    return text.split(/\s+/).filter(Boolean).length;
  }
  
  // Function to create the token count label
  function createTokenLabel() {
    const chatInputBox = document.querySelector('textarea');
    
    if (!chatInputBox) return;
  
    // Create a new label element
    const tokenLabel = document.createElement('span');
    tokenLabel.id = 'token-count-label';
    tokenLabel.style.marginLeft = '10px';
    tokenLabel.style.fontSize = '14px'; // Increase font size by 2 points (default is 12px, now 14px)
    tokenLabel.style.color = '#FFFFFF'; // Set font color to white
    tokenLabel.style.fontWeight = 'bold'; // Make the text bold
    tokenLabel.style.position = 'absolute';
    tokenLabel.style.right = '10px'; // Align to the right
    tokenLabel.style.bottom = '10px'; // Align to the bottom
    tokenLabel.style.pointerEvents = 'none'; // Ensure it doesn't interfere with typing
    
    // Append the label to the input box's parent container
    chatInputBox.parentNode.style.position = 'relative'; // Ensure the parent is positioned
    chatInputBox.parentNode.appendChild(tokenLabel);
    
    return tokenLabel;
  }
  
  // Function to update the token count
  function updateTokenCount() {
    const chatInputBox = document.querySelector('textarea');
    const tokenLabel = document.getElementById('token-count-label') || createTokenLabel();
    
    if (chatInputBox && tokenLabel) {
      const tokenCount = countTokens(chatInputBox.value);
      tokenLabel.textContent = `Tokens: ${tokenCount}`;
    }
  }
  
  // Observe the textarea for input events and update the token count
  function observeInputBox() {
    const chatInputBox = document.querySelector('textarea');
    
    if (chatInputBox) {
      chatInputBox.addEventListener('input', updateTokenCount);
    }
  }
  
  // Initialize the extension by observing the input box
  function init() {
    const observer = new MutationObserver(() => {
      observeInputBox();
      updateTokenCount(); // Initial update
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  // Run the initialization
  init();
  