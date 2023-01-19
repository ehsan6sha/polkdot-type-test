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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // Construct
  const wsProvider = new WsProvider('ws://node.testnet.fx.land');

  ApiPromise.create({ provider: wsProvider }).then((api) => {
    // Make our chain state/storage queries, and the once-off queries
    api.query.system.account('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY').then((account) => {
      console.log(account.data.free.toHuman());
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
      const alice = keyring.addFromUri('//Alice');
      console.log("alice", alice);
      extrinsic.signAndSend(alice).then((result) => {
        console.log("result", result);
      }).catch((error) => {
        console.log("error", error);
      });
      /*
      const era = api.createType('ExtrinsicEra', { current: 1, period: 10 });
      console.log("era", era);
      api.rpc.chain.getHeader().then((header) => {
        console.log(header.number.toNumber());
        api.rpc.chain.getBlockHash(header.number.toNumber()).then((blockHash) => {
          console.log("blockHash", blockHash);
          api.rpc.chain.getBlock(blockHash).then((block) => {
            console.log("block", block);
            api.rpc.system.accountNextIndex(alice.address).then((nonce) => {
              console.log("nonce", nonce);
              api.rpc.state.getRuntimeVersion().then((runtimeVersion) => {
                console.log("runtimeVersion", runtimeVersion);
                      const signedExtrinsic = extrinsic.sign(alice, { blockHash, genesisHash: block.block.header.parentHash, nonce, runtimeVersion, era });
                      console.log("extrinsic signed");
                      api.rpc.author.submitAndWatchExtrinsic(signedExtrinsic).then((result) => {
                          console.log(result);
                      });
                  });
              });
          });
        });
      });
      */
    
    }) ;

    

  }).catch((error) => {
    console.error(error);
  });
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
