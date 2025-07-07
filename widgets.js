(function () {
  // Create a container for the widget
  const widgetContainer = document.createElement('div');
  widgetContainer.id = 'my-widget';
  widgetContainer.style.border = '2px solid #007bff';
  widgetContainer.style.padding = '16px';
  widgetContainer.style.borderRadius = '8px';
  widgetContainer.style.fontFamily = 'Arial, sans-serif';
  widgetContainer.style.maxWidth = '400px';
  widgetContainer.style.margin = '10px auto';
  widgetContainer.innerHTML = `<h3>Loading Widget...</h3>`;

  // Append to the page (you could append to a specific element if needed)
  document.currentScript.parentNode.insertBefore(widgetContainer, document.currentScript);

  // Simulate fetching data or route rendering
  function renderWidget() {
    widgetContainer.innerHTML = `
      <h2>Hello from Widget!</h2>
      <p>This content is rendered via <code>widget.js</code>.</p>
      <button onclick="alert('Thanks for clicking!')">Click me</button>
    `;
  }

  // Simulate delay or fetch
  setTimeout(renderWidget, 500); // You can replace this with a real fetch()
})();
