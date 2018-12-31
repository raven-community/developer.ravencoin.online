// @flow

import 'isomorphic-fetch'
import React from 'react'
import styled from 'styled-components'

import Button from 'atoms/Button'
import StyledLink, { SmartLink } from 'atoms/StyledLink'
import H3 from 'atoms/H3'
import Text from 'atoms/Text'
import Input from 'atoms/Input'
import Well from 'atoms/Well'
import spacing from 'styles/spacing'

import FaucetBalanceDisplay from './FaucetBalanceDisplay'

const SERVER = `https://faucet.ravencoin.online`

const WrapperDiv = styled.div`
  padding-top: ${spacing.large};
  display: grid;
  grid-gap: ${spacing.small};
`

const TxLink = styled.p`
  padding: 25px;
`

const AddressForm = styled.form`
  display: grid;
  grid-gap: ${spacing.small};
  grid-auto-columns: min-content;
`

type Props = {}
type State = {
  outputText: string, // Output of the Well.
  rvnAddr: string, // rvnAddress provided by user.
  linkAddr: string, // Link URL to block explorer.
  linkOn: boolean, // Toggles block explorer link.
  balance: number, // Initial balance before retreiving form server.
}

class RvnFaucet extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      outputText: '',
      rvnAddr: '',
      linkAddr: '#',
      linkOn: false,
      balance: 0,
    }
  }

  render() {
    if (this.state.balance === 0) this.getBalance()

    return (
      <WrapperDiv>
        <H3>
          This is a <u>testnet</u> faucet for Ravencoin! It is built with{' '}
          <StyledLink to="/rvnbox">RVNBOX JavaScript SDK</StyledLink>. It
          currently gives out <u>0.1 RVN</u>.
        </H3>

        <FaucetBalanceDisplay
          title="Current faucet balance"
          data={[{ item: 'RVN', amount: this.state.balance }]}
        />

        <Text>
          <SmartLink to="https://github.com/raven-community/testnet-faucet">
            Fork the code on GitHub!
          </SmartLink>
        </Text>

        <AddressForm>
          <Text for="rvnAddr" as="label" bold>
            RVN Testnet Address
          </Text>
          <Input
            type="text"
            id="rvnAddr"
            size="60"
            placeholder="rvntest:qqmd9unmhkpx4pkmr6fkrr8rm6y77vckjvqe8aey35"
            value={this.state.rvnAddr}
            onChange={this.handleChange}
          />
          <Button type="button" onClick={this.requestRVN}>
            Get tRVN!
          </Button>
        </AddressForm>

        <Well>
          <Text>{this.state.outputText}</Text>
        </Well>

        {this.state.linkOn && (
          <TxLink>
            <SmartLink to={this.state.linkAddr}>
              View TX on Block Explorer
            </SmartLink>
          </TxLink>
        )}

        <Text>
          Please send your leftover testnet coins back to the faucet:
          <br />
          <i>rvntest:qqmd9unmhkpx4pkmr6fkrr8rm6y77vckjvqe8aey35</i>
        </Text>
      </WrapperDiv>
    )
  }

  // Updates the state as the user updates the input form.
  handleChange = ({ target }) => {
    this.setState({ rvnAddr: target.value })
  }

  getBalance = async () => {
    const resp = await fetch(`${SERVER}/coins/`)
    const body = await resp.json()

    this.setState(prevState => ({
      balance: body.balance,
    }))
  }

  requestRVN = async () => {
    try {
      this.wipeOutput()

      this.addOutput(`Sending request...`)

      if (this.state.rvnAddr === '') {
        this.addOutput(`Error: RVN Address can not be blank`)
        return
      }

      const resp = await fetch(`${SERVER}/coins/${this.state.rvnAddr}`)
      const body = await resp.json()
      console.log(`body: ${JSON.stringify(body, null, 2)}`)

      if (!body.success) {
        const message = body.message

        if (message === `Invalid RVN address.`)
          this.addOutput(`Error: Invalid RVN testnet address`)
        else
          this.addOutput(
            `Error: This RVN address has been used before, or you need to wait 24 hours to request from this IP address.`
          )

        return
      }

      this.addOutput(`Success: testnet RVN are on their way!`)
      this.addOutput(`TXID: ${body.txid}`)

      // Show the link to the block explorer.
      this.showLink(body.txid)
    } catch (err) {
      console.log(`Error in requestRVN: `, err)
    }
  }

  showLink(txid) {
    this.setState(prevState => ({
      linkOn: true,
      linkAddr: `https://testnet.ravencoin.network/tx/${txid}`,
    }))
  }

  // Add another line to the output.
  addOutput = str => {
    this.setState(prevState => ({
      outputText: prevState.outputText + `\n${str}`,
    }))
  }

  // Clear the output.
  wipeOutput = () => {
    this.setState(prevState => ({
      outputText: '',
    }))
  }
}

export default RvnFaucet
