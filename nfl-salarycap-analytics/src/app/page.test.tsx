import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './page';

test('hello world!', () => {
	render(<Page />);
	const linkElement = screen.getByText(/Save and see your changes instantly/i);
	expect(linkElement).toBeDefined();
});