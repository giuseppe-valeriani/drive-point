import React from "react";
import Link from "next/link";
import "./PersonHeader.scss";

const PersonHeader = ({ name, id }) => {
  return (
    <section className="header">
      <Link href="/">
        <img src={"/icons/home.png"} width={32} height={32} />
      </Link>
      <h1 className="header__title">{name}</h1>
      <Link href={`/pupils/${id}/settings`}>
        <img src={"/icons/settings.png"} width={32} height={32} />
      </Link>
    </section>
  );
};

export default PersonHeader;
