import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [category,setCategory] = useState('science-kit')
    const handleCategory = (value)=>{
        setCategory(value)
        console.log(value)
    }
    return (
        <div className='font-serif mt-12'>
            <div>
                <p className='text-center text-2xl font-bold'>Educational and Learning Toys</p>
                <p className='text-center text-xl pt-5'>Categories</p>
            </div>
            <div>
            <Tabs>
                <TabList className='text-center'>
                <Tab onClick={()=>handleCategory('science-kit')}>Science kits</Tab>
                <Tab onClick={()=>handleCategory('math-learning-toys')}>Math Learning Toys</Tab>
                <Tab onClick={()=>handleCategory('engineering-kits')}>Engineering kits</Tab>
                </TabList>

                <TabPanel className='border-t-2'>
                <h2>Science kits</h2>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Category;