// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, bool, i128, i32, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Weight } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly miscFrozen: u128;
    readonly feeFrozen: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (7) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: Weight;
    readonly operational: Weight;
    readonly mandatory: Weight;
  }

  /** @name SpRuntimeDigest (12) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (14) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (17) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (19) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportDispatchDispatchInfo (20) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (21) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (22) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (23) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpRuntimeArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional';
  }

  /** @name SpRuntimeModuleError (24) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (25) */
  interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean;
    readonly isWouldDie: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
  }

  /** @name SpRuntimeArithmeticError (26) */
  interface SpRuntimeArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (27) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletGrandpaEvent (28) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpFinalityGrandpaAppPublic (31) */
  interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (32) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletBalancesEvent (33) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (34) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (35) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletSudoEvent (36) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name PalletSchedulerEvent (40) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<Bytes>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallLookupFailed: boolean;
    readonly asCallLookupFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<Bytes>;
      readonly error: FrameSupportScheduleLookupError;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallLookupFailed';
  }

  /** @name FrameSupportScheduleLookupError (43) */
  interface FrameSupportScheduleLookupError extends Enum {
    readonly isUnknown: boolean;
    readonly isBadFormat: boolean;
    readonly type: 'Unknown' | 'BadFormat';
  }

  /** @name PalletCollectiveEvent (44) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name SugarfungeValidatorSetEvent (46) */
  interface SugarfungeValidatorSetEvent extends Enum {
    readonly isValidatorAdditionInitiated: boolean;
    readonly asValidatorAdditionInitiated: AccountId32;
    readonly isValidatorRemovalInitiated: boolean;
    readonly asValidatorRemovalInitiated: AccountId32;
    readonly type: 'ValidatorAdditionInitiated' | 'ValidatorRemovalInitiated';
  }

  /** @name PalletSessionEvent (47) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name SugarfungeAssetEvent (48) */
  interface SugarfungeAssetEvent extends Enum {
    readonly isClassCreated: boolean;
    readonly asClassCreated: {
      readonly classId: u64;
      readonly who: AccountId32;
    } & Struct;
    readonly isAssetCreated: boolean;
    readonly asAssetCreated: {
      readonly classId: u64;
      readonly assetId: u64;
      readonly who: AccountId32;
    } & Struct;
    readonly isAssetMetadataUpdated: boolean;
    readonly asAssetMetadataUpdated: {
      readonly classId: u64;
      readonly assetId: u64;
      readonly who: AccountId32;
      readonly metadata: Bytes;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly who: AccountId32;
      readonly to: AccountId32;
      readonly classId: u64;
      readonly assetId: u64;
      readonly amount: u128;
    } & Struct;
    readonly isBatchMint: boolean;
    readonly asBatchMint: {
      readonly who: AccountId32;
      readonly to: AccountId32;
      readonly classId: u64;
      readonly assetIds: Vec<u64>;
      readonly amounts: Vec<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly who: AccountId32;
      readonly from: AccountId32;
      readonly classId: u64;
      readonly assetId: u64;
      readonly amount: u128;
    } & Struct;
    readonly isBatchBurn: boolean;
    readonly asBatchBurn: {
      readonly who: AccountId32;
      readonly from: AccountId32;
      readonly classId: u64;
      readonly assetIds: Vec<u64>;
      readonly amounts: Vec<u128>;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly who: AccountId32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly classId: u64;
      readonly assetId: u64;
      readonly amount: u128;
    } & Struct;
    readonly isBatchTransferred: boolean;
    readonly asBatchTransferred: {
      readonly who: AccountId32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly classId: u64;
      readonly assetIds: Vec<u64>;
      readonly amounts: Vec<u128>;
    } & Struct;
    readonly isOperatorApprovalForAll: boolean;
    readonly asOperatorApprovalForAll: {
      readonly who: AccountId32;
      readonly operator: AccountId32;
      readonly classId: u64;
      readonly approved: bool;
    } & Struct;
    readonly type: 'ClassCreated' | 'AssetCreated' | 'AssetMetadataUpdated' | 'Mint' | 'BatchMint' | 'Burn' | 'BatchBurn' | 'Transferred' | 'BatchTransferred' | 'OperatorApprovalForAll';
  }

  /** @name SugarfungeDaoEvent (51) */
  interface SugarfungeDaoEvent extends Enum {
    readonly isSomethingStored: boolean;
    readonly asSomethingStored: ITuple<[u32, AccountId32]>;
    readonly type: 'SomethingStored';
  }

  /** @name SugarfungeBundleEvent (52) */
  interface SugarfungeBundleEvent extends Enum {
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly bundleId: H256;
      readonly who: AccountId32;
      readonly classId: u64;
      readonly assetId: u64;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly bundleId: H256;
      readonly who: AccountId32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly bundleId: H256;
      readonly who: AccountId32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Register' | 'Mint' | 'Burn';
  }

  /** @name SugarfungeBagEvent (53) */
  interface SugarfungeBagEvent extends Enum {
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly who: AccountId32;
      readonly classId: u64;
    } & Struct;
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly bag: AccountId32;
      readonly who: AccountId32;
      readonly classId: u64;
      readonly assetId: u64;
      readonly owners: Vec<AccountId32>;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly bag: AccountId32;
      readonly who: AccountId32;
    } & Struct;
    readonly isSweep: boolean;
    readonly asSweep: {
      readonly bag: AccountId32;
      readonly who: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly type: 'Register' | 'Created' | 'Deposit' | 'Sweep';
  }

  /** @name SugarfungeExgineEvent (55) */
  interface SugarfungeExgineEvent extends Enum {
    readonly isSomethingStored: boolean;
    readonly asSomethingStored: ITuple<[u32, AccountId32]>;
    readonly type: 'SomethingStored';
  }

  /** @name SugarfungeMarketEvent (56) */
  interface SugarfungeMarketEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly marketId: u64;
      readonly who: AccountId32;
    } & Struct;
    readonly isRateCreated: boolean;
    readonly asRateCreated: {
      readonly marketId: u64;
      readonly marketRateId: u64;
      readonly who: AccountId32;
    } & Struct;
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: {
      readonly who: AccountId32;
      readonly marketId: u64;
      readonly marketRateId: u64;
      readonly classIds: Vec<u64>;
      readonly assetIds: Vec<Vec<u64>>;
      readonly amounts: Vec<Vec<u128>>;
    } & Struct;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: {
      readonly who: AccountId32;
      readonly marketId: u64;
      readonly marketRateId: u64;
      readonly classIds: Vec<u64>;
      readonly assetIds: Vec<Vec<u64>>;
      readonly amounts: Vec<Vec<u128>>;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly marketId: u64;
      readonly marketRateId: u64;
      readonly amount: u128;
      readonly balances: Vec<SugarfungeMarketRateBalance>;
      readonly success: bool;
    } & Struct;
    readonly isExchanged: boolean;
    readonly asExchanged: {
      readonly buyer: AccountId32;
      readonly marketId: u64;
      readonly marketRateId: u64;
      readonly amount: u128;
      readonly balances: Vec<SugarfungeMarketRateBalance>;
      readonly success: bool;
    } & Struct;
    readonly type: 'Created' | 'RateCreated' | 'LiquidityAdded' | 'LiquidityRemoved' | 'Deposit' | 'Exchanged';
  }

  /** @name SugarfungeMarketRateBalance (60) */
  interface SugarfungeMarketRateBalance extends Struct {
    readonly rate: SugarfungeMarketAssetRate;
    readonly balance: i128;
  }

  /** @name SugarfungeMarketAssetRate (61) */
  interface SugarfungeMarketAssetRate extends Struct {
    readonly classId: u64;
    readonly assetId: u64;
    readonly action: SugarfungeMarketRateAction;
    readonly from: SugarfungeMarketRateAccount;
    readonly to: SugarfungeMarketRateAccount;
  }

  /** @name SugarfungeMarketRateAction (62) */
  interface SugarfungeMarketRateAction extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: i128;
    readonly isMarketTransfer: boolean;
    readonly asMarketTransfer: ITuple<[SugarfungeMarketAmm, u64, u64]>;
    readonly isMint: boolean;
    readonly asMint: i128;
    readonly isBurn: boolean;
    readonly asBurn: i128;
    readonly isHas: boolean;
    readonly asHas: ITuple<[SugarfungeMarketAmountOp, i128]>;
    readonly type: 'Transfer' | 'MarketTransfer' | 'Mint' | 'Burn' | 'Has';
  }

  /** @name SugarfungeMarketAmm (64) */
  interface SugarfungeMarketAmm extends Enum {
    readonly isConstant: boolean;
    readonly type: 'Constant';
  }

  /** @name SugarfungeMarketAmountOp (65) */
  interface SugarfungeMarketAmountOp extends Enum {
    readonly isEqual: boolean;
    readonly isLessThan: boolean;
    readonly isLessEqualThan: boolean;
    readonly isGreaterThan: boolean;
    readonly isGreaterEqualThan: boolean;
    readonly type: 'Equal' | 'LessThan' | 'LessEqualThan' | 'GreaterThan' | 'GreaterEqualThan';
  }

  /** @name SugarfungeMarketRateAccount (66) */
  interface SugarfungeMarketRateAccount extends Enum {
    readonly isMarket: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isBuyer: boolean;
    readonly type: 'Market' | 'Account' | 'Buyer';
  }

  /** @name FunctionlandFulaEvent (67) */
  interface FunctionlandFulaEvent extends Enum {
    readonly isManifestOutput: boolean;
    readonly asManifestOutput: {
      readonly uploader: AccountId32;
      readonly storage: Vec<AccountId32>;
      readonly manifest: Bytes;
      readonly poolId: u32;
    } & Struct;
    readonly isStorageManifestOutput: boolean;
    readonly asStorageManifestOutput: {
      readonly uploader: AccountId32;
      readonly storage: AccountId32;
      readonly cid: Bytes;
      readonly poolId: u32;
    } & Struct;
    readonly isRemoveStorerOutput: boolean;
    readonly asRemoveStorerOutput: {
      readonly uploader: AccountId32;
      readonly storage: Option<AccountId32>;
      readonly cid: Bytes;
      readonly poolId: u32;
    } & Struct;
    readonly isManifestRemoved: boolean;
    readonly asManifestRemoved: {
      readonly uploader: AccountId32;
      readonly cid: Bytes;
      readonly poolId: u32;
    } & Struct;
    readonly isManifestStorageUpdated: boolean;
    readonly asManifestStorageUpdated: {
      readonly storer: AccountId32;
      readonly poolId: u32;
      readonly cid: Bytes;
      readonly activeCycles: u16;
      readonly missedCycles: u16;
      readonly activeDays: i32;
    } & Struct;
    readonly type: 'ManifestOutput' | 'StorageManifestOutput' | 'RemoveStorerOutput' | 'ManifestRemoved' | 'ManifestStorageUpdated';
  }

  /** @name FulaPoolEvent (70) */
  interface FulaPoolEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly owner: Option<AccountId32>;
      readonly poolId: u32;
    } & Struct;
    readonly isJoinRequested: boolean;
    readonly asJoinRequested: {
      readonly account: AccountId32;
      readonly poolId: u32;
    } & Struct;
    readonly isRequestWithdrawn: boolean;
    readonly asRequestWithdrawn: {
      readonly account: AccountId32;
      readonly poolId: u32;
    } & Struct;
    readonly isAccepted: boolean;
    readonly asAccepted: {
      readonly account: AccountId32;
      readonly poolId: u32;
    } & Struct;
    readonly isDenied: boolean;
    readonly asDenied: {
      readonly account: AccountId32;
      readonly poolId: u32;
    } & Struct;
    readonly isCapacityReached: boolean;
    readonly asCapacityReached: {
      readonly poolId: u32;
    } & Struct;
    readonly isParticipantLeft: boolean;
    readonly asParticipantLeft: {
      readonly account: AccountId32;
      readonly poolId: u32;
    } & Struct;
    readonly type: 'PoolCreated' | 'JoinRequested' | 'RequestWithdrawn' | 'Accepted' | 'Denied' | 'CapacityReached' | 'ParticipantLeft';
  }

  /** @name FrameSystemPhase (71) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (74) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (77) */
  interface FrameSystemCall extends Enum {
    readonly isFillBlock: boolean;
    readonly asFillBlock: {
      readonly ratio: Perbill;
    } & Struct;
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'FillBlock' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (82) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: Weight;
    readonly maxBlock: Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (83) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (84) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: Weight;
    readonly maxExtrinsic: Option<Weight>;
    readonly maxTotal: Option<Weight>;
    readonly reserved: Option<Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (86) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (87) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (88) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (89) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (94) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (96) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletGrandpaStoredState (98) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (99) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaCall (102) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpFinalityGrandpaEquivocationProof (103) */
  interface SpFinalityGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpFinalityGrandpaEquivocation;
  }

  /** @name SpFinalityGrandpaEquivocation (104) */
  interface SpFinalityGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (105) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (106) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpFinalityGrandpaAppSignature (107) */
  interface SpFinalityGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (108) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (111) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (112) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpCoreVoid (114) */
  type SpCoreVoid = Null;

  /** @name PalletGrandpaError (115) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletBalancesBalanceLock (117) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (118) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (121) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesReleases (123) */
  interface PalletBalancesReleases extends Enum {
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V100' | 'V200';
  }

  /** @name PalletBalancesCall (124) */
  interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
  }

  /** @name PalletBalancesError (129) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name PalletTransactionPaymentReleases (131) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletSudoCall (132) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletSchedulerCall (134) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: Bytes;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: Bytes;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: Bytes;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name FrameSupportScheduleMaybeHashed (136) */
  interface FrameSupportScheduleMaybeHashed extends Enum {
    readonly isValue: boolean;
    readonly asValue: Call;
    readonly isHash: boolean;
    readonly asHash: H256;
    readonly type: 'Value' | 'Hash';
  }

  /** @name PalletCollectiveCall (137) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: Compact<Weight>;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'Close' | 'DisapproveProposal';
  }

  /** @name SugarfungeValidatorSetCall (139) */
  interface SugarfungeValidatorSetCall extends Enum {
    readonly isAddValidator: boolean;
    readonly asAddValidator: {
      readonly validatorId: AccountId32;
    } & Struct;
    readonly isRemoveValidator: boolean;
    readonly asRemoveValidator: {
      readonly validatorId: AccountId32;
    } & Struct;
    readonly isAddValidatorAgain: boolean;
    readonly asAddValidatorAgain: {
      readonly validatorId: AccountId32;
    } & Struct;
    readonly type: 'AddValidator' | 'RemoveValidator' | 'AddValidatorAgain';
  }

  /** @name PalletSessionCall (140) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: SugarfungeRuntimeOpaqueSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name SugarfungeRuntimeOpaqueSessionKeys (141) */
  interface SugarfungeRuntimeOpaqueSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
    readonly grandpa: SpFinalityGrandpaAppPublic;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (142) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (143) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name SugarfungeAssetCall (144) */
  interface SugarfungeAssetCall extends Enum {
    readonly isCreateClass: boolean;
    readonly asCreateClass: {
      readonly owner: AccountId32;
      readonly classId: u64;
      readonly metadata: Bytes;
    } & Struct;
    readonly isCreateAsset: boolean;
    readonly asCreateAsset: {
      readonly classId: u64;
      readonly assetId: u64;
      readonly metadata: Bytes;
    } & Struct;
    readonly isTransferFrom: boolean;
    readonly asTransferFrom: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly classId: u64;
      readonly assetId: u64;
      readonly amount: u128;
    } & Struct;
    readonly isBatchTransferFrom: boolean;
    readonly asBatchTransferFrom: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly classId: u64;
      readonly assetIds: Vec<u64>;
      readonly amounts: Vec<u128>;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly to: AccountId32;
      readonly classId: u64;
      readonly assetId: u64;
      readonly amount: u128;
    } & Struct;
    readonly isBatchMint: boolean;
    readonly asBatchMint: {
      readonly to: AccountId32;
      readonly classId: u64;
      readonly assetIds: Vec<u64>;
      readonly amounts: Vec<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly from: AccountId32;
      readonly classId: u64;
      readonly assetId: u64;
      readonly amount: u128;
    } & Struct;
    readonly isBatchBurn: boolean;
    readonly asBatchBurn: {
      readonly from: AccountId32;
      readonly classId: u64;
      readonly assetIds: Vec<u64>;
      readonly amounts: Vec<u128>;
    } & Struct;
    readonly isUpdateClassMetadata: boolean;
    readonly asUpdateClassMetadata: {
      readonly classId: u64;
      readonly metadata: Bytes;
    } & Struct;
    readonly isUpdateAssetMetadata: boolean;
    readonly asUpdateAssetMetadata: {
      readonly classId: u64;
      readonly assetId: u64;
      readonly metadata: Bytes;
    } & Struct;
    readonly type: 'CreateClass' | 'CreateAsset' | 'TransferFrom' | 'BatchTransferFrom' | 'Mint' | 'BatchMint' | 'Burn' | 'BatchBurn' | 'UpdateClassMetadata' | 'UpdateAssetMetadata';
  }

  /** @name SugarfungeDaoCall (147) */
  interface SugarfungeDaoCall extends Enum {
    readonly isDoSomething: boolean;
    readonly asDoSomething: {
      readonly something: u32;
    } & Struct;
    readonly isCauseError: boolean;
    readonly type: 'DoSomething' | 'CauseError';
  }

  /** @name SugarfungeBundleCall (148) */
  interface SugarfungeBundleCall extends Enum {
    readonly isRegisterBundle: boolean;
    readonly asRegisterBundle: {
      readonly classId: u64;
      readonly assetId: u64;
      readonly bundleId: H256;
      readonly schema: ITuple<[Vec<u64>, Vec<Vec<u64>>, Vec<Vec<u128>>]>;
      readonly metadata: Bytes;
    } & Struct;
    readonly isMintBundle: boolean;
    readonly asMintBundle: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly bundleId: H256;
      readonly amount: u128;
    } & Struct;
    readonly isBurnBundle: boolean;
    readonly asBurnBundle: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly bundleId: H256;
      readonly amount: u128;
    } & Struct;
    readonly type: 'RegisterBundle' | 'MintBundle' | 'BurnBundle';
  }

  /** @name SugarfungeBagCall (156) */
  interface SugarfungeBagCall extends Enum {
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly classId: u64;
      readonly metadata: Bytes;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly classId: u64;
      readonly owners: Vec<AccountId32>;
      readonly shares: Vec<u128>;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly bag: AccountId32;
      readonly classIds: Vec<u64>;
      readonly assetIds: Vec<Vec<u64>>;
      readonly amounts: Vec<Vec<u128>>;
    } & Struct;
    readonly isSweep: boolean;
    readonly asSweep: {
      readonly to: AccountId32;
      readonly bag: AccountId32;
    } & Struct;
    readonly type: 'Register' | 'Create' | 'Deposit' | 'Sweep';
  }

  /** @name SugarfungeExgineCall (157) */
  interface SugarfungeExgineCall extends Enum {
    readonly isDoSomething: boolean;
    readonly asDoSomething: {
      readonly something: u32;
    } & Struct;
    readonly isCauseError: boolean;
    readonly type: 'DoSomething' | 'CauseError';
  }

  /** @name SugarfungeMarketCall (158) */
  interface SugarfungeMarketCall extends Enum {
    readonly isCreateMarket: boolean;
    readonly asCreateMarket: {
      readonly marketId: u64;
    } & Struct;
    readonly isCreateMarketRate: boolean;
    readonly asCreateMarketRate: {
      readonly marketId: u64;
      readonly marketRateId: u64;
      readonly rates: Vec<SugarfungeMarketAssetRate>;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly marketId: u64;
      readonly marketRateId: u64;
      readonly amount: u128;
    } & Struct;
    readonly isExchangeAssets: boolean;
    readonly asExchangeAssets: {
      readonly marketId: u64;
      readonly marketRateId: u64;
      readonly amount: u128;
    } & Struct;
    readonly type: 'CreateMarket' | 'CreateMarketRate' | 'Deposit' | 'ExchangeAssets';
  }

  /** @name FunctionlandFulaCall (161) */
  interface FunctionlandFulaCall extends Enum {
    readonly isUpdateManifest: boolean;
    readonly asUpdateManifest: {
      readonly cid: Bytes;
      readonly poolId: u32;
      readonly activeCycles: u16;
      readonly missedCycles: u16;
      readonly activeDays: i32;
    } & Struct;
    readonly isUploadManifest: boolean;
    readonly asUploadManifest: {
      readonly manifest: Bytes;
      readonly cid: Bytes;
      readonly poolId: u32;
      readonly replicationFactor: u16;
    } & Struct;
    readonly isStorageManifest: boolean;
    readonly asStorageManifest: {
      readonly uploader: AccountId32;
      readonly cid: Bytes;
      readonly poolId: u32;
    } & Struct;
    readonly isRemoveStorer: boolean;
    readonly asRemoveStorer: {
      readonly storage: AccountId32;
      readonly cid: Bytes;
      readonly poolId: u32;
    } & Struct;
    readonly isRemoveStoredManifest: boolean;
    readonly asRemoveStoredManifest: {
      readonly uploader: AccountId32;
      readonly cid: Bytes;
      readonly poolId: u32;
    } & Struct;
    readonly isRemoveManifest: boolean;
    readonly asRemoveManifest: {
      readonly cid: Bytes;
      readonly poolId: u32;
    } & Struct;
    readonly type: 'UpdateManifest' | 'UploadManifest' | 'StorageManifest' | 'RemoveStorer' | 'RemoveStoredManifest' | 'RemoveManifest';
  }

  /** @name FulaPoolCall (164) */
  interface FulaPoolCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly name: Bytes;
      readonly peerId: Bytes;
    } & Struct;
    readonly isLeavePool: boolean;
    readonly asLeavePool: {
      readonly poolId: u32;
    } & Struct;
    readonly isJoin: boolean;
    readonly asJoin: {
      readonly poolId: u32;
      readonly peerId: Bytes;
    } & Struct;
    readonly isCancelJoin: boolean;
    readonly asCancelJoin: {
      readonly poolId: u32;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly poolId: u32;
      readonly account: AccountId32;
      readonly positive: bool;
    } & Struct;
    readonly type: 'Create' | 'LeavePool' | 'Join' | 'CancelJoin' | 'Vote';
  }

  /** @name PalletSudoError (166) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletSchedulerScheduledV3 (169) */
  interface PalletSchedulerScheduledV3 extends Struct {
    readonly maybeId: Option<Bytes>;
    readonly priority: u8;
    readonly call: FrameSupportScheduleMaybeHashed;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: SugarfungeRuntimeOriginCaller;
  }

  /** @name SugarfungeRuntimeOriginCaller (170) */
  interface SugarfungeRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly type: 'System' | 'Void' | 'Council';
  }

  /** @name FrameSupportDispatchRawOrigin (171) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (172) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name PalletSchedulerError (173) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange';
  }

  /** @name PalletCollectiveVotes (175) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveError (176) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
  }

  /** @name SugarfungeValidatorSetError (178) */
  interface SugarfungeValidatorSetError extends Enum {
    readonly isTooLowValidatorCount: boolean;
    readonly isDuplicate: boolean;
    readonly isValidatorNotApproved: boolean;
    readonly isBadOrigin: boolean;
    readonly type: 'TooLowValidatorCount' | 'Duplicate' | 'ValidatorNotApproved' | 'BadOrigin';
  }

  /** @name SpCoreCryptoKeyTypeId (183) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (184) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name SugarfungeAssetClass (185) */
  interface SugarfungeAssetClass extends Struct {
    readonly owner: AccountId32;
    readonly metadata: Bytes;
  }

  /** @name SugarfungeAssetAsset (187) */
  interface SugarfungeAssetAsset extends Struct {
    readonly classId: u64;
    readonly creator: AccountId32;
    readonly metadata: Bytes;
  }

  /** @name SugarfungeAssetError (189) */
  interface SugarfungeAssetError extends Enum {
    readonly isUnknown: boolean;
    readonly isInUse: boolean;
    readonly isInvalidAssetId: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isNumOverflow: boolean;
    readonly isInvalidArrayLength: boolean;
    readonly isOverflow: boolean;
    readonly isInvalidClassId: boolean;
    readonly isNoPermission: boolean;
    readonly isClassNotFound: boolean;
    readonly isAssetNotFound: boolean;
    readonly type: 'Unknown' | 'InUse' | 'InvalidAssetId' | 'InsufficientBalance' | 'NumOverflow' | 'InvalidArrayLength' | 'Overflow' | 'InvalidClassId' | 'NoPermission' | 'ClassNotFound' | 'AssetNotFound';
  }

  /** @name SugarfungeDaoError (190) */
  interface SugarfungeDaoError extends Enum {
    readonly isNoneValue: boolean;
    readonly isStorageOverflow: boolean;
    readonly type: 'NoneValue' | 'StorageOverflow';
  }

  /** @name SugarfungeBundleBundle (191) */
  interface SugarfungeBundleBundle extends Struct {
    readonly creator: AccountId32;
    readonly classId: u64;
    readonly assetId: u64;
    readonly metadata: Bytes;
    readonly schema: ITuple<[Vec<u64>, Vec<Vec<u64>>, Vec<Vec<u128>>]>;
    readonly vault: AccountId32;
  }

  /** @name FrameSupportPalletId (192) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name SugarfungeBundleError (193) */
  interface SugarfungeBundleError extends Enum {
    readonly isInvalidBundleIdForBundle: boolean;
    readonly isBundleExists: boolean;
    readonly isBundleNotFound: boolean;
    readonly isNumOverflow: boolean;
    readonly isInvalidArrayLength: boolean;
    readonly isInsufficientBalance: boolean;
    readonly type: 'InvalidBundleIdForBundle' | 'BundleExists' | 'BundleNotFound' | 'NumOverflow' | 'InvalidArrayLength' | 'InsufficientBalance';
  }

  /** @name SugarfungeBagBagClass (194) */
  interface SugarfungeBagBagClass extends Struct {
    readonly operator: AccountId32;
    readonly classId: u64;
  }

  /** @name SugarfungeBagBag (195) */
  interface SugarfungeBagBag extends Struct {
    readonly operator: AccountId32;
    readonly classId: u64;
    readonly assetId: u64;
    readonly totalShares: u128;
  }

  /** @name SugarfungeBagError (196) */
  interface SugarfungeBagError extends Enum {
    readonly isBagClassExists: boolean;
    readonly isBagExists: boolean;
    readonly isInvalidBagClass: boolean;
    readonly isInvalidBag: boolean;
    readonly isInvalidBagOperator: boolean;
    readonly isInvalidBagOwner: boolean;
    readonly isInvalidArrayLength: boolean;
    readonly isInsufficientShares: boolean;
    readonly type: 'BagClassExists' | 'BagExists' | 'InvalidBagClass' | 'InvalidBag' | 'InvalidBagOperator' | 'InvalidBagOwner' | 'InvalidArrayLength' | 'InsufficientShares';
  }

  /** @name SugarfungeExgineError (197) */
  interface SugarfungeExgineError extends Enum {
    readonly isNoneValue: boolean;
    readonly isStorageOverflow: boolean;
    readonly type: 'NoneValue' | 'StorageOverflow';
  }

  /** @name SugarfungeMarketMarket (198) */
  interface SugarfungeMarketMarket extends Struct {
    readonly owner: AccountId32;
    readonly vault: AccountId32;
  }

  /** @name SugarfungeMarketError (200) */
  interface SugarfungeMarketError extends Enum {
    readonly isOverflow: boolean;
    readonly isInsufficientAmount: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isInvalidMarket: boolean;
    readonly isInvalidMarketRate: boolean;
    readonly isInvalidMarketOwner: boolean;
    readonly isNotAuthorizedToMintAsset: boolean;
    readonly isMarketExists: boolean;
    readonly isMarketRateExists: boolean;
    readonly isInvalidAsset: boolean;
    readonly isInvalidAssetRate: boolean;
    readonly isInvalidRateAccount: boolean;
    readonly isInvalidRateAmount: boolean;
    readonly isInvalidBurnPrice: boolean;
    readonly isInvalidBurnBalance: boolean;
    readonly isInvalidTransferPrice: boolean;
    readonly isInvalidTransferBalance: boolean;
    readonly isInvalidBuyer: boolean;
    readonly isInvalidArrayLength: boolean;
    readonly type: 'Overflow' | 'InsufficientAmount' | 'InsufficientLiquidity' | 'InvalidMarket' | 'InvalidMarketRate' | 'InvalidMarketOwner' | 'NotAuthorizedToMintAsset' | 'MarketExists' | 'MarketRateExists' | 'InvalidAsset' | 'InvalidAssetRate' | 'InvalidRateAccount' | 'InvalidRateAmount' | 'InvalidBurnPrice' | 'InvalidBurnBalance' | 'InvalidTransferPrice' | 'InvalidTransferBalance' | 'InvalidBuyer' | 'InvalidArrayLength';
  }

  /** @name FunctionlandFulaManifest (203) */
  interface FunctionlandFulaManifest extends Struct {
    readonly storage: Vec<AccountId32>;
    readonly replicationFactor: u16;
    readonly manifestData: FunctionlandFulaManifestData;
  }

  /** @name FunctionlandFulaManifestData (204) */
  interface FunctionlandFulaManifestData extends Struct {
    readonly uploader: AccountId32;
    readonly manifestMetadata: Bytes;
  }

  /** @name FunctionlandFulaManifestStorageData (205) */
  interface FunctionlandFulaManifestStorageData extends Struct {
    readonly activeCycles: u16;
    readonly missedCycles: u16;
    readonly activeDays: i32;
  }

  /** @name FunctionlandFulaError (206) */
  interface FunctionlandFulaError extends Enum {
    readonly isNoneValue: boolean;
    readonly isStorageOverflow: boolean;
    readonly isReplicationFactorLimitReached: boolean;
    readonly isReplicationFactorInvalid: boolean;
    readonly isAccountAlreadyStorer: boolean;
    readonly isAccountNotStorer: boolean;
    readonly isAccountNotInPool: boolean;
    readonly isManifestAlreadyExist: boolean;
    readonly isManifestNotFound: boolean;
    readonly isManifestNotStored: boolean;
    readonly type: 'NoneValue' | 'StorageOverflow' | 'ReplicationFactorLimitReached' | 'ReplicationFactorInvalid' | 'AccountAlreadyStorer' | 'AccountNotStorer' | 'AccountNotInPool' | 'ManifestAlreadyExist' | 'ManifestNotFound' | 'ManifestNotStored';
  }

  /** @name FulaPoolPool (207) */
  interface FulaPoolPool extends Struct {
    readonly name: Bytes;
    readonly owner: Option<AccountId32>;
    readonly parent: Option<u32>;
    readonly participants: Vec<AccountId32>;
    readonly requestNumber: u8;
  }

  /** @name FulaPoolPoolRequest (210) */
  interface FulaPoolPoolRequest extends Struct {
    readonly voted: Vec<AccountId32>;
    readonly positiveVotes: u16;
    readonly peerId: Bytes;
  }

  /** @name FulaPoolUser (211) */
  interface FulaPoolUser extends Struct {
    readonly poolId: Option<u32>;
    readonly requestPoolId: Option<u32>;
    readonly peerId: Bytes;
  }

  /** @name FulaPoolError (212) */
  interface FulaPoolError extends Enum {
    readonly isUserBusy: boolean;
    readonly isMaxPools: boolean;
    readonly isNameTooLong: boolean;
    readonly isPoolDoesNotExist: boolean;
    readonly isRequestDoesNotExist: boolean;
    readonly isCapacityReached: boolean;
    readonly isUserDoesNotExist: boolean;
    readonly isAccessDenied: boolean;
    readonly isInternalError: boolean;
    readonly isAlreadyVoted: boolean;
    readonly type: 'UserBusy' | 'MaxPools' | 'NameTooLong' | 'PoolDoesNotExist' | 'RequestDoesNotExist' | 'CapacityReached' | 'UserDoesNotExist' | 'AccessDenied' | 'InternalError' | 'AlreadyVoted';
  }

  /** @name SpRuntimeMultiSignature (214) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreSr25519Signature (215) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (216) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (219) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (220) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (221) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (222) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (225) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (226) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (227) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name SugarfungeRuntimeRuntime (228) */
  type SugarfungeRuntimeRuntime = Null;

} // declare module
