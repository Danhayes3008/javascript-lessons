import React from 'react'

const Room = ({room}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Total Rooms</th>
                        <th>Rooms Booked</th>
                        <th>Total Rooms Available</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{room.rooms}</td>
                        <td>{room.booked}</td>
                        <td>{ room.available}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Room
