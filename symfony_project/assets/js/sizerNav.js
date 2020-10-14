import React, { useState } from 'react';

const SizerNav = ({ sizerData, sizerList, updateSizerList, unit, updateUnit }) => {
    const sizerListIds = sizerList.map(({ ...item }) => item.id);

    const categoryArray = sizerData
        .map((item) => item.category)
        .filter((item, index, array) => item ? array.indexOf(item) === index : false);

    const [navCategory, updateNavCategory] = useState(categoryArray[0]);

    const changeCategory = (category) => {
        updateNavCategory(category);
    }

    const changeUnit = (unit) => {
        updateUnit(unit);
    }

    const clickHandler = (item, isItemUsed) => {
        if (isItemUsed) {
            const itemId = item.id;
            const reducedList = sizerList.filter(function(obj) {
                return obj.id !== itemId;
            });
        
            updateSizerList(sizerList => reducedList);
        } else {
            updateSizerList(sizerList => [...sizerList, item]);
        }
    }

    return (
        <aside className="sidebar">
            <div className="units">
                <span onClick={() => changeUnit('ft')} className={`unit ${unit == 'ft' ? 'unit--selected' : ''}`}>Feet</span>
                <span onClick={() => changeUnit('m')} className={`unit ${unit == 'm' ? 'unit--selected' : ''}`}>Meters</span>
            </div>
    
            <nav className="picker">
                {categoryArray.map((category) => {
                    return (
                        <div key={category} className={`picker-category ${navCategory == category ? 'picker-category--selected' : ''}`}>
                            <h5 className="picker-title" onClick={() => changeCategory(category)}>
                                {category}
                            </h5>
                            <ul className="picker-list">
                                {sizerData.map((item) => {
                                    const itemCategory = item.category;
                                    const itemId = item.id;
                                    const itemName = item.name;
    
                                    const isItemUsed = sizerListIds.includes(itemId);
    
                                    if (category === itemCategory) {
                                        return (
                                            <li key={itemId} className={`picker-listItem ${isItemUsed ? 'picker-listItem--disabled' : ''}`} 
                                            onClick={() => clickHandler(item, isItemUsed)}>
                                                {itemName}
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}

export default SizerNav;
