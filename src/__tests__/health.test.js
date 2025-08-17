import { getHealthStatus } from '../health.js';

describe('getHealthStatus', () => {
  test.each([
    [{ name: 'Маг', health: 90 }, 'healthy'],   // > 50
    [{ name: 'Лучник', health: 50 }, 'wounded'], // ровно 50
    [{ name: 'Воин', health: 30 }, 'wounded'],   // промежуток
    [{ name: 'Монах', health: 15 }, 'wounded'],  // ровно 15
    [{ name: 'Вор', health: 10 }, 'critical'],   // < 15
  ])('returns %s for %o', (input, expected) => {
    expect(getHealthStatus(input)).toBe(expected);
  });

  test('does not mutate input object (pure function)', () => {
    const unit = { name: 'Маг', health: 90 };
    const copy = { ...unit };
    getHealthStatus(unit);
    expect(unit).toEqual(copy);
  });
});
