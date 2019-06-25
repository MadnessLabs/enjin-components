import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'Enjin',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null,
      empty: false
    },
    {
      type: 'docs-readme'
    },
    {
      type: "docs-json",
      file: "src/core.json"
    }
  ],
  preamble: '(C) Madness Labs https://MadnessLabs.net - MIT License',
};
