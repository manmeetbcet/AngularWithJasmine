import {getCurrencies} from './getCurrencies';

describe('getCurriencies', () =>{
    it('should return supported curriencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
})