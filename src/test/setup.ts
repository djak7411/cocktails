import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi, beforeAll } from 'vitest';

class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

beforeAll(() => {
  window.IntersectionObserver = MockIntersectionObserver as any;
});

afterEach(() => {
  cleanup();
});