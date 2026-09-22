import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import isimil, { all, random } from './index.ts';

describe('all', () => {
  it('contains all 81 provinces', () => {
    assert.equal(all.length, 81);
  });

  it('contains no duplicates', () => {
    assert.equal(new Set(all).size, all.length);
  });

  it('is an array of strings', () => {
    assert.ok(all.every((item) => typeof item === 'string'));
  });

  it('contains `ankara`', () => {
    assert.ok(all.includes('ankara'));
  });
});

describe('random', () => {
  it('always returns a province from `all`', () => {
    for (let i = 0; i < 1_000; i++) {
      assert.ok(all.includes(random()));
    }
  });

  it('can return different provinces', () => {
    const seen = new Set(Array.from({ length: 500 }, random));
    assert.ok(seen.size > 1);
  });
});

describe('default export', () => {
  it('exposes `all` and `random`', () => {
    assert.deepEqual(isimil.all, all);
    assert.equal(typeof isimil.random, 'function');
  });
});