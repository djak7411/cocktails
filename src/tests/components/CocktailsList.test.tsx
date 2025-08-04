import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CocktailsList from '@/components/CocktailsList';
import firstLetterToUpper from '@/lib/firstLetterToUpper';
import { COCKTAIL_CODES } from '@/config/index';


describe('CocktailsList Component', () => {
  it('should render list items for each cocktail', () => {
    render(
      <MemoryRouter>
        <CocktailsList cocktails={COCKTAIL_CODES} />
      </MemoryRouter>
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(COCKTAIL_CODES.length);

    COCKTAIL_CODES.forEach(cocktail => {
      const formattedName = firstLetterToUpper(cocktail);
      expect(screen.getByText(formattedName)).toBeInTheDocument();
    });
  });

  it('should render NavLink with correct "to" attribute', () => {
    render(
      <MemoryRouter>
        <CocktailsList cocktails={COCKTAIL_CODES} />
      </MemoryRouter>
    );

    COCKTAIL_CODES.forEach(cocktail => {
      const link = screen.getByText(firstLetterToUpper(cocktail));
      expect(link).toHaveAttribute('href', `/${cocktail}`);
    });
  });
});