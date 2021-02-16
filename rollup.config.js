import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import postcss from 'rollup-plugin-postcss';
// import postcssLit from 'rollup-plugin-postcss-lit';
import autoprefixer from 'autoprefixer';
import typescript from 'rollup-plugin-typescript2';


const config = {
  input: './src/index.ts',
  output: [
    {
      file: 'lib/index.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    minifyHTML(),
    resolve(),
    postcss({
      plugins: [autoprefixer()],
      inject: false, // By default postcss also injects the
                     // styles in <head> which is pretty useless
                     // with LitElement's style encapsulation
    }),
    // postcssLit(),
    typescript(),
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