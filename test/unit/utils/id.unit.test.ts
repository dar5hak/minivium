import { genId } from '../../../src/utils/id';

describe('Id', () => {
  it('should be able to create id', () => {
    const d = jest.spyOn(Date, 'now');
    d.mockReturnValue(1735115003339);
    expect(genId()).toBe('193fce9d5cb');
    d.mockRestore();
  });
});