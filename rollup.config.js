import babel from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

const production = process.env.NODE_ENV === 'production';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'StarRating',
      file: 'dist/star-rating.js',
      format: 'iife',
    },
    plugins: [
      resolve(),
      filesize(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
      }),
      production && terser(),
    ]
  },
  {
    input: 'src/index.css',
    output: {
      file: 'dist/star-rating.css',
    },
    plugins: [
      filesize(),
      postcss({
        extract: true,
        minimize: production,
      }),
    ]
  },
]
