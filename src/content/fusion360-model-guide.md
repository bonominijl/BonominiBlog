# Using Fusion 360 Models with the Portfolio Site

This guide explains how to export Fusion 360 models for use with the `<model-viewer>` component used on the portfolio site.

## Supported Formats

The `<model-viewer>` component used on this site supports 3D models in the following formats:

- **glTF/GLB** (preferred format) - Binary format that includes geometry, textures, animations
- **USDZ** (for iOS AR experiences)

## Exporting from Fusion 360

### Method 1: Direct Export to glTF/GLB

1. In Fusion 360, go to **File > Export**
2. Select **glTF (.gltf, .glb)** as the file format
3. Choose **GLB** option for a single binary file (recommended)
4. Configure export settings:
   - Enable **Export textures** if your model has materials
   - Set appropriate scale (usually meters)
   - Choose which components to include
5. Click **Export** and save the file

### Method 2: Using an Intermediate Format

If direct glTF export isn't available in your version:

1. Export your model as **OBJ** format from Fusion 360
2. Use an online converter like [glTF Tools](https://gltf.report/) or [Sketchfab](https://sketchfab.com/) to convert OBJ to glTF/GLB

## Adding Models to the Portfolio

1. Place your exported `.glb` file in a web-accessible location (like GitHub Pages or other hosting)
2. Create a new JSON file in `src/content/models/` following this template:
   ```json
   {
     "title": "Your Model Name",
     "modelUrl": "https://path-to-your-model/model.glb",
     "posterUrl": "https://path-to-your-thumbnail/thumbnail.webp", 
     "description": "Description of your model",
     "ar": true,
     "autoRotate": true,
     "cameraControls": true,
     "tags": ["fusion360", "your-tags"]
   }
   ```

## Creating Preview Images

For the `posterUrl`, you can:
1. Take a screenshot of your model in Fusion 360
2. Convert the image to WebP format for better performance
3. Host it alongside your GLB file

## Optimizing Models

For better web performance:
- Simplify complex geometries 
- Aim for file sizes under 10MB
- Use compressed textures
- Remove unnecessary components
