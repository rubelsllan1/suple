import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText((content, element) => {
   
    const normalizedText = content.replace(/\s+/g, ' ').trim(); 
    return normalizedText === 'learn react';
  });

  expect(linkElement).toBeInTheDocument();
});
