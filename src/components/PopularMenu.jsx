import React, { useEffect, useState } from 'react'
import SectionTitle from '../shared/SectionTitle'
import MenuItem from '../shared/MenuItem';

export default function PopularMenu() {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item=> item.category === 'popular');
            setMenu(popularItems)})
    }, []);
  return (
    <div>
        <SectionTitle heading={'From Our Menu'} subHeading={'Our Popular Items'} ></SectionTitle>
        <div>
            {
                menu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    </div>
  )
}
