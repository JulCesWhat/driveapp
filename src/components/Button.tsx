import React from "react";

export default function Buton({ buttonClass, title, onClick }: Button) {
  return <button onClick={onClick } className={`btn ${buttonClass}`}>{title}</button>;
}
