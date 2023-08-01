import React from "react";
import MultiViewer from "./components/ImageGallery";
function App() {
  return (
    <>
      <div className="description">
        <h2>Museum Collection</h2>
      </div>

      <MultiViewer
        height="600px"
        width="100%"
        showToolbar
        iiifUrls={[
          "https://data.getty.edu/museum/api/iiif/5657/info.json",
          "https://data.getty.edu/museum/api/iiif/22322/info.json",
          "https://data.getty.edu/museum/api/iiif/43/info.json",
          "https://data.getty.edu/museum/api/iiif/403294/info.json",
        ]}
      />
    </>
  );
}

export default App;
