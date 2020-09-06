import React from 'react'
import './Birthdays.sass'
import SidebarRow from '../sidebarRow/SidebarRow'
import CakeIcon from '@material-ui/icons/Cake';

function Birthdays() {
    return (
        <div className="birthdays birthdays__wrp">
            <h4 className="birthdays__header">Birthdays</h4>
            <SidebarRow Icon={CakeIcon} birthdays={["Mario Rossi", "Marco Bianchi", "Fausto Verdi", "Dario Neri"]} />
        </div>
    )
}

export default Birthdays
