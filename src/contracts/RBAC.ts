/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface RBACInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addAdmin"
      | "addMember"
      | "admins"
      | "members"
      | "owner"
      | "removeAdmin"
      | "removeMember"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminAdded"
      | "AdminRemoved"
      | "MemberAdded"
      | "MemberRemoved"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addMember",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "admins", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "members",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMember",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "addAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admins", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "members", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMember",
    data: BytesLike
  ): Result;
}

export namespace AdminAddedEvent {
  export type InputTuple = [admin: AddressLike];
  export type OutputTuple = [admin: string];
  export interface OutputObject {
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AdminRemovedEvent {
  export type InputTuple = [admin: AddressLike];
  export type OutputTuple = [admin: string];
  export interface OutputObject {
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MemberAddedEvent {
  export type InputTuple = [member: AddressLike];
  export type OutputTuple = [member: string];
  export interface OutputObject {
    member: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MemberRemovedEvent {
  export type InputTuple = [member: AddressLike];
  export type OutputTuple = [member: string];
  export interface OutputObject {
    member: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RBAC extends BaseContract {
  connect(runner?: ContractRunner | null): RBAC;
  waitForDeployment(): Promise<this>;

  interface: RBACInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  addMember: TypedContractMethod<[_member: AddressLike], [void], "nonpayable">;

  admins: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  members: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  removeAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  removeMember: TypedContractMethod<
    [_member: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addMember"
  ): TypedContractMethod<[_member: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "admins"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "members"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeMember"
  ): TypedContractMethod<[_member: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AdminAdded"
  ): TypedContractEvent<
    AdminAddedEvent.InputTuple,
    AdminAddedEvent.OutputTuple,
    AdminAddedEvent.OutputObject
  >;
  getEvent(
    key: "AdminRemoved"
  ): TypedContractEvent<
    AdminRemovedEvent.InputTuple,
    AdminRemovedEvent.OutputTuple,
    AdminRemovedEvent.OutputObject
  >;
  getEvent(
    key: "MemberAdded"
  ): TypedContractEvent<
    MemberAddedEvent.InputTuple,
    MemberAddedEvent.OutputTuple,
    MemberAddedEvent.OutputObject
  >;
  getEvent(
    key: "MemberRemoved"
  ): TypedContractEvent<
    MemberRemovedEvent.InputTuple,
    MemberRemovedEvent.OutputTuple,
    MemberRemovedEvent.OutputObject
  >;

  filters: {
    "AdminAdded(address)": TypedContractEvent<
      AdminAddedEvent.InputTuple,
      AdminAddedEvent.OutputTuple,
      AdminAddedEvent.OutputObject
    >;
    AdminAdded: TypedContractEvent<
      AdminAddedEvent.InputTuple,
      AdminAddedEvent.OutputTuple,
      AdminAddedEvent.OutputObject
    >;

    "AdminRemoved(address)": TypedContractEvent<
      AdminRemovedEvent.InputTuple,
      AdminRemovedEvent.OutputTuple,
      AdminRemovedEvent.OutputObject
    >;
    AdminRemoved: TypedContractEvent<
      AdminRemovedEvent.InputTuple,
      AdminRemovedEvent.OutputTuple,
      AdminRemovedEvent.OutputObject
    >;

    "MemberAdded(address)": TypedContractEvent<
      MemberAddedEvent.InputTuple,
      MemberAddedEvent.OutputTuple,
      MemberAddedEvent.OutputObject
    >;
    MemberAdded: TypedContractEvent<
      MemberAddedEvent.InputTuple,
      MemberAddedEvent.OutputTuple,
      MemberAddedEvent.OutputObject
    >;

    "MemberRemoved(address)": TypedContractEvent<
      MemberRemovedEvent.InputTuple,
      MemberRemovedEvent.OutputTuple,
      MemberRemovedEvent.OutputObject
    >;
    MemberRemoved: TypedContractEvent<
      MemberRemovedEvent.InputTuple,
      MemberRemovedEvent.OutputTuple,
      MemberRemovedEvent.OutputObject
    >;
  };
}
