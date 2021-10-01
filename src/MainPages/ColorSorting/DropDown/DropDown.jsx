import React, { useContext, useState } from 'react';
import { Dropdown, Header, Icon } from 'semantic-ui-react';

import { SortingContext } from '../../../Store/SortingContext';

import classes from './DropDown.module.css';


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
    const [selectedValue, setSeletedValue] = useState("Hue");
    const [, setSortBy] = useContext(SortingContext);

    function handleSelection(_, data) {
        setSeletedValue(data.value);
        setSortBy(data.value);
    }

    return (
        <div className={classes.DropDown}>
            <Header as='h3' >
                <Icon name='sort amount down' />
                <Header.Content>
                    Explore the sorting result by{' '}
                    <Dropdown
                        inline
                        options={sortOptions}
                        value={selectedValue}
                        onChange={(event, data) => handleSelection(event, data)}
                    />
                </Header.Content>
            </Header></div>
    );
}

export default DropDown