import * as React from "react";

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={
        "block w-full rounded-md border border-[#fdb86b] bg-[#192233] text-[#fdb86b] px-3 py-2 focus:outline-none focus:border-[#fdb86b] transition-colors " +
        (className || "")
      }
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
