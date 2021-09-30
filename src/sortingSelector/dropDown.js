import React, { useContext, useState } from 'react'
import { Dropdown, Header, Icon } from 'semantic-ui-react'
import { SortingContext } from '../store/sortingContext';

const sortOptions = [
    { key: 'random', text: 'Random', value: 'Random' },
    { key: 'r', text: 'Red', value: 'Red' },
    { key: 'g', text: 'Green', value: 'Green' },
    { key: 'b', text: 'Blue', value: 'Blue' },
    { key: 'h', text: 'Hue', value: 'Hue' },
    { key: 's', text: 'Saturation', value: 'Saturation' },
    { key: 'l', text: 'Lightness', value: 'Lightness' },
]



function DropDown() {
    const [selectedValue, setSeletedValue] = useState("random");
    const [sortBy, setSortBy] = useContext(SortingContext);

    function handleSelection(_, data) {
        setSeletedValue(data.value);
        setSortBy(data.value);
    }

    return (

        <Header as='h5'>
            <Icon name='sort amount down' />
            <Header.Content>
                Sort Color by{' '}
                <Dropdown
                    inline
                    options={sortOptions}
                    value={selectedValue}
                    onChange={(event, data) => handleSelection(event,data)}
                />
            </Header.Content>
        </Header>
    );
}

export default DropDown