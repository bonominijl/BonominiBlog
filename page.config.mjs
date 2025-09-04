import { formatTags } from './src/utils/cms-helpers.js';

/**
 * PageCMS configuration
 * Handles data transformations before content is saved
 */
export default {
  // Handle content transformations
  transforms: {
    // For the gallery collection
    gallery: {
      beforeSave: (data) => {
        // Transform tags if needed
        if (data.tags) {
          data.tags = formatTags(data.tags);
        }
        return data;
      }
    },
    // For the posts collection (just in case)
    posts: {
      beforeSave: (data) => {
        // Transform tags if needed
        if (data.tags) {
          data.tags = formatTags(data.tags);
        }
        return data;
      }
    },
    // For the models collection (just in case)
    models: {
      beforeSave: (data) => {
        // Transform tags if needed
        if (data.tags) {
          data.tags = formatTags(data.tags);
        }
        return data;
      }
    }
  }
};
