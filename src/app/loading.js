import React from "react";
import Image from "next/image";
import load_gif from "../../public/embedai-gif.gif";

const Loading = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
                src={load_gif}
                alt="Loading animation"
                width={100} // Adjust width as needed
                height={100} // Adjust height as needed
            />
            <p style={{ marginLeft: '10px' }}>Loading...</p>
        </div>
    );
};

export default Loading;
