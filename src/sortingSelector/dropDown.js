import React, { useState, createContext, useContext } from 'react'
import { Dropdown, Header, Icon } from 'semantic-ui-react'

const sortOptions = [
    { key: 'r', text: 'Red', value: 'Red' },
    { key: 'g', text: 'Green', value: 'Green' },
    { key: 'b', text: 'Blue', value: 'Blue' },
    { key: 'h', text: 'Hue', value: 'Hue' },
    { key: 's', text: 'Saturation', value: 'Saturation' },
    { key: 'l', text: 'Lightness', value: 'Lightness' },
]


    export const SortingContext = createContext();

function DropDown() {
    const [selectedValue, setSeletedValue] = useState("");
    // const  setSortingContext  = useContext(SortingContext);


    function handleSelection(_, data) {
        setSeletedValue(data.value);
        console.log("selected ",selectedValue);
        // (data) => setSortingContext(data.value)    
    }

    return (
        <SortingContext.Provider
        value={ selectedValue}>
        <Header as='h5'>
            <Icon name='sort amount down' />
            <Header.Content>
                Sort Color by{' '}
                <Dropdown
                    inline
                    options={sortOptions}
                    value={selectedValue}
                    onChange={(event, data) => handleSelection(event, data)}
                />
            </Header.Content>
        </Header>
        </SortingContext.Provider>
    );
}

export default DropDown