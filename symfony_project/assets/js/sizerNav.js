import React, { useState } from 'react';

const SizerNav = ({ sizerData, sizerList, updateSizerList, unit, updateUnit }) => {
    const sizerListIds = sizerList.map(({ ...item }) => item.id);

    const categoryArray = sizerData
        .map((item) => item.category)
        .filter((item, index, array) => item ? array.indexOf(item) === index : false)
        .sort();

    const [navCategory, updateNavCategory] = useState(categoryArray[0]);

    const changeCategory = (category) => {
        updateNavCategory(category);
    }

    const changeUnit = (unit) => {
        updateUnit(unit);
    }

    const toggleItem = (item, isItemUsed) => {
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
        <aside className="SizerNavContainer">
            <div className="SizerNavUnits">
                <span onClick={() => changeUnit('ft')} className={`SizerNavUnits-unit ${unit == 'ft' ? 'SizerNavUnits-unit--selected' : ''}`}>Feet</span>
                <span onClick={() => changeUnit('m')} className={`SizerNavUnits-unit ${unit == 'm' ? 'SizerNavUnits-unit--selected' : ''}`}>Meters</span>
            </div>
    
            <nav className="SizerNav">
                {categoryArray.map((category) => {
                    return (
                        <div key={category} className={`SizerNav-category ${navCategory == category ? 'SizerNav-category--selected' : ''}`}>
                            <h5 className="SizerNav-title" onClick={() => changeCategory(category)}>
                                {category}
                            </h5>
                            <ul className="SizerNav-list">
                                {sizerData
                                    .sort((a, b) => a.name > b.name ? 1 : -1)
                                    .map((item) => {
                                    const itemCategory = item.category;
                                    const itemId = item.id;
                                    const itemName = item.name;
    
                                    const isItemUsed = sizerListIds.includes(itemId);
    
                                    if (category === itemCategory) {
                                        return (
                                            <li key={itemId} className={`SizerNav-listItem ${isItemUsed ? 'SizerNav-listItem--disabled' : ''}`} 
                                            onClick={() => toggleItem(item, isItemUsed)}>
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
