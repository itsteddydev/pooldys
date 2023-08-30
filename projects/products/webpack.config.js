const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const productsMF = module.exports = withModuleFederationPlugin({

  name: 'products',

  exposes: {
    './ListProducts': './projects/products/src/app/products/products.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

productsMF.output.publicPath = 'http://localhost:5600/';

module.exports = productsMF;
