import React, { useRef } from 'react';

const ScreenshotGallery = ({ screenshots, setScreenshots }) => {
  const inputRef = useRef();

  const handleAddScreenshots = (e) => {
    const files = Array.from(e.target.files);
    const newScreens = files.slice(0, 10 - screenshots.length).map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(newScreens).then(images => {
      setScreenshots([...screenshots, ...images]);
    });
  };

  const handleRemove = (index) => {
    const updated = screenshots.filter((_, i) => i !== index);
    setScreenshots(updated);
  };

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">Screenshots</label>
      <input type="file" multiple accept="image/*" onChange={handleAddScreenshots} ref={inputRef} />
      <div className="flex gap-2 mt-2 overflow-x-auto">
        {screenshots.map((img, index) => (
          <div key={index} className="relative">
            <img src={img} alt={`screenshot-${index}`} className="h-32 rounded border" />
            <button
              className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded"
              onClick={() => handleRemove(index)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenshotGallery;
