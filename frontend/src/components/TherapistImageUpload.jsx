import React, { useState } from 'react';
import axios from 'axios';

function TherapistImageUpload() {
  const [file, setFile] = useState(null);
  const therapistId = 'YOUR_THERAPIST_ID'; // Replace with real one

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post(
        `http://localhost:5000/api/therapists/${therapistId}/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('Upload successful!');
      console.log(res.data);
    } catch (err) {
      console.error('Upload error:', err);
    }
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Upload Therapist Profile Picture</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default TherapistImageUpload;
