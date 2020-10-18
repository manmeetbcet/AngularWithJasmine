import {compute} from './compute';

describe('compute', () =>{
    it('should return 0 if no is negtive', () => {
        const result = compute(-1);
        expect(result).toBe(0);

    })
    it('should increment the input if no is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);

    })
})