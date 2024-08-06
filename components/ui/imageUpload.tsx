import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Input from "./Input";

export default function ImageUpload({
  fileBuffers,
  setFileBuffers,
  uploadedFiles,
  setUploadedFiles,
}: {
  fileBuffers: ArrayBuffer[];
  setFileBuffers: React.Dispatch<React.SetStateAction<ArrayBuffer[]>>;
  uploadedFiles: File[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<File[]>>;
}) {
  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFiles((prevUploadedFiles) => [
      ...prevUploadedFiles,
      ...acceptedFiles,
    ]);
    const buffers = acceptedFiles.map((file) => readFileAsBuffer(file));
    Promise.all(buffers).then((bufferArray) => {
      const updatedBuffers = [...fileBuffers, ...bufferArray];
      setFileBuffers(updatedBuffers);
    });
  };

  const readFileAsBuffer = (file: File) => {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result instanceof ArrayBuffer) {
          resolve(event.target.result);
        } else {
          reject(new Error("Failed to read file as buffer"));
        }
      };
      reader.onerror = () => {
        reject(new Error("Failed to read file as buffer"));
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const removeFile = (file: File, buffer: ArrayBuffer) => {
    const updatedBuffers = fileBuffers.filter((item) => item !== buffer);
    setUploadedFiles((prevUploadedFiles) =>
      prevUploadedFiles.filter((item) => item !== file)
    );
    setFileBuffers(updatedBuffers);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div>
        <label
          {...getRootProps()}
          className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
        >
          <div className=" text-center">
            <p className="mt-2 text-sm text-gray-600">
              <span className="font-semibold">Drag Images</span>
            </p>
            <p className="text-xs text-gray-500">
              Click to upload images (image should be under 10 MB)
            </p>
          </div>
        </label>

        <Input
          {...getInputProps()}
          id="dropzone-file"
          accept="image/png, image/jpeg"
          type="file"
          className="hidden"
        />
      </div>

      {uploadedFiles.length > 0 && (
        <div>
          <p className="font-medium my-2 mt-6 text-muted-foreground text-sm">
            Uploaded Files
          </p>
          <div className="space-y-2 pr-3">
            {uploadedFiles.map((file, index) => (
              <div
                key={file.lastModified}
                className="flex justify-between gap-2 rounded-lg overflow-hidden border border-slate-100 group hover:pr-0 pr-2 hover:border-slate-300 transition-all"
              >
                <div className="flex items-center flex-1 p-2">
                  <div className="text-white">
                    {file.type.includes("image") && (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-10 h-10 rounded-md"
                      />
                    )}
                  </div>
                  <div className="w-full ml-2 space-y-1">
                    <div className="text-sm flex justify-between">
                      <p className="text-muted-foreground ">
                        {file.name.slice(0, 25)}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file, fileBuffers[index])}
                  className="bg-red-500 text-white transition-all items-center justify-center cursor-pointer px-2 hidden group-hover:flex"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
