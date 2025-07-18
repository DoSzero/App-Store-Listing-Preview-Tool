import React from 'react';
import html2canvas from 'html2canvas';

const ExportButton = () => {
  const handleExport = () => {
    const preview = document.getElementById('device-preview');
    if (preview) {
      html2canvas(preview).then(canvas => {
        const link = document.createElement('a');
        link.download = 'appstore-preview.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <button
      onClick={handleExport}
      className="mt-4 px-4 py-2 bg-green-600 text-white rounded shadow"
    >
      Скачать предпросмотр
    </button>
  );
};

export default ExportButton;
