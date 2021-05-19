import React from 'react';

export const Header = ({authentication, logIn, logOut}) => (
    <header>
        <div className="wrapper"> 
            {authentication ?
                <div className="logout"
                     onClick={logOut}>
                     Выход ({authentication.displayName})
                </div> :
                <div className="login"
                    onClick={logIn}>
                    Вход
                </div>
            }
        </div>
        
    </header>
);