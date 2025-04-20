import { fetchAPI, submitAPI } from '../utils/api';

describe('API Functions', () => {
  describe('fetchAPI', () => {
    test('returns an array of time slots', () => {
      const testDate = new Date('2025-04-21');
      const result = fetchAPI(testDate);
      
      expect(Array.isArray(result)).toBe(true);
      result.forEach(timeSlot => {
        expect(timeSlot).toMatch(/^([0-9]|1[0-9]|2[0-3]):[0-9]{2}$/);
      });
    });

    test('returns different results for different dates', () => {
      const date1 = new Date('2025-04-21');
      const date2 = new Date('2025-04-22');
      
      const result1 = fetchAPI(date1);
      const result2 = fetchAPI(date2);
      
      expect(result1).not.toEqual(result2);
    });

    test('returns times between 17:00 and 23:00', () => {
      const testDate = new Date('2025-04-21');
      const result = fetchAPI(testDate);
      
      result.forEach(timeSlot => {
        const hour = parseInt(timeSlot.split(':')[0]);
        expect(hour).toBeGreaterThanOrEqual(17);
        expect(hour).toBeLessThanOrEqual(23);
      });
    });

    test('uses window.fetchAPI if available', () => {
      const mockWindowFetchAPI = jest.fn();
      const testDate = new Date('2025-04-21');
      const mockResult = ['17:00', '18:00'];
      
      mockWindowFetchAPI.mockReturnValue(mockResult);
      window.fetchAPI = mockWindowFetchAPI;
      
      const result = fetchAPI(testDate);
      
      expect(mockWindowFetchAPI).toHaveBeenCalledWith(testDate);
      expect(result).toEqual(mockResult);
      
      delete window.fetchAPI;
    });
  });

  describe('submitAPI', () => {
    const validFormData = {
      date: '2025-04-21',
      time: '18:00',
      guests: 4,
      occasion: 'Birthday',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890'
    };

    test('returns true for valid submission', () => {
      const result = submitAPI(validFormData);
      expect(result).toBe(true);
    });

    test('uses window.submitAPI if available', () => {
      const mockWindowSubmitAPI = jest.fn();
      mockWindowSubmitAPI.mockReturnValue(true);
      window.submitAPI = mockWindowSubmitAPI;
      
      const result = submitAPI(validFormData);
      
      expect(mockWindowSubmitAPI).toHaveBeenCalledWith(validFormData);
      expect(result).toBe(true);
      
      delete window.submitAPI;
    });
  });
});