import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Cocktail from '@/components/Cocktail';
import { Provider } from 'react-redux';
import { mockStore } from '@/store/mockStore';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: vi.fn(() => mockNavigate),
}));

describe('Cocktail Component', () => {

  it('should render loading state', async () => {
    render(
      <Provider store={mockStore}> 
        <Cocktail cocktailCode='margarita' />
      </Provider>
    );
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  });

  it('should render cocktail data', async () => {
    render(
      <Provider store={mockStore}> 
        <Cocktail cocktailCode='margarita' />
      </Provider>
    );

    expect(await screen.findByText('Margarita')).toBeInTheDocument();
    expect(screen.getByText('Ordinary Drink')).toBeInTheDocument();
    expect(screen.getByText('Rub the rim of the glass...')).toBeInTheDocument();
    expect(screen.getByText('Tequila')).toBeInTheDocument();
    expect(screen.getByText('1 1/2 oz')).toBeInTheDocument();
  });
});