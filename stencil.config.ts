import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'Enjin',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    },
    {
      type: 'docs-readme'
    }
  ],
  preamble: '(C) Madness Labs https://MadnessLabs.net - MIT License',
};
