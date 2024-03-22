import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  id: string;
  border?: boolean;
  dark?: boolean;
}

const Wrapper = ({ children, id, border, dark }: WrapperProps) => {
  return (
    <section
      id={id}
      className={` ${border ? "border-b-2 border-b-[#dde1e4]" : ""} ${
        dark ? "bg-section-dark-color" : "bg-white"
      } py-24`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
};

export default Wrapper;
