import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import Welcome from '../pages/Welcome';

const assert = require('chai').assert;
const Tester = require('../app');

describe('Welcome component', () =>{
    it('renders the Welcome component', () =>{
        const { getByText } = render(<Welcome />)

        const welcomeText = getByText('Welcome');
        const loginButton = getByText('Login');
        const registerButton = getByText('Register');
        
        expect(welcomeText).to.exist;
        expect(loginButton).to.exist;
        expect(registerButton).to.exist;
    });
});