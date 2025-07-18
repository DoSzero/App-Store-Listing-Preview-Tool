import React from 'react';

const DevicePreview = ({ appName, subtitle, icon, screenshots }) => {
  return (
    <div className="bg-white border rounded-lg shadow p-4 h-fit flex flex-col items-center">
      {icon && <img src={icon} alt="icon" className="w-20 h-20 mb-2 rounded" />}
      <div className="text-xl font-semibold">{appName}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
      <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">Get</button>
      <div className="flex mt-4 gap-2 overflow-x-auto w-full">
        {screenshots.map((img, index) => (
          <img key={index} src={img} alt={`ss-${index}`} className="h-40 rounded border" />
        ))}
      </div>
    </div>
  );
};

export default DevicePreview;
