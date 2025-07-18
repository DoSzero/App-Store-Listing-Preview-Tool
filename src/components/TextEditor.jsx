import React from 'react';

const TextEditor = ({ appName, setAppName, subtitle, setSubtitle }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <label className="block mb-2 font-medium">App Name</label>
      <input
        type="text"
        value={appName}
        onChange={(e) => setAppName(e.target.value.slice(0, 30))}
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-2 font-medium">Subtitle</label>
      <input
        type="text"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value.slice(0, 30))}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default TextEditor;
