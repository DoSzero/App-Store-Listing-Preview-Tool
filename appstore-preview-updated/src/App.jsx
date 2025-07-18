import React, { useState } from 'react';
import DevicePreview from './components/DevicePreview';
import TextEditor from './components/TextEditor';
import IconUploader from './components/IconUploader';
import ScreenshotGallery from './components/ScreenshotGallery';
import ExportButton from './components/ExportButton';

function App() {
  const [appName, setAppName] = useState("My App");
  const [subtitle, setSubtitle] = useState("Best App Ever");
  const [icon, setIcon] = useState(null);
  const [screenshots, setScreenshots] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">App Store Listing Preview</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <TextEditor appName={appName} setAppName={setAppName} subtitle={subtitle} setSubtitle={setSubtitle} />
          <IconUploader icon={icon} setIcon={setIcon} />
          <ScreenshotGallery screenshots={screenshots} setScreenshots={setScreenshots} />
          <ExportButton />
        </div>
        <div className="w-full md:w-1/2">
          <div id="device-preview">
            <DevicePreview appName={appName} subtitle={subtitle} icon={icon} screenshots={screenshots} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
