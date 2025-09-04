/**
 * Helper functions for CMS operations
 */

/**
 * Ensures that tags are properly formatted as an array
 * PageCMS might send tags as a comma-separated string, so we need to handle that
 * 
 * @param {string|string[]} tagsInput - Tags input from the CMS (either array or string)
 * @returns {string[]} Properly formatted tags array
 */
export function formatTags(tagsInput) {
  // If it's already an array, return it
  if (Array.isArray(tagsInput)) {
    return tagsInput;
  }
  
  // If it's an empty string or undefined/null, return an empty array
  if (!tagsInput) {
    return [];
  }
  
  // If it's a string, split by commas and trim whitespace
  if (typeof tagsInput === 'string') {
    return tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');
  }
  
  // Fallback: return empty array
  return [];
}
