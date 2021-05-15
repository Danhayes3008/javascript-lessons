import React from 'react'

const Room = ({room}) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Total Rooms</th>
                    <th>Rooms Booked</th>
                    <th>Total Rooms Available</th>
                </tr>
                <tr>
                    <td>{room.rooms}</td>
                    <td>{room.booked}</td>
                    <td>{ room.available}</td>
                </tr>
            </table>
        </div>
    )
}

export default Room
