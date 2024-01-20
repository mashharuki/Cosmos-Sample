# Cosmos 系のブロックチェーンでスマートコントラクトを開発するためのリポジトリです。

## CosmWasm（コズムワズム）

Cosmos 上のスマートコントラクトプラットフォーム『CosmWasm（コズムワズム）』

## Neutron（ニュートロン）

Cosmos 内の DeFi 用スマートコントラクトのためのブロックチェーン

##　コマンド系

- CLI のインストール

  ```bash
  neutrond version
  ```

  実行結果例

  ```bash
  2.0.2
  ```

- アカウント作成

  ```bash
  neutrond keys add (好きなアカウント名)
  ```

  実行結果例

  ```bash
  - address: neutron1u55r4sujtgmwek6kp5p46gkwkznytrycrcxakl
    name: mashharuki
    pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A9uPUUzCEHM8gSuoEXZJxVg9jI9s3CZR+tJuvBdSACst"}'
    type: local
  ```

  2 つ目のアドレス

  ```bash
  - address: neutron1k8p8qmvjdncykck85awtezldsx07p97pkjxyms
    name: mashharuki2
    pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AulAnPCI21GQhNIgK/iD7rNEYPxkfK/JagykzSBW4+LP"}'
    type: local
  ```

  以下コマンドを打って情報が出てくればうまくアカウントが作成できている。

  ```bash
  neutrond keys list
  ```

- 残高確認

  ```bash
  neutrond q bank balances neutron1u55r4sujtgmwek6kp5p46gkwkznytrycrcxakl --node https://rpc-t.neutron.nodestake.top:443 --chain-id pion-1
  ```

- 送金

  ```bash
  neutrond tx bank send neutron1u55r4sujtgmwek6kp5p46gkwkznytrycrcxakl neutron1k8p8qmvjdncykck85awtezldsx07p97pkjxyms 100untrn --node https://rpc-t.neutron.nodestake.top:443 --chain-id pion-1 --gas-prices 0.01untrn --gas auto --gas-adjustment 1.3
  ```

  結果

  ```bash
  gas estimate: 91672
  auth_info:
    fee:
      amount:
      - amount: "917"
        denom: untrn
      gas_limit: "91672"
      granter: ""
      payer: ""
    signer_infos: []
    tip: null
  body:
    extension_options: []
    memo: ""
    messages:
    - '@type': /cosmos.bank.v1beta1.MsgSend
      amount:
      - amount: "100"
        denom: untrn
      from_address: neutron1u55r4sujtgmwek6kp5p46gkwkznytrycrcxakl
      to_address: neutron1k8p8qmvjdncykck85awtezldsx07p97pkjxyms
    non_critical_extension_options: []
    timeout_height: "0"
  signatures: []
  confirm transaction before signing and broadcasting [y/N]: y
  code: 4
  codespace: gaia
  data: ""
  events: []
  gas_used: "0"
  gas_wanted: "0"
  height: "0"
  info: ""
  logs: []
  raw_log: 'Insufficient fees; got: 917untrn required: 1834untrn: insufficient fee'
  timestamp: ""
  tx: null
  txhash: 1E3322FCC1DE1CEC105F06B2BC0E19EA889FB97591784E61C7D97EC5113EE9E9
  ```

  エクスプローラー上

  [送金トランザクション](https://neutron.celat.one/pion-1/txs/CC24FB37660BA408B6448314E054C9DC26B908262ED224CFC3B045500A3F8684)

- コントラクトのコンパイル

  ```bash
  cd cw-plus
  ```

  docker desktop を起動しておくこと！！

  ```bash
  docker run --rm -v "$(pwd)":/code \
    --mount type=volume,source="$(basename "$(pwd)")_cache",target=/target \
    --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
    cosmwasm/optimizer-arm64:0.15.0
  ```

  実行結果

  ```bash
  Post-processing artifacts...
  e5f144698186b41aa4b368378e73cf1c23af548f95815b7a762a410e89954613  cw1_subkeys-aarch64.wasm
  76520bb8618ad1c998ff7b74139fa4b717bab5c504567e10213e726b301709e4  cw1_whitelist-aarch64.wasm
  99dd01d322ca6eaf32f8c88f547068d2a7b85c1adb6da74aa5bb793b0e23042d  cw20_base-aarch64.wasm
  ef27a1b027f97b6d02d812e4123ac5deb06f21e798492ada345561720e88e1d9  cw20_ics20-aarch64.wasm
  30ecf9980b26c2f1de07b0b2759f8ac5b24aabe2ab1e8063eb94eae78bab1613  cw3_fixed_multisig-aarch64.wasm
  a447c9cdccaaac3785d75f1c5153ad443cd61caefbd6b435854cf413b4d22b6c  cw3_flex_multisig-aarch64.wasm
  21f70f74493f1db5c80e5e4ec949e3ebe632774428a53ed6d60e22a76167bc03  cw4_group-aarch64.wasm
  e880c511a1f4b7bbae908c5a4432c581af40668b4242c9caa438230888b39f57  cw4_stake-aarch64.wasm
  done
  ```

  `artifacts`フォルダに成果物がある。

  ```bash
  ./artifacts
  ├── checksums.txt
  ├── cw1_subkeys-aarch64.wasm
  ├── cw1_whitelist-aarch64.wasm
  ├── cw20_base-aarch64.wasm
  ├── cw20_ics20-aarch64.wasm
  ├── cw3_fixed_multisig-aarch64.wasm
  ├── cw3_flex_multisig-aarch64.wasm
  ├── cw4_group-aarch64.wasm
  └── cw4_stake-aarch64.wasm
  ```

### Faucet のもらい方

公式 Discord のチャンネルからもらう

[Faucet 取得時のトランザクション](https://neutron.celat.one/pion-1/txs/B96563DE0C75CA7858EB2B1EF278A41FA23CACC9147B4E125495D5EAF7A3700D)

### 参考文献

1. [Luma - Cosmos のスマコン開発を始めてみよう！！](https://lu.ma/9rb5chbu)
2. [Cosmo SDK ベースのチェーン『Neutron』でのトークン発行をしてみよう！](https://lab.stir.network/neutron-token-mint/)
3. [​Cosmos 系ブロックチェーン上の送金をプログラムで実行してみよう！CosmJS の使い方を解説！](https://lab.stir.network/cosmjs-1/)
4. [Cosmos のスマコン開発を始めてみよう！！](https://docs.google.com/presentation/d/1W2NV09ARA4nD4PvXmpOKRe0e7sETsPBFke_PlDOxKio/edit?usp=sharing)
5. [​Neutron 公式サイト](​https://www.neutron.org/)
6. [​Neutron Testnet エクスプローラ](​https://testnet.mintscan.io/neutron-testnet)
7. [2024/01/20 Cosmos のスマコン開発を始めてみよう！！](https://cosmosjapan.notion.site/2024-01-20-Cosmos-910ed6d9d07d4f54aa881cb22f4ad120)
8. [GitHub - Neutron](https://github.com/neutron-org/neutron/tree/303d764b57d871749fcf7d59a67b5d3078779258)
9. [Neutron 公式 Build ガイド](https://docs.neutron.org/neutron/build-and-run/neutron-build)
10. [エクスプローラーでのページ](https://neutron.celat.one/pion-1/accounts/neutron1u55r4sujtgmwek6kp5p46gkwkznytrycrcxakl/overview)
11. [GitHub - cw-plus のリポジトリ](https://github.com/CosmWasm/cw-plus)
