export const loadComponent = (componentPath, placeholderId) => {
  const placeholder = document.getElementById(placeholderId);
  if (placeholder) {
    fetch(componentPath)
      .then((response) =>
        response.ok ? response.text() : Promise.reject("File not found")
      )
      .then((html) => {
        placeholder.innerHTML = html;
      })
      .catch((error) => {
        console.error(`Could not load ${componentPath}:`, error);
      });
  }
};
