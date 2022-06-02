import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { API } from '../helpers/api';
import { Item } from '../types';
import ShowItem from './ShowItem';

const Content = () => {
    const [loading, setIsLoading] = useState(true);
    const [items, setItem] = useState<any[]>([]);

    useEffect(() => {
        API.fetchUsers()
            .then((data) => {
                setItem(data.results);
                setIsLoading(false);
            })
            .catch((errorMessage) => {
                console.log('ERROR: ', errorMessage);
                setIsLoading(false);
            });
    }, []);

    const FetchData = async () => {
        const results = await axios.get('/.netlify/functions/helloWorld');
        console.log(results);
    };

    useEffect(() => {
        FetchData();
    }, []);

    return (
        <div>
            {loading || items.length === 0 ? (
                <div>Loading... </div>
            ) : (
                <div>
                    {items
                        .sort((a, b) => (a.name.first > b.name.first ? 1 : -1))
                        .map((person: Item) => (
                            <ShowItem key={person.login.uuid} item={person} />
                        ))}
                </div>
            )}
        </div>
    );
};

export default Content;
