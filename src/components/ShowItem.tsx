import React from 'react';
import styled from 'styled-components';

import { Item } from '../types';

interface ShowItemProps {
    item: Item;
}

const ShowItem = ({ item }: ShowItemProps) => {
    return (
        <ItemBox>
            <ItemTitle>{item.name.title}</ItemTitle>

            <ItemImage src={item.picture.large} />
            <ItemNaming>
                {item.name.first} - {item.name.last}
            </ItemNaming>
        </ItemBox>
    );
};

export default ShowItem;

const ItemBox = styled.div`
    margin-bottom: 10px;
`;

const ItemTitle = styled.div`
    font-size: 24px;
    color: #000;
    text-align: center;
`;

const ItemNaming = styled.div`
    font-size: 18px;
    color: #ccc;
`;

const ItemImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 6px;
`;
