// @flow

import path from 'path';
import getDiff from '../src/';


const json1 = path.resolve(__dirname, '__fixtures__/beforeB.json');
const json2 = path.resolve(__dirname, '__fixtures__/afterB.json');
const jsExpect = `{
  common: {
    setting1: Value 1
  - setting2: 200
    setting3: true
  - setting6: {
      "key": "value"
    }
  + setting4: blah blah
  + setting5: {
      "key5": "value5"
    }
  }
  group1: {
  + baz: bars
  - baz: bas
    foo: bar
  }
- group2: {
    "abc": "12345"
  }
+ group3: {
    "fee": "100500"
  }
}`;
test('getDiffJSON', () => {
  expect(getDiff(json1, json2))
  .toBe(jsExpect);
});

const yaml1 = path.resolve(__dirname, '__fixtures__/before.yaml');
const yaml2 = path.resolve(__dirname, '__fixtures__/after.yaml');
test('getDiffYAML', () => {
  expect(getDiff(yaml1, yaml2))
  .toBe('{\n  host: hexlet.io\n+ timeout: 20\n- timeout: 50\n- proxy: 123.234.53.22\n+ verbose: true\n}');
});

const ini1 = path.resolve(__dirname, '__fixtures__/before.ini');
const ini2 = path.resolve(__dirname, '__fixtures__/after.ini');
test('getDiffINI', () => {
  expect(getDiff(ini1, ini2))
  .toBe('{\n  host: hexlet.io\n+ timeout: 20\n- timeout: 50\n- proxy: 123.234.53.22\n+ verbose: true\n}');
});
