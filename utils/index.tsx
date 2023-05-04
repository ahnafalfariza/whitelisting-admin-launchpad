import { BN, bnToBn, u8aToHex } from '@polkadot/util'
import type { WeightV2 } from '@polkadot/types/interfaces'
import { ApiPromise } from '@polkadot/api'
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto'

export const getMaxGasLimit = (api: ApiPromise, reductionFactor = 0.8) => {
	const blockWeights = api.consts.system.blockWeights.toPrimitive() as any
	const maxExtrinsic = blockWeights?.perClass?.normal?.maxExtrinsic
	const maxRefTime = maxExtrinsic?.refTime
		? bnToBn(maxExtrinsic.refTime)
				.mul(new BN(reductionFactor * 100))
				.div(new BN(100))
		: new BN(0)
	const maxProofSize = maxExtrinsic?.proofSize
		? bnToBn(maxExtrinsic.proofSize)
				.mul(new BN(reductionFactor * 100))
				.div(new BN(100))
		: new BN(0)

	return getGasLimit(api, maxRefTime, maxProofSize)
}

export const getGasLimit = (
	api: ApiPromise,
	_refTime: string | BN,
	_proofSize: string | BN
) => {
	const refTime = bnToBn(_refTime)
	const proofSize = bnToBn(_proofSize)

	return api.registry.createType('WeightV2', {
		refTime,
		proofSize,
	}) as WeightV2
}

export const ASTAR_SS58_FORMAT = 5

export const getAstarSs58Address = (address: string) => {
	const astarSs58Address = encodeAddress(
		u8aToHex(decodeAddress(address)),
		ASTAR_SS58_FORMAT
	)
	return astarSs58Address
}
