import React from "react";

type C2PopUpDarkVersionRowellipsefortynineProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const C2PopUpDarkVersionRowellipsefortynine: React.FC<
  C2PopUpDarkVersionRowellipsefortynineProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-300 h-2.5 rounded-[50%] w-2.5"></div>
        <div className="bg-gray-300 h-2.5 rounded-[50%] w-2.5"></div>
        <div className="bg-gray-300 h-2.5 rounded-[50%] w-2.5"></div>
      </div>
    </>
  );
};

C2PopUpDarkVersionRowellipsefortynine.defaultProps = {};

export default C2PopUpDarkVersionRowellipsefortynine;
