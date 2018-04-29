import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import * as Auth from './../../util/Auth';
import Home from "./../Home";
import HomeSearch from "../../components/HomeSearch";

it('should render without throwing an error', function() {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <Home />
        </MemoryRouter>
    );
});

it('should show counter to redirect', function() {
    expect(shallow(<Home />).text()).toContain('redirect');
});

it('should show search', function() {
    Auth.setUserToken('userLoged');

    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <Home />
        </MemoryRouter>
    );

    expect(wrapper.find(<HomeSearch/>)).toBeDefined();
});