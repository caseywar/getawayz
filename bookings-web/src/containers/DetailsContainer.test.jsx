require('dotenv').config();
import React from 'react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import mockDetailsData from '../../json/detailsContainerJson.json';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import DetailsContainer from './DetailsContainer';
import { screen, waitFor } from '@testing-library/react';


// const server = setupServer(
//     rest.get('http://localhost:7890/api/v1/places/60ac55a713f85d2a6af9a1ff', (req, res, ctx) => {
//         console.log('server test')
//         return res(ctx.json(mockDetailsData));
//     })
// );

describe('Details Container', () => {
    // beforeAll(() => server.listen());
    // afterAll(() => server.close());

    it('it displays the place detail page', async () => {
        render(
            <MemoryRouter> 
                <DetailsContainer 
                    match={{
                        params: {
                            id: '60ac55a713f85d2a6af9a1ff'
                        }
                    }}
                />
                </MemoryRouter>
        );

        screen.getByText('Loading...');

        const div = screen.findByRole('div', { name: 'placeDetail' });

        return waitFor(() => {
            expect(div).toMatchSnapshot();
        })
    })
})