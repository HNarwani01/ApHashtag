import React, { createContext, useReducer } from "react";

export const SlideList = createContext({
    currentData: [],
    addToList: () => {},
    removeFromList: () => {}
});

const slideListReducer = (currentData, Action) => {
    return currentData;
};

const defaultData = [
    {
        id: 1,
        title: "Royal Set",
        des: 'It is a Daily waer and party wear. It cimfired to use. It is double huck patten.',
        quantity: '1 Pare 2 Pcs',
        color: ["RED", "MEHROON ", "jajri"],
        material: 'cottan hosiery net work lycra lastic',
        size: [28, 30, 32, 34, 36],
        price: '₹ 135',
        img: './src/assets/c-1.png'
    },
    {
        id: 2,
        title: "Royal Set",
        des: 'It is a Daily waer and party wear. It cimfired to use. It is double huck patten.',
        quantity: '1 Pare 2 Pcs',
        color: ["RED", "MEHROON ", "jajri"],
        material: 'cottan hosiery net work lycra lastic',
        size: [28, 30, 32, 34, 36],
        price: '₹ 135',
        img: './src/assets/c-2.png'
    },
    {
        id: 3,
        title: "Royal Set",
        des: 'It is a Daily waer and party wear. It cimfired to use. It is double huck patten.',
        quantity: '1 Pare 2 Pcs',
        color: ["RED", "MEHROON ", "jajri"],
        material: 'cottan hosiery net work lycra lastic',
        size: [28, 30, 32, 34, 36],
        price: '₹ 135',
        img: './src/assets/c-3.png'
    },
    {
        id: 4,
        title: "Royal Set",
        des: 'It is a Daily waer and party wear. It cimfired to use. It is double huck patten.',
        quantity: '1 Pare 2 Pcs',
        color: ["RED", "MEHROON ", "jajri"],
        material: 'cottan hosiery net work lycra lastic',
        size: [28, 30, 32, 34, 36],
        price: '₹ 135',
        img: './src/assets/c-4.png'
    },
];

const SlideListProvider = ({ children }) => {
    const [currentData, dispatch] = useReducer(slideListReducer, defaultData);

    const addToList = () => {
        // Add functionality to add to list
    };

    const removeFromList = () => {
        // Add functionality to remove from list
    };

    return (
        <SlideList.Provider value={{ currentData, addToList, removeFromList }}>
            {children}
        </SlideList.Provider>
    );
};

export default SlideListProvider;
