import {test, expect} from 'vitest'
import { add } from './math'

test('should create a summary of the numbers added together', ()=>{
    const summary = add([1, 2, 3, 4, 5]);
    expect(summary).toBe(15);
})