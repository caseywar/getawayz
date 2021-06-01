import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Getaways from './Getaways';
import { MemoryRouter } from 'react-router';

describe('Getaways container', () => {
    it('renders a list of places on the web page', async () => {
        render(
            <MemoryRouter>
                <Getaways />
            </MemoryRouter>
        )


        const ul = await screen.findAllByRole( 'list', {name: 'places'});
    return waitFor(() => {
        expect(ul).toMatchSnapshot();
    });
    })
})