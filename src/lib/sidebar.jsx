// BARRA LATERAL IZQUIERDA

import '../css/sidebar.css'
import SidebarContent from './panol/sidebarContentPanol.jsx'


function Sidebar() {

    return (
        <>
        <div class="base-sidebar">
                <div class="windows-btn">
                    <button><p>Pañol</p></button>
                    <button><p>Académicas</p></button>
                </div>
                <div className='content'>
                    <SidebarContent />
                </div>
        </div>
        </>
    )
}

export default Sidebar