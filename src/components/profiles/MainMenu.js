import React from 'react';

export default function MainMenu() {
    return(
        <div className = 'main-menu'>
            <div className = "d-flex justify-content-between">
                <div className = 'main-menu-items'>
                    <a href = '#'>
                        <img src = '/images/notifications.png' />
                            Notifications
                    </a>
                </div>
                <div className = 'main-menu-items'>
                    <div className='dropdown'>
                        <a className='btn btn-secondary' href='#' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            <img src = '/images/messages.png' /> <br />  
                            <span>Messages</span>
                        </a>
                        <div className='dropdown-menu my-drop' aria-labelledby='dropdownMenuLink'>
                            <p> 1 new message </p>
                        </div>
                    </div>
                </div>
                <div className = 'main-menu-items'>
                        <a href = '#'>
                            <img src = '/images/ideas.png' />
                            Give Ideas
                        </a>
                </div>
                <div className = 'main-menu-items'>
                    <div className = "d-flex justify-content-center">
                        <a  href = '#' className = 'like'>
                            <img src = '/images/like.png'  />
                        </a>
                        <a href = '#' className = 'dislike'>
                            <img src = '/images/dislike.png'  />
                        </a>
                    </div>
                        <a href = '#'>
                            Write Feedbacks
                        </a>
                </div>
                <div className = 'main-menu-items'>
                        <a href = '#'>
                            <img src = '/images/interest.png' />
                            Interests
                        </a>
                </div>
                <div className = 'main-menu-items last-item'>
                        <a href = '#'>
                            <img src = '/images/settings.png' /> 
                            Settings
                        </a>
                </div>
            </div>
        </div>
    )
}