import React, { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} {...props} />
    </div>
  );
});
