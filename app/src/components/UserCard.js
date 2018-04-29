import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepositorieList from "./RepositorieList";

class UserCard extends Component {
    render() {
        const { data } = this.props;

        return (
            <div className="user-card">
                <div className="user-card__top tc">
                    <div className="user-card__image">
                        <img src={data.avatarUrl} width="160" height="160" alt="" className="br-100 mw-100"/>
                    </div>
                    <h2 className="user-card__name">{data.name}</h2>
                    <h3 className="user-card__login">{data.login}</h3>
                </div>
                <div className="user-card__bottom">
                    {data.bio &&
                        <p className="user-card__description">{data.bio}</p>
                    }
                    <ul className="user-card__list">
                        {data.organizations.edges.length > 0 &&
                            <li className="user-card__list--users">
                                {data.organizations.edges.map((item, key) =>
                                    <a target="_blank" href={item.node.url}>@{item.node.login}</a>
                                )}
                            </li>
                        }
                        {data.location &&
                            <li className="user-card__list--location">{data.location}</li>
                        }
                        {data.websiteUrl &&
                            <li className="user-card__list--website">{data.websiteUrl}</li>
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

UserCard.propTypes = {
    data: PropTypes.shape({
        avatarUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        organizations: PropTypes.object.isRequired,
        location: PropTypes.string.isRequired,
        websiteUrl: PropTypes.string.isRequired,
    })
};

export default UserCard;
