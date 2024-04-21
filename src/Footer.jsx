import React from 'react'

function Footer() {
return (
    <div className='footer' style={{background:'black'}}>
        <div className="row">
                <ul className='col1'>
            <li><a href='#'><i class="fa-brands fa-instagram"></i></a>Instagram Link</li>
            <li><a href='#'><i class="fa-brands fa-facebook"></i></a>Facebook Link</li>
            <li><a href='#'><i class="fa-solid fa-envelope"></i></a> Mail Id</li>
            </ul>
            <div className="col2"></div>
        </div>
    </div>
)
}

export default Footer
