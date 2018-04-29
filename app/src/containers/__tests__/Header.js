import React from 'react';
import { shallow } from 'enzyme';

import Header from "./../Header";

it('should render without throwing an error', function() {
    shallow(<Header />)
});