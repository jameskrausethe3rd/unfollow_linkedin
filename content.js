function uncheckFollowThisJob() {
  const checkbox = document.getElementById('follow-company-checkbox');

  if (checkbox && checkbox.checked) {
    checkbox.click();  // Simulates a user click to uncheck it
  }
}

// Run the function when the page loads
window.addEventListener("load", uncheckFollowThisJob);

// Observe the page for dynamically loaded elements (for LinkedIn’s AJAX content)
const observer = new MutationObserver(() => {
  uncheckFollowThisJob();
});

observer.observe(document.body, { childList: true, subtree: true });
