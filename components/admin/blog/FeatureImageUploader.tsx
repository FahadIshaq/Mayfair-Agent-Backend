"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploaderProps {
  fileBuffer: ArrayBuffer | null;
  setFileBuffer: React.Dispatch<React.SetStateAction<ArrayBuffer | null>>;
}

const FeaturedImageUploader: React.FC<ImageUploaderProps> = ({
  fileBuffer,
  setFileBuffer,
}) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
      readFileAsBuffer(acceptedFiles[0]);
    }
  };

  const readFileAsBuffer = (file: File) => {
    const reader = new FileReader();

    // Success handler for reading the file
    reader.onload = (event) => {
      if (event.target && event.target.result instanceof ArrayBuffer) {
        setFileBuffer(event.target.result);
      }
    };

    // Error handler for reading the file
    reader.onerror = (error) => {
      console.error("Error reading file:", error);
      // You can display an error message to the user here (e.g., "Failed to read image")
    };

    reader.readAsArrayBuffer(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <label className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600 font-semibold">Drag Image</p>
          <p className="text-xs text-gray-500">
            Click to upload an image (should be under 10 MB)
          </p>
        </div>
        <input
          {...getInputProps()}
          accept="image/png, image/jpeg"
          type="file"
          className="hidden"
        />
      </label>

      {uploadedFile && (
        <div>
          <p className="font-medium my-2 mt-6 text-muted-foreground text-sm">
            Uploaded File
          </p>
          <div className="flex justify-between gap-2 rounded-lg overflow-hidden border border-slate-100 group hover:pr-0 pr-2 hover:border-slate-300 transition-all">
            <div className="flex items-center flex-1 p-2">
              <div className="text-white">
                {uploadedFile.type.includes("image") && (
                  <img
                    src={URL.createObjectURL(uploadedFile)}
                    alt={uploadedFile.name}
                    className="w-10 h-10 rounded-md"
                  />
                )}
              </div>
              <div className="w-full ml-2 space-y-1">
                <div className="text-sm flex justify-between">
                  <p className="text-muted-foreground ">
                    {uploadedFile.name.slice(0, 25)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedImageUploader;
