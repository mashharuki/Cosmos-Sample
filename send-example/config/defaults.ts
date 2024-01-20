import { Asset, AssetList } from '@chain-registry/types';
import { assets } from 'chain-registry';

export const chainName = 'cosmoshub';

export const chainassets: AssetList = assets.find(
    (chain) => chain.chain_name === chainName
) as AssetList;

export const coin: Asset = chainassets.assets.find(
    (asset) => asset.base === 'uatom'
) as Asset;