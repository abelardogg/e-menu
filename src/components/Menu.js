import React from "react";

export default function Menu(props){
    const menuByCategories = props.menuByCategories;
    const result = menuByCategories.map((m, index)=>{
        return <div key={index} className={`menu`}>
            <h2>{m.categoryName}</h2>
            <MenuItems menuItems={m.menu}/>
        </div>
    });
    return result;
}

function MenuItems(props){
    return props.menuItems.map((i, index) => {
        return (<div key={index} className={`menu-item`}>
            <h4 className={'menu-item-name'}>{i.name}</h4>
            <p className={'menu-item-description'}>{i.description}</p>
            <p className={'menu-item-size'}>{i.size}</p>
            <p className={'menu-item-price'}>${i.price}</p>
        </div>);
    });
}