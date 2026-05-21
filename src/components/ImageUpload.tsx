"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "postImage";
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value) {
    return (
      <div className="relative size-40">
        <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].ufsUrl);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
      appearance={{
    container: "border-2 border-dashed border-border rounded-xl p-8 cursor-pointer hover:bg-muted/50 transition",
    uploadIcon: "text-muted-foreground w-16 h-16",
    label: "text-foreground font-semibold mt-4",
    allowedContent: "text-muted-foreground text-sm mt-1",
    button: "bg-primary text-primary-foreground rounded-md px-6 py-2 mt-4 text-sm font-medium",
  }}
    />
  );
}
export default ImageUpload;