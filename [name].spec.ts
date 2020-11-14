import * as seeds from '../../seeds.json';
import [name] from './[name].parser';
import libs, { LibsType } from '../global-libs';

describe('[name]', () => {
  it('Get tokens - execute parser', async done => {
    const result = await [name](seeds.tokens, undefined, libs as LibsType);
    if (result instanceof Error) return done.fail(result);
    done();
  });
  it('Get tokens - execute parser - with options', async done => {
    const result = await [name](seeds.tokens, {
      // options
    }, libs as LibsType);
    if (result instanceof Error) return done.fail(result);
    done();
  });
});

