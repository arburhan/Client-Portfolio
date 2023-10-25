// testing 
"use client"
import Modals from "@/Components/Home/Videos/Modals";

const Videoss = () => {
    console.log('Videoss component is rendering');

    return (
        <div>
            <Modals name="click me for console" videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        </div>
    );
};

export default Videoss;
