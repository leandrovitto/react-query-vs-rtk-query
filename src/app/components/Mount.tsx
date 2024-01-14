"use client";
import React, { FC, PropsWithChildren, useState } from "react";

const Mount: FC<PropsWithChildren> = ({ children }) => {
  const [m, setM] = useState<boolean>(true);

  return (
    <div className="m-2">
      {m && <div>{children}</div>}
      {!m && (
        <div className="p-4 border-4 border-dashed border-gray-300 rounded-lg">
          Component Unmount
        </div>
      )}

      <button
        className={!m ? "btn" : "btn btn-danger"}
        onClick={() => setM((m) => !m)}
      >
        {m ? "Unmount" : "Mount"}
      </button>
    </div>
  );
};

export default Mount;
