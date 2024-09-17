import '../css/navbar-sidebar.css'

function Navbar({ children }) {
    return (
        <div className='layout-container'>
            <div className='base-sidebar'>
                <div className='windows-btn'>
                    <button><h3>Pañol</h3></button>
                    <button><h3>Académicas</h3></button>
                </div>
            </div>
            <div className='main-content-container'>
                <div className='main-navbar'>
                    <div className='navbar-content'>
                    </div>
                </div>
                <div className='main-content'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Navbar
