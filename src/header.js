import './header.css'

function Header() {
    return (
        <div className="header">
            <div className="header_desc">
                <h1>Mars research</h1>
                <ul>
                    <li className='header_left'>Weather</li>
                    <li className='header_right'>Mars rover photos</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;