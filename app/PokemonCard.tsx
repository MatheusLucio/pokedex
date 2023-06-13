import React from 'react';
import Image from 'next/image';

export default function PokemonCard({ name, type, image, icon }) {
  return (
    <div className={styles.Pokemon}>
      <h2>{name}</h2>
      <p>
        <Image src={icon} alt={`Icon${name}`} width={30} height={25} />
      </p>
      <Image src={image} alt={name} width={100} height={80} />
      <p className={styles.Eletrico}>{type}</p
