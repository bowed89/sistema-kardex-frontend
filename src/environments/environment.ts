// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  base_url: 'http://localhost:4000/api',
  //base_url: 'https://eh.ine.gob.bo:3002',
  //base_url: 'https://ehrest2.ine.gob.bo',
  //base_url: 'http://edsa.ine.gob.bo:3001',
  ImageURLS: './assets'
};
