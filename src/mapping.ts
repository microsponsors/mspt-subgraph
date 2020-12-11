import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Transfer,
  Approval,
  ApprovalForAll
} from "../generated/Contract/Contract"
import { TransferTimeSlot } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = TransferTimeSlot.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new TransferTimeSlot(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    // entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  // entity.from = event.params.from
  // entity.to = event.params.to

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.supportsInterface(...)
  // - contract.name(...)
  // - contract.getApproved(...)
  // - contract.mintFee(...)
  // - contract.tokenToFederationId(...)
  // - contract.totalSupply(...)
  // - contract.tokensMintedBy(...)
  // - contract.owner2(...)
  // - contract.paused(...)
  // - contract.ownerOf(...)
  // - contract.balanceOf(...)
  // - contract.owner1(...)
  // - contract.tokenMinterPropertyNames(...)
  // - contract.registry(...)
  // - contract.tokensOfOwner(...)
  // - contract.symbol(...)
  // - contract.tokenMinterContentIds(...)
  // - contract.tokenURI(...)
  // - contract.tokenTimeSlot(...)
  // - contract.isApprovedForAll(...)
}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}
