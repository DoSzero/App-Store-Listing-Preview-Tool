import React, { useRef } from 'react';

const IconUploader = ({ icon, setIcon }) => {
  const inputRef = useRef();

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setIcon(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">App Icon</label>
      <input type="file" accept="image/*" onChange={handleIconChange} ref={inputRef} />
      {icon && <img src={icon} alt="App Icon" className="mt-2 w-20 h-20 rounded shadow" />}
    </div>
  );
};

export default IconUploader;
