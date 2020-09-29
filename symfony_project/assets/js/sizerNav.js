import React, { useState } from 'react';

const SizerNav = ({ sizerData, sizerList, updateSizerList, updateInfoBoxId }) => {
    const sizerListIds = sizerList.map(({ ...item }) => item.id);

    const categoryArray = sizerData
        .map((item) => item.category)
        .filter((item, index, array) => item ? array.indexOf(item) === index : false);

    const clickHandler = (item, isItemUsed) => {
        if (isItemUsed) {
            const itemId = item.id;
            const reducedList = sizerList.filter(function(obj) {
                return obj.id !== itemId;
            });
        
            updateSizerList(sizerList => reducedList);
        } else {
            updateSizerList(sizerList => [...sizerList, item]);
            updateInfoBoxId(null);
        }
    }

    return (
        <nav className="picker">
            {categoryArray.map((category) => {
                return (
                    <div key={category} className="picker-category">
                        <h5 className="picker-title">
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
    );
}

export default SizerNav;
