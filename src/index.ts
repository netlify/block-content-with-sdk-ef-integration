// Documentation: https://sdk.netlify.com
import { NetlifyIntegration } from '@netlify/sdk';

const integration = new NetlifyIntegration();

integration.addEdgeFunctions('./src/edge-functions', {
  prefix: 'block_content',
});

export { integration };
