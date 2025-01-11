import React from 'react'

export default function MenuItem({item}) {
    const {name, image, price, recipe} = item;
  return (
    <div>
        <img src={image} alt={name} />
        <h1> {name} ----- </h1>
        <p> {recipe} </p>
        <p> {price} </p>
    </div>
  )
}
