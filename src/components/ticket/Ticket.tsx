import React from "react";
import styles from "@styles/ticket.module.css"

const Ticket: React.FC<{ name: string; movie: string }> = ({ name, movie }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.fullname}>{name}</h2>
      <h1 className={styles.movieTitle}>{movie}</h1>
    </div>
  );
};

export default Ticket;
