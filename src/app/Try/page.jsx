"use client"
import Modals from '@/Components/Home/Videos/Modals';
import React, { useState } from 'react';

const Try = () => {
    const [Catch, setCatch] = useState("");
    return (
        <div>
            <Modals setCatch={(e) => setCatch(e)} name="click me for console" />
            <p>{Catch}</p>
        </div>

    );
};

export default Try;