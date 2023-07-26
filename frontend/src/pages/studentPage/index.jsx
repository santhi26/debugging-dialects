import React from 'react';
import * as Component from '../../components';

export default function HomePage() {
    return (
        <>
            <Component.Greetings />
            <h1>fluentPal</h1>
            <em>Learn a lanugage</em>        
            <Component.Logout />
        </>
      )    
};
