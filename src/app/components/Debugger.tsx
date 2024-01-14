"use client";
import React, { FC, PropsWithChildren } from "react";
import { useTimer } from "../hook/use-timer";

type Props = {
  title: string;
  subtitle?: string;
  data?: any;
};

const Debugger: FC<PropsWithChildren<Props>> = ({
  title,
  subtitle = "",
  children,
  data,
}: PropsWithChildren<Props>) => {
  return (
    <div className="m-2">
      <p className="text-lg tracking-widest items-center inline-flex w-full justify-center font-bold mx-auto text-center border-l border-r border-t  rounded-t-xl p-2 bg-gray-100">
        {title}
        <p className="text-sm ml-4">{subtitle}</p>
      </p>
      <div className="justify-center border-b border-gray-300 p-4 rounded-b-xl border bg-gray-200 p-4  ">
        {data && (
          <pre className="font-mono text-xs ">
            <code className="break-all whitespace-pre-wrap">
              {JSON.stringify(data, undefined, 2)}
            </code>
          </pre>
        )}
        {children}
      </div>
    </div>
  );
};

export default Debugger;
