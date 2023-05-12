import Head from 'next/head'

import AdminForm from '../components/AdminForm'
import { useEffect, useState } from 'react'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { web3Accounts } from '@polkadot/extension-dapp'
import { Button, message, notification } from 'antd'
import ContractForm from '../components/ContractForm'
import { ContractPromise } from '@polkadot/api-contract'
import abi_refundable from '../config/abi-refundable'
import { getAstarSs58Address, getMaxGasLimit } from '../utils'
import StakerInfoForm from '../components/StakerInfoForm'

type InjectedAccount = Awaited<ReturnType<typeof web3Accounts>>

export default function Home() {
	const [api, setApi] = useState<ApiPromise>()
	const [allAccount, setAllAccount] = useState<InjectedAccount>()
	const [contract, setContract] = useState<ContractPromise>()

	const [contractOwner, setContractOwner] = useState<InjectedAccount[0]>()

	const [apiNotification, contextHolder] = notification.useNotification()

	useEffect(() => {
		const initialize = async () => {
			const provider = new WsProvider(
				process.env.APP_ENV === 'development'
					? 'wss://rpc.shibuya.astar.network'
					: 'wss://rpc.astar.network/'
			)
			const api = await ApiPromise.create({ provider })

			setApi(api)
		}

		initialize()
	}, [])

	const connect = async () => {
		const { web3Enable, web3Accounts } = await import(
			'@polkadot/extension-dapp'
		)

		const extensions = await web3Enable('Whitelist Admin')

		if (extensions.length === 0) return

		const allAccounts = await web3Accounts()
		setAllAccount(allAccounts)
	}

	const initializeContract = async (contractId: string) => {
		if (!api) return

		setContractOwner(undefined)
		setContract(undefined)

		const contract = new ContractPromise(api, abi_refundable, contractId)
		setContract(contract)

		return contract
	}

	const checkIfCurrentUserIsContractOwner = async (contractId: string) => {
		if (!api) return

		const contract = await initializeContract(contractId)

		if (!contract) return

		const { output, result } = await contract.query['ownable::owner'](
			allAccount?.[0].address || '',
			{
				gasLimit: getMaxGasLimit(api),
				storageDepositLimit: null,
			}
		)

		const parsedResult = result.toHuman() as any
		const parsedOutput = output?.toHuman() as any

		if (parsedOutput?.Ok) {
			const contractOwner = parsedOutput.Ok

			const foundContractOwner = allAccount?.find(
				({ address }) => getAstarSs58Address(address) === contractOwner
			)
			if (foundContractOwner) {
				message.info(
					"You're the owner of this contract, you can add or remove account for whitelist",
					5
				)
				setContractOwner(foundContractOwner)
			} else {
				message.error("You're not the owner of this contract")
			}
		} else {
			message.error('Error ' + JSON.stringify(parsedOutput || parsedResult))
		}
	}

	const addWhitelist = async ({
		whitelistType,
		address,
	}: {
		whitelistType: 'presale' | 'prepresale'
		address: { accountId: string; mintAmount: string }[]
	}) => {
		if (!contract || !api) return

		apiNotification.open({
			message: 'Waiting for transaction to be confirmed',
		})

		await api.isReady
		const { web3FromSource } = await import('@polkadot/extension-dapp')
		const injector = await web3FromSource(contractOwner?.meta.source || '')
		const signer = injector?.signer
		api.setSigner(signer)

		const accountIdMintAmounts = address?.map(({ accountId, mintAmount }) => [
			accountId,
			parseInt(mintAmount),
		])

		await new Promise((resolve, reject) => {
			contract.tx[
				whitelistType === 'prepresale'
					? 'launchpad::addAccountToPrepresaleBatch'
					: 'launchpad::addAccountToPresaleBatch'
			](
				{ gasLimit: getMaxGasLimit(api), storageDepositLimit: null },
				accountIdMintAmounts
			).signAndSend(contractOwner?.address || '', async (result) => {
				const isInBlock = result?.status?.isInBlock
				if (!isInBlock) return
				const errorEvent = result?.events.find(
					({ event: { method } }: any) => method === 'ExtrinsicFailed'
				)
				if (isInBlock && errorEvent) {
					reject()
					throw new Error('ExtrinsicFailed')
				} else if (isInBlock) {
					console.log('result', result)
					apiNotification.success({
						message: 'Successfully addedd to whitelist',
						duration: 0,
					})
					resolve(result)
				}
			})
		})
	}

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{contextHolder}

			<main className="m-3 md:m-8 min-h-screen flex flex-col items-center justify-center relative">
				{allAccount && allAccount.length > 1 ? (
					<>
						<ContractForm checkContract={checkIfCurrentUserIsContractOwner} />
						<AdminForm disabled={!contractOwner} onSubmit={addWhitelist} />
						<StakerInfoForm api={api} allAccount={allAccount} />
					</>
				) : (
					<Button onClick={connect}>Connect</Button>
				)}
			</main>
		</div>
	)
}
