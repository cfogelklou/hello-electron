import { deepEqual } from '../utils';

// Every module must export something (typescript)
export const dummyface = 88;

function LOG(message?: any, ...optionalParams: any[]) {
  //console.log(message, optionalParams);
}

it('deepEqual', () => {
  {
    let a = [1, 2, 3];
    let b = [...a];
    expect(deepEqual(a, b)).toEqual(true);
    b[0]++;
    expect(deepEqual(a, b)).toEqual(false);
    a[0]++;
    expect(deepEqual(a, b)).toEqual(true);
    let c = { ...a };
    expect(deepEqual(a, c)).toEqual(false);
    let d = c;
    expect(deepEqual(c, d)).toEqual(true);
    d = { ...c };
    expect(deepEqual(c, d)).toEqual(true);
  }
  {
    let a = [1, 2, { three: [1, 2, 3] }];
    let b = [1, 2, { three: [1, 2, 3] }];
    expect(deepEqual(a, b)).toEqual(true);
    let c = [1, 2, { three: [1, 2, 'three'] }];
    expect(deepEqual(a, c)).toEqual(false);
    let d = [1, 2, { three: [1, 2, -3] }];
    expect(deepEqual(a, d)).toEqual(false);
  }
});
