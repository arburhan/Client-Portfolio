import React from 'react';
import Title from '@/Components/Shared/Title';
import testmonialsData from '@/data/testmonials.json';
import SuccessCard from './SuccessCard';


const Success = () => {
    return (
        <section>
            <Title name={"Recent Successes of Our Students"} />
            <div className="grid grid-flow-row md:grid-cols-4 justify-items-center md:gap-8 gap-y-8 p-3 md:p-4">
                {
                    testmonialsData.map(testmoni => <SuccessCard key={testmoni._id} testmoni={testmoni} />)
                }
            </div>

        </section>
    );
};

export default Success;