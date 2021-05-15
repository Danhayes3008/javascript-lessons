import React from 'react'
import Room from "./Room"

const Rooms = ({rooms}) => {
    return (
        <>{rooms.map((room) => (
            <Room key={room.id} room={room}  />
        ))};
        </>
    )
}

export default Rooms
