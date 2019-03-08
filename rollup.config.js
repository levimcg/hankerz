import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/hankerz.umd.js',
      name: 'Hankerz',
      format: 'umd'
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};