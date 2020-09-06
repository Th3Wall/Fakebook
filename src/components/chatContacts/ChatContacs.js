import React from 'react'
import './ChatContacts.sass'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Contact from '../contact/Contact';

function ChatContacs() {
    return (
        <div className="contacts contacts__wrp">
            <div className="contacts__header wrp">
                <h4 className="contacts__header--title">Contacts</h4>
                <div className="contacts__header--icons">
                    <VideoCallIcon />
                    <SearchIcon />
                    <MoreHorizIcon />
                </div>
            </div>
            <Contact contactAvatar="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/117907612_3563992490279505_8451429859961719128_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=v10vTrNDTuQAX_BOoTp&_nc_ht=scontent-mxp1-1.xx&oh=4886f877009445fd6742f10b84018eb7&oe=5F77D6B6" contactName="Davide Mandelli" />
            <Contact contactAvatar="https://images.generated.photos/ZD6JRE8uGrKmICH-wDvrn-MQ3am4ZZriA4V6ezTbuXQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNDI4MzQuanBn.jpg" contactName="Noemi Gilardi" />
            <Contact contactAvatar="https://images.generated.photos/0U5vP_6lPnD4gIDHcJx8zF__j93rWh-yD5DwwyiL8sE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NjQ4MjYuanBn.jpg" contactName="Mario Rossi" />
            <Contact contactAvatar="https://images.generated.photos/BrDRvr6gw3e02GEjf9-BEGw44s5qEOjff3B5agfU6lY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MTg5MDAuanBn.jpg" contactName="Giuseppe Verdi" />
            <Contact contactAvatar="https://images.generated.photos/3ueJ9FAPIZ6AemZjtUUIRU6Gdk4Zr694ZVJFY_jB9tA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMjc5NjQuanBn.jpg" contactName="Claudio Bianchi" />
            <Contact contactAvatar="https://images.generated.photos/_YookfzKrhXMruIXcJbBT0p0B4GZ6JTE4vqGxy6Ce20/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNDE1NzAuanBn.jpg" contactName="Claudio Neri" />
            <Contact contactAvatar="https://images.generated.photos/Otk6aPFGbALbmx-RwXmaYvH9JKoKoMnV3pWuXzme00M/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2ODQ1ODUuanBn.jpg" contactName="Giorgio Monteverdi" />
            <Contact contactAvatar="https://images.generated.photos/XdUruQ7-RDxy2yxXkbb72pC59_Q_2FsXDh3l3BgACJU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5ODIzMjcuanBn.jpg" contactName="Roberto Fumagalli" />
            <Contact contactAvatar="https://images.generated.photos/B0Ip_BATIrEn1ESKTC7dU3DJ_qIfsp_pY8qYrOlwvVs/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzAwMjA2NjAu/cG5n.png" contactName="Giuliano Garzanti" />
            <Contact contactAvatar="https://images.generated.photos/qSfc8ArU5uizsmJ0g7Qutx8zItDBvEY605gPb-lV9NI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzAyNjAzNjEu/cG5n.png" contactName="Carla Guizzoni" />
            <Contact contactAvatar="https://images.generated.photos/9QgB6pD16LeiXI7lUCyLc5I7K-fyk-MPpAzajGKOkMY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MzI1MzIuanBn.jpg" contactName="Davide Moscardelli" />
            <Contact contactAvatar="https://images.generated.photos/NC7e4QIgepefVLmukyIM8uR0hqFDz1kfZt0l4c1WA9M/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwOTQ1NzAuanBn.jpg" contactName="Davide De Bernardi" />
            <Contact contactAvatar="https://images.generated.photos/NiO8PX5b6hiEBNjvy9y8l7jEGFayqmVEhq74x2-R0kc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzAzMDQ3MzMu/cG5n.png" contactName="Thomas White" />
            <Contact contactAvatar="https://images.generated.photos/kKfuzz7smNczXh3dp9Znle3X2Pj0i-Y4rWAlrYQAQl8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzAzMDkyNDYu/cG5n.png" contactName="Julie Swagger" />
            <Contact contactAvatar="https://images.generated.photos/sXrvLr3pkUITmF0rLeOCMfUm_mwupwfRxt2oc9ABYxA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNTkzMjQuanBn.jpg" contactName="Daniela Barrera" />
        </div>
    )
}

export default ChatContacs





