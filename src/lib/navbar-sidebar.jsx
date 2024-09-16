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
                        {/* Aquí puedes poner el contenido de la barra de navegación si es necesario */}
                    </div>
                </div>
                <div className='main-content'>
                    {children}  {/* Aquí se renderiza el contenido principal que se pasa como children */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
