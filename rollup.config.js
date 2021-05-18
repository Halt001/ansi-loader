import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
// import copy from 'rollup-plugin-copy';

const config = {
  input: 'dist/index.js',
  output: [
    {
      file: 'lib/index.js',
      format: 'iife',
      sourcemap: true,
    },
  ],
  plugins: [
    minifyHTML(),
    resolve(),
  ],
  preserveEntrySignatures: false,

  // https://stackoverflow.com/questions/43556940/rollup-js-and-this-keyword-is-equivalent-to-undefined
  onwarn: function(warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }

    // console.warn everything else
    console.warn( warning.message );
}
};

if (process.env.NODE_ENV !== 'development') {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  config.plugins.push(terser());
  config.output[0].sourcemap = false;
}

export default config;