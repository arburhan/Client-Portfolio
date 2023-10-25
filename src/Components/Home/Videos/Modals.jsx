"use client"
// testing 
import React, { useState } from "react";
import Modal from "react-modal";
import ReactYouTube from "react-youtube";

const Modals = ({ name, videoId, setCatch }) => {
    console.log('Modals component is rendering');
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = (props) => {
        setCatch("hello");
        console.log(props);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        // Stop the YouTube video
        const iframe = document.querySelector(`iframe[src*="${videoId}"]`);
        iframe.src = iframe.src;
    };

    return (
        <div>
            <button className="btn" onClick={() => handleOpenModal("hi")}>{name}</button>
            {/*  <Modal
                isOpen={isOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Modal with YouTube video"
                overlayClassName="modal-overlay"
                className="modal"
            >
                <div className="modal-header">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal} />
                </div>
                <div className="modal-body">
                    <ReactYouTube
                        videoId={videoId}
                        opts={{
                            height: "350",
                            width: "550",
                            playerVars: {
                                // https://developers.google.com/youtube/player_parameters
                                autoplay: 1,
                            },
                        }}
                    />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Play again</button>
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                </div>
            </Modal> */}
        </div>
    );
};

export default Modals;
