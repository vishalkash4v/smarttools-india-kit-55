import React, { useState, useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

const BarcodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [barcodeType, setBarcodeType] = useState('CODE128');
  const [generatedBarcode, setGeneratedBarcode] = useState('');
  const canvasRef = useRef(null);

  // Simple toast replacement using alert
  const showToast = (title, description, isError = false) => {
    alert(`${title}: ${description}`);
  };

  const generateBarcode = () => {
    if (!inputText.trim()) {
      showToast('Error', 'Please enter text to generate barcode.', true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      // Generate barcode using JsBarcode
      JsBarcode(canvas, inputText, {
        format: barcodeType,
        width: 2,
        height: 80,
        displayValue: true,
        fontSize: 14,
        margin: 10,
        background: '#ffffff',
        lineColor: '#000000',
      });

      setGeneratedBarcode(canvas.toDataURL('image/png'));

      showToast('Success', 'Barcode generated successfully!');
    } catch (error) {
      showToast('Error', 'Failed to generate barcode. Ensure the input is valid for the selected barcode type.', true);
    }
  };

  const downloadBarcode = () => {
    if (!generatedBarcode) {
      showToast('Error', 'Please generate a barcode first.', true);
      return;
    }

    const link = document.createElement('a');
    link.download = `barcode-${barcodeType}.png`;
    link.href = generatedBarcode;
    link.click();

    showToast('Downloaded', 'Barcode image has been downloaded.');
  };

  const copyImage = async () => {
    if (!generatedBarcode) {
      showToast('Error', 'Please generate a barcode first.', true);
      return;
    }

    try {
      const response = await fetch(generatedBarcode);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ]);
      showToast('Copied', 'Barcode image copied to clipboard.');
    } catch (error) {
      showToast('Error', 'Failed to copy image to clipboard.', true);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <div className="bg-white dark:bg-gray-800 border rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-2">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h2M3 14h2m2-8h2m-2 4h2m-2 4h2m4-8h2m-2 4h2m-2 4h2m4-8h2m-2 4h2m-2 4h2"></path>
          </svg>
          <h2 className="text-xl font-semibold">Barcode Generator</h2>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Generate barcodes from text for various applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="input-text" className="block text-sm font-medium mb-2">
              Text to Encode
            </label>
            <input
              id="input-text"
              type="text"
              placeholder="Enter text for barcode..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              maxLength={100}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Maximum 100 characters</p>
          </div>
          <div>
            <label htmlFor="barcode-type" className="block text-sm font-medium mb-2">
              Barcode Type
            </label>
            <select
              id="barcode-type"
              value={barcodeType}
              onChange={(e) => setBarcodeType(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="CODE128">Code 128</option>
              <option value="CODE39">Code 39</option>
              <option value="EAN13">EAN-13</option>
              <option value="UPC">UPC</option>
            </select>
          </div>
        </div>
        <button
          onClick={generateBarcode}
          className="w-full mt-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h2M3 14h2m2-8h2m-2 4h2m-2 4h2m4-8h2m-2 4h2m-2 4h2m4-8h2m-2 4h2m-2 4h2"></path>
          </svg>
          Generate Barcode
        </button>
        <canvas ref={canvasRef} className="hidden" />
        {generatedBarcode && (
          <div className="mt-6 bg-gray-100 dark:bg-gray-700 border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Generated Barcode</h3>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded border max-w-full overflow-auto">
                <img src={generatedBarcode} alt="Generated Barcode" className="max-w-full h-auto" />
              </div>
            </div>
            <div className="flex gap-3 justify-center mt-4 flex-wrap">
              <button
                onClick={downloadBarcode}
                className="p-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-2"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m-4-4l4 4 4-4"></path>
                </svg>
                Download PNG
              </button>
              <button
                onClick={copyImage}
                className="p-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-2"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6a2 2 0 002-2V7m-2 0H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9"></path>
                </svg>
                Copy Image
              </button>
            </div>
          </div>
        )}
        <div className="mt-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-semibold mb-2">About Barcodes</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Barcodes are machine-readable optical labels that contain information about the item to which they are attached.
            They are widely used in retail, inventory management, and logistics for quick and accurate data capture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BarcodeGenerator;