/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { default as EventTypes } from './interfaces/lookup';
import { isHex, isU8a, u8aToU8a, stringToU8a, u8aToString, hexToU8a } from '@polkadot/util';
import { Abi } from '@polkadot/api-contract';


import type { Bytes, Compact, Enum, Null, Option, Result, Struct, U8aFixed, Vec, bool, i128, i32, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Weight } from '@polkadot/types/interfaces/runtime';
import { ApiPromise, WsProvider } from '@polkadot/api';
const { Keyring } = require('@polkadot/keyring');

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

async function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('wss://node.testnet.fx.land');

  // Create the API and wait until ready

  const api = await ApiPromise.create({ types: {
    ...EventTypes.FunctionlandFulaEvent._enum,
    StorageManifestError : {
      message: 'Text',
      description: 'Text',
  }
  }, provider });

  // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);

  const keyring = new Keyring({ type: 'sr25519' });

// Add our Alice dev account: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
const alice = keyring.addFromUri('//Alice', { name: 'Alice' });
//const bob = keyring.addFromUri('//Bob', { name: 'Bob default' });

// Log some info
console.log(`${alice.meta.name}: has address ${alice.address}`);


// Retrieve last block timestamp, account nonce & balances
const [now, { nonce, data: balance }] = await Promise.all([
  api.query.timestamp.now(),
  api.query.system.account(alice.address)
]);

console.log(`${now}: balance of ${balance.free} and a nonce of ${nonce}`);

// Retrieve the latest header
const lastHeader = await api.rpc.chain.getHeader();

// Log the information
console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);

let manifest_metadata = JSON.parse('{"job": {"work": "Storage", "engine": "IPFS", "uri": "bafybeiar3h3qkh3k5vidnrgcda7c5xr5pi2rmzkqyi3air6irtwyvb3e5q"}}');
let metadataU8a = stringToU8a(JSON.stringify(manifest_metadata));
let metadataBytes = u8aToString(metadataU8a);

  await api.tx.fula
    .uploadManifest(metadataBytes,"bafybeiar3h3qkh3k5vidnrgcda7c5xr5pi2rmzkqyi3air6irtwyvb3e5q", 1, 3)
    .signAndSend(alice, async (result) => {
      console.log(`uploadManifest Current status is ${result.status.type}`);

      
      if (result.status.isFinalized) {
        let dataDecoded;
        console.log(`uploadManifest Transaction included at blockHash ${result.status.asFinalized}`);
        console.log(`uploadManifest Transaction hash ${result.txHash.toHex()}`);
        console.log("\nResult is : ", JSON.stringify(result, null, 2));
        result.events.forEach(({ phase, event: { data, method, section } }) => {
          console.log(`\t' ${phase}: ${section}.${method}:: ${data}`);
          if (section=='fula') {
            console.log("found output");
            console.log(`${section}.${method}:: data:: ${data}`);
            dataDecoded = api.createType('ManifestOutput', data);
            console.log("dataDecoded is ", dataDecoded.toHuman());
          } else {
            console.log("not found output");
            if(section=='system' && method=='ExtrinsicFailed') {
              console.log("ExtrinsicFailed");
              const [dispatchError, dispatchInfo] = data;
              let errorInfo;

                // decode the error
                if (dispatchError.isModule) {
                  console.log("dispatchError is module");
                  // for module errors, we have the section indexed, lookup
                  // (For specific known errors, we can also do a check against the
                  // api.errors.<module>.<ErrorName>.is(dispatchError.asModule) guard)
                  const decoded = api.registry.findMetaError(dispatchError.asModule);

                  errorInfo = `${decoded.section}.${decoded.name}`;
                } else {
                  console.log("dispatchError is not module");
                  // Other, CannotLookup, BadOrigin, no extra info
                  errorInfo = dispatchError.toString();
                }
                console.log("final errorInfo is ", errorInfo);
            } else if(section=='system' && method=='ExtrinsicSuccess') {
              console.log("ExtrinsicSuccess");
              if(dataDecoded){
                console.log("final success response is ", dataDecoded.toHuman());
              } else {
                console.log("final success response is not set");
              }
            }
            // Other, CannotLookup, BadOrigin, no extra info
          }
        });

      }
    });
  exit;

  const test = await api.tx.fula.storageManifest(
    "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    "QmWUjQczA5jHC3ibLq4y7CizVrebr1DTFRaTdJgFyxR5Nh",
    1
  )
  .signAndSend(alice, ({ events = [], status, txHash }) => {
    console.log(`Current status is ${status.type}`);

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`);
      console.log(`Transaction hash ${txHash.toHex()}`);

      const storageKey = api.query.system.account.key("5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY");
      api.rpc.state.getStorage(storageKey, status.asFinalized)
      .then((response) => {
        console.log("response", response);
        const decoded = api.registry.createType('StorageManifestError', response);
        console.log("decoded", decoded.toJSON());
      });


      // Loop through Vec<EventRecord> to display all events
      console.log("events", events);
      let i = 0;
      events.forEach(({ phase, event: { data, method, section } }) => {
        if(i==2){
        const decoded2 = api.registry.createType('StorageManifestError', data);
        console.log("decoded2", decoded2.toJSON());
        }
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`);
        i = i+1;
      });
    }
  });
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  main().catch(console.error);
/*
  // Construct
  const wsProvider = new WsProvider('ws://192.168.43.23:9944');

  ApiPromise.create({ provider: wsProvider }).then((api) => {
    // Make our chain state/storage queries, and the once-off queries
    api.query.system.account('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY').then((account) => {
      console.log("account", account.data.free.toHuman());
    });
    console.log("fula", api.tx.fula);
    // Get the node's spec version
    api.rpc.system.version().then((specVersion) => {
      console.log(`spec version: ${specVersion}`);
      let extrinsic = api.tx.fula.storageManifest(
        "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
        "QmWUjQczA5jHC3ibLq4y7CizVrebr1DTFRaTdJgFyxR5Nh",
        1
      );
      console.log("extrinsic", extrinsic);
      const keyring = new Keyring({ type: 'sr25519' });
      console.log("keyring", keyring);
      const alice = keyring.addFromUri("//Alice");
      console.log("alice", alice);
      
      
      
      const era = api.createType('ExtrinsicEra', { current: 1, period: 10 });
      console.log("era", era);
      api.rpc.chain.getHeader().then((header) => {
        console.log(header.number.toNumber());
        api.rpc.chain.getBlockHash(header.number.toNumber()).then((blockHash) => {
          console.log("blockHash", blockHash);
          //api.rpc.chain.getBlock(0).then((block) => {
            //console.log("block", block);
            api.rpc.system.accountNextIndex(alice.address).then((nonce) => {
              console.log("nonce", nonce);
              extrinsic.signAndSend(alice, {
                nonce
              }).then((result) => {
                console.log("result", result.hash.toHex());
                api.rpc.system.health()
.then((status) => {
    console.log("Node status: ", status);
});
                setTimeout(function timer() {
api.rpc.chain.getBlockHash(result.hash)
.then((exblockHash) => {
    api.rpc.chain.getBlock(exblockHash)
    .then((block) => {
        console.log("block extrinsics", block.block.extrinsics);
    });
});
                }, 20000);
              }).catch((error) => {
                console.log("error", error);
              });
              
              api.rpc.state.getRuntimeVersion().then((runtimeVersion) => {
                console.log("runtimeVersion", runtimeVersion);
                      const signedExtrinsic = extrinsic.sign(alice, {blockHash, genesisHash: block.block.header.parentHash, nonce, runtimeVersion});
                      console.log("extrinsic signed");
                      console.log("signedExtrinsic JSON", signedExtrinsic.toJSON());
                      console.log("signedExtrinsic signature", signedExtrinsic.signature);
                      api.rpc.author.submitAndWatchExtrinsic(signedExtrinsic).then((result) => {
                          console.log(result);
                      });
              });
            });
          //});
        });
      });
      
    
    }) ;

    

  }).catch((error) => {
    console.error(error);
  });
  */
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
