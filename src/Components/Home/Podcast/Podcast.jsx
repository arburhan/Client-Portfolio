import Title from '@/Components/Shared/Title';
import React from 'react';
import podDetails from '@/data/podcast.json';
import PodcastCard from './PodcastCard';

const Podcast = () => {
    return (
        <section>
            <Title name={"Podcast"} />
            <div className="grid grid-flow-row md:grid-cols-4 justify-items-center gap-y-8 md:gap-y-12">
                {
                    podDetails.map(details => <PodcastCard key={details._id} details={details} />)
                }
            </div>
            <div className="text-center py-12" >
                <button className="btn btn-primary" >Listen More Podcast</button>
            </div>
        </section>
    );
};

export default Podcast;