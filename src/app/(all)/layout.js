import Footer from '@/Component/Footer';
import Navber from '@/Component/Navber';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navber></Navber>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;