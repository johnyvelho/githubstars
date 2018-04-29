import React, { Component } from 'react';

class UserCard extends Component {
    render() {
        return (
            <div className="user-card">
                <div className="user-card__top tc">
                    <div className="user-card__image">
                        <img src="http://via.placeholder.com/160x160" alt="" className="br-100 mw-100"/>
                    </div>
                    <h2 className="user-card__name">Sindre Sorhus</h2>
                    <h3 className="user-card__login">sindresorhus</h3>
                </div>
                <div className="user-card__bottom">
                    <p className="user-card__description">Maker · Full-Time Open-Sourcerer · Into Swift and Node.js</p>
                    <ul className="user-card__list">
                        <li className="user-card__list--users">@avajs @chalk @yeoman</li>
                        <li className="user-card__list--location">São Paulo, SP</li>
                        <li className="user-card__list--website">sindresorhus.com</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserCard;
