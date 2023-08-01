# Image Gallery Viewer

A React-based Image Gallery Viewer that integrates with OpenSeadragon to provide deep zoom capabilities for high-resolution images. The project includes a set of components to handle image viewing, zooming, navigation between multiple images, and full-screen capabilities.

CodeSandbox Project: [Link](https://codesandbox.io/p/github/fahmyfarahat/image-gallery-viewer/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clksbq72f000h3b6pp51irzwb%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clksbq72f000c3b6pkw5wry27%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clksbq72f000g3b6pfk1zpxqz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clksbq72f000e3b6p7o60knaa%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clksbq72f000c3b6pkw5wry27%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clksbq72f000b3b6p3f2tgz1c%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clksbq72f000c3b6pkw5wry27%2522%252C%2522activeTabId%2522%253A%2522clksbq72f000b3b6p3f2tgz1c%2522%257D%252C%2522clksbq72f000e3b6p7o60knaa%2522%253A%257B%2522id%2522%253A%2522clksbq72f000e3b6p7o60knaa%2522%252C%2522activeTabId%2522%253A%2522clksbqyok011c3b6p25x3ut8y%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522clksbqyok011c3b6p25x3ut8y%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clksbq72f000g3b6pfk1zpxqz%2522%253A%257B%2522id%2522%253A%2522clksbq72f000g3b6pfk1zpxqz%2522%252C%2522activeTabId%2522%253A%2522clksbqvcm00pv3b6plgmjgjer%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clksbq72f000f3b6prbzzwtdb%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clksbq773001bhrhg188jd3be%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clksbqvcm00pv3b6plgmjgjer%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

Running Demo: [Link](https://df7ndw-3000.csb.app/)

---

## ImageGallery Component

The `ImageGallery` component serves as the core of the image gallery viewer.

### Features

- **Image Navigation:** Navigate through multiple images.
- **Zooming Capabilities:** Zoom in and out of images for detailed viewing.
- **Full-Screen Mode:** Full-screen viewing capabilities.
- **Thumbnail Previews:** Thumbnail view to easily switch between images.

### Props

| Prop          | Type      | Default   | Description                                             |
| ------------- | --------- | --------- | ------------------------------------------------------- |
| `iiifUrls`    | `array`   | Required  | An array of URLs pointing to the IIIF-compliant images. |
| `width`       | `string`  | `"800px"` | The width of the viewer.                                |
| `height`      | `string`  | `"500px"` | The height of the viewer.                               |
| `showToolbar` | `boolean` | `true`    | Toggle the display of the toolbar.                      |

### Usage

```jsx
<ImageGallery
  iiifUrls={imageUrls}
  width="800px"
  height="600px"
  showToolbar={true}
/>
```

### Installation Guide for the App

1. **Clone the Repository:** First, you'll need to clone the project repository to your local machine.

   ```bash
   git clone git@github.com:fahmyfarahat/image-gallery-viewer.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd image-gallery-viewer
   ```

3. **Install Yarn (if not installed):** If you don't have Yarn installed, you can install it by running:

   ```bash
   npm install --global yarn
   ```

4. **Install Dependencies:** Inside the project directory, install all the required dependencies by running:

   ```bash
   yarn install
   ```

5. **Start the Development Server:** You can now start the development server by running:

   ```bash
   yarn start
   ```

   This will start the server, and the app should be accessible at `http://localhost:3000` or another port if you've configured it differently.

---

### What are IIIF Images?

IIIF Images refer to images that are hosted and served using the IIIF standards. These images are accessible through a set of APIs that enable users to perform various operations on them. The IIIF standards allow for:

- **Deep Zooming:** Users can zoom into high-resolution images to see fine details.
- **Image Manipulation:** Functions such as rotation, mirroring, and color adjustments.
- **Interoperability:** Different IIIF-compliant viewers can access and interact with IIIF images, allowing institutions to share and collaborate on image resources.
- **Annotations:** Ability to add commentary or other forms of linked information directly on the image.

### How to Access IIIF Images from The Getty

The Getty is among the cultural institutions that have adopted the IIIF standards for their digital collections. Here's how you can access IIIF images from The Getty:

1. **Visit The Getty's Website:** Navigate to [The Getty's digital collection](https://www.getty.edu/).

2. **Search for Images:** Utilize their search functionality to find the images you're interested in.

3. **Access IIIF Manifests:** Many digital objects on The Getty's site will have IIIF icons or links that lead to the IIIF manifests. A manifest is a JSON document that describes the structure and layout of a complex image or object.

4. **Use in IIIF-Compatible Viewers:** The manifests can be used in any IIIF-compatible viewer, such as OpenSeadragon, to view and manipulate the images.

5. **API Access:** Developers can access the IIIF images programmatically via The Getty's APIs, allowing for integration into custom web applications or other digital projects.
