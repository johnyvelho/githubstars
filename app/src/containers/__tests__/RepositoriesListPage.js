import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';


import RepositoresListPage from "./../RepositoresListPage";
import UserCard from "../../components/UserCard";

const cardProps = {
    avatarUrl: '',
    name: '',
    login: '',
    bio: '',
    location: '',
    websiteUrl: '',
    organizations: {

    },
};

it('should render without throwing an error', function() {
    const wrapper = shallow(
        <MemoryRouter initialEntries={[ '/repositories/johnyvelho' ]}>
            <RepositoresListPage />
        </MemoryRouter>
    );
});