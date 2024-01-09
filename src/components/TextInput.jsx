import React, { useState } from "react";

const TextInput = ({ value, setter }) => {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <label className="text-xl font-semibold">Name</label>
      <input
        type="text"
        placeholder="Type here"
        value={value}
        onChange={(e) => setter(e.target.value)}
        className="input input-bordered input-info w-full max-w-xs"
      />
    </div>
  );
};

export default TextInput;
