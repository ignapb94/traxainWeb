const { assert } = require('chai');

const TraxainToken = artifacts.require('TraxainToken')
const TraxainDapp = artifacts.require('TraxainDapp')
//const DappToken = artifacts.require('DappToken')
//const TokenFarm = artifacts.require('TokenFarm')

require('chai')
.use(require('chai-as-promised'))
.should()

function tokens(n) {
	return web3.utils.toWei (n, 'ether');
}

contract('TraxainToken', ([owner, investor]) =>{
//aqui escribiremos los test
let traxainToken
let traxainDapp

before(async() => {
	//bajamos los contratos
	traxainToken = await TraxainToken.new()
	traxainDapp = await TraxainDapp.new('0x40e6cfDF902F31877B172ded93CFF698Bcce163F', '0xBdc50027c1CC234C6f30838656D969365de91a2b')
	await traxainToken.increaseAllowance('0xE8bb59EF7BfdCa79ae6a210d919358dC3D1E3A20', 1, {from: '0x37024244E62F2B430e7B0eA207373076d66C435b'})
	await traxainToken.approve('0xE8bb59EF7BfdCa79ae6a210d919358dC3D1E3A20', 1, {from: '0x37024244E62F2B430e7B0eA207373076d66C435b'})
	//dappToken = await DappToken.new()
	//tokenFarm = await TokenFarm.new(dappToken.address, daiToken.address)

//transferein¡mos los tokens a la granja
//await dappToken.transfer(tokenFarm.address, tokens('1000000'))

//await daiToken.transfer(investor, tokens('100'), {from: owner})

})


describe('Traxain token deployment', async () => {
	it('has a name', async () =>{
		const name = await traxainToken.name()
		assert.equal(name, 'TraxainToken')//estoy viendo si el nombre es igual al que esperaba

	})
})



it('contract has tokens',async() => {
	let balance = await traxainToken.balanceOf('0x37024244E62F2B430e7B0eA207373076d66C435b')
	assert.equal(balance.toString(), tokens('10000000'))
})



	it('increases alloance', async () =>{
		let allowance = await traxainToken.allowance('0x37024244E62F2B430e7B0eA207373076d66C435b','0xE8bb59EF7BfdCa79ae6a210d919358dC3D1E3A20')
		console.log(allowance)
		assert.equal(allowance, 2)//estoy viendo si el nombre es igual al que esperaba

	})


	it('creates trip', async () =>{
	await traxainDapp.createTrip("foo",1,2,1,'0xBdc50027c1CC234C6f30838656D969365de91a2b',{from: '0x37024244E62F2B430e7B0eA207373076d66C435b'} )
	await traxainToken.transfer('0xBdc50027c1CC234C6f30838656D969365de91a2b',1,{from: '0x37024244E62F2B430e7B0eA207373076d66C435b'})
	console.log(traxainDapp.everyTrip[1])
	})
	
	




})


/*

	describe('Farmig tokens',async() => {
		it('rewards inverstors for staking', async() => {
			let result

			//primero vemos el balance del inveros antes
			result = await daiToken.balanceOf(investor)
			assert.equal(result.toString(),tokens('100'), 'balance del investor es correcto antes del staking')

			//stake Dai tokens
			await daiToken.approve(tokenFarm.address, tokens('100'), {from: investor })
			await tokenFarm.stakeTokens(tokens('100'),{from:investor})


			result = await daiToken.balanceOf(investor)
			assert.equal(result.toString(), tokens('0'),'balance del inversor correcto despues')

			result = await daiToken.balanceOf(tokenFarm.address)
			assert.equal(result.toString(), tokens('100'),'balance del TokenFarm correcto despues')
			
			result = await tokenFarm.stakingBalance(investor)
			assert.equal(result.toString(), tokens('100'),'balance del TokenFarm stakeadop correcto despues')
	
			result = await tokenFarm.isStaking(investor)
			assert.equal(result.toString(), 'true','es status es correcto')
//issue tokens
			await tokenFarm.issueTokens({from: owner})

// Check balances after issuance

			result = await dappToken.balanceOf(investor)
			assert.equal(result.toString(), tokens('100'), 'balance del inversor en Dapp okens despues de issueance')

			// asegurar que el owner es el unico que puedee pedir tokens
			await tokenFarm.issueTokens({from: investor}).should.be.rejected;
		

			//unstake tokens
			await tokenFarm.unstakeTokens({ from: investor })
			//revisar los resultados en inversor
			result = await daiToken.balanceOf(investor)
			assert.equal(result.toString(), tokens('100'), 'balance en Dai del inversoro correcto')
			
			//revisar los resultados en tokenFarm
			result = await daiToken.balanceOf(tokenFarm.address)
			assert.equal(result.toString(), tokens('0'), 'balance en Dai del contrato correcto')
			
			//revisar si el inversor sigue en staking
			result = await tokenFarm.stakingBalance(investor)
			assert.equal(result.toString(), tokens('0'), 'balance en tokenFarm de investor es 0')
		
		
        })
        
    })
    
})*/