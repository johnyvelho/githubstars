import React from 'react';
import { shallow } from 'enzyme';

import * as Auth from './../../util/Auth';
import Home from "./../Home";

it('should render without throwing an error', function() {
    shallow(<Home />)
});

it('should show counter to redirect', function() {
    expect(shallow(<Home />).text()).toContain('redirect');
});

it('should show search', function() {
    Auth.setUserToken('userLoged');
    expect(shallow(<Home />).find('#main-search').length).toBe(1)
});