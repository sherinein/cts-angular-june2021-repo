import { greet } from './greet';

describe('greet', () => {
    it('should inclue name in the message using describe',() =>{
        expect(greet('sherine')).toContain('sherine');
    })
})
fdescribe('greet', () => {
    it('should inclue name in the message using fdescribe',() =>{
        expect(greet('sherine')).toContain('sherine');
    })
})
xdescribe('greet', () => {
    it('should inclue name in the message using xdescribe',() =>{
        expect(greet('sherine')).toContain('sherine');
    })
})