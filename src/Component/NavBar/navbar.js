import './navbar.css'

function NavBar(){
    return(
        <div>
            <div className='nav-background'>
                <div className='nav-container'>
                    <header className='nav-header'>
                        <h1><a href='#' className='nav-logo'>Shapely Demo</a></h1>
                    </header>

                    <nav>
                        <ul className='nav-ul'>
                            <li><a href='#' className='nav-list'>HOME</a></li>
                            <li><a href='#' className='nav-list'>BLOG</a></li>
                            <li><a href='#' className='nav-list'>PORTFOLIO</a></li>
                            <li><a href='#' className='nav-list'>ABOUTTHETEST</a></li>
                            <li><a href='#' className='nav-list'>LEVEL1</a></li>
                            <li><a href='#' className='nav-list'>SHOP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar