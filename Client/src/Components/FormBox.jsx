import React from "react";
// import { useState } from "react";

const FormBox = (props) => {
  return (
    <div className="flex w-full">
      <form id="UploadForm" onSubmit={props.handleForm}>
        <input
          className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-1 file:border-dashed hover:file:border-dotted file:text-sm file:font-semibold file:bg-green-50 file:text-violet-700 hover:file:bg-green-100"
          type="file"
          name="file"
          onChange={props.handleFile}
        />
        <button className="file-upload-button" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default FormBox;
