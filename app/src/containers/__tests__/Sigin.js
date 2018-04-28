import React from 'react';
import { shallow } from 'enzyme';

import Sigin from "./../Sigin";

it('should render without throwing an error', function() {
    shallow(<Sigin />)
});