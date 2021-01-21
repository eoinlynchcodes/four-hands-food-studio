import React, { useEffect } from 'react';
import MyForm from '../components/MyForm';

function ContactUs(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    
    return (
        <div>
            <MyForm/>
        </div>
    );
};

export default ContactUs;