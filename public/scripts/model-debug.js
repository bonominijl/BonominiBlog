/**
 * Model-viewer debug helper
 * This script helps debug model-viewer loading issues
 */

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Model Debug Script loaded');
  
  // Check if model-viewer is defined
  if (customElements.get('model-viewer')) {
    console.log('✓ Model-viewer custom element is registered');
  } else {
    console.error('✗ Model-viewer custom element is NOT registered');
  }
  
  // Get all model-viewer elements
  const modelViewers = document.querySelectorAll('model-viewer');
  console.log(`Found ${modelViewers.length} model-viewer elements`);
  
  // Check each model's source
  modelViewers.forEach((modelViewer, index) => {
    const src = modelViewer.getAttribute('src');
    console.log(`Model #${index + 1} source: ${src}`);
    
    // Test if the model file exists
    fetch(src, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          console.log(`✓ Model #${index + 1} file exists (${src})`);
          
          // Try to get the file size
          return response.headers.get('content-length');
        } else {
          console.error(`✗ Model #${index + 1} file NOT found (${src})`);
          return null;
        }
      })
      .then(size => {
        if (size) {
          const sizeInMB = (parseInt(size) / (1024 * 1024)).toFixed(2);
          console.log(`Model #${index + 1} size: ${sizeInMB}MB`);
          
          if (parseFloat(sizeInMB) > 10) {
            console.warn(`⚠️ Model #${index + 1} is large (${sizeInMB}MB). Consider optimizing it.`);
          }
        }
      })
      .catch(error => {
        console.error(`Error checking model #${index + 1}:`, error);
      });
  });
});
