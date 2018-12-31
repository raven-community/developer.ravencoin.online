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

const SERVER = `https://assetfaucet.ravencoin.online`

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
  rvnBalance: number, // Initial balance before retreiving form server.
  astBalance: string, // Coming back as string from API.  Works, but should turn to number
}

class RvnFaucet extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      outputText: '',
      rvnAddr: '',
      linkAddr: '#',
      linkOn: false,
      rvnBalance: 0,
      astBalance: 0,
    }
  }

  render() {
    if (this.state.astBalance === 0) this.getBalance()

    return (
      <WrapperDiv>
        <H3>
          This is a <u>testnet</u> faucet ravencoin assets! It is built with{' '}
          <StyledLink to="/rvnbox">RVNBOX JavaScript SDK</StyledLink>. It
          currently gives out <u>3 assets</u>.
        </H3>

        <FaucetBalanceDisplay
          title="Current faucet balance"
          data={[
            { item: 'RVN', amount: this.state.rvnBalance },
            { item: 'AST', amount: this.state.astBalance },
          ]}
        />

        <Text>
          <SmartLink to="https://github.com/raven-community/asset-faucet">
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
            placeholder="rvntest:qr8d0cp00a07gwf7ltg4ufu48a849j98x5dj7zk423"
            value={this.state.rvnAddr}
            onChange={this.handleChange}
          />
          <Button type="button" onClick={this.requestAST}>
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
          <i>rvntest:qr8d0cp00a07gwf7ltg4ufu48a849j98x5dj7zk423</i>
        </Text>
      </WrapperDiv>
    )
  }

  // Updates the state as the user updates the input form.
  handleChange = ({ target }) => {
    this.setState({ rvnAddr: target.value })
  }

  // Retrieve the wallet balance from the server.
  getBalance = async () => {
    const resp = await fetch(`${SERVER}/tokens/`)
    const body = await resp.json()

    this.setState(prevState => ({
      rvnBalance: body.rvn,
      astBalance: body.ast,
    }))
  }

  requestAST = async () => {
    try {
      this.wipeOutput()
      this.addOutput(`Sending request...`)

      if (this.state.rvnAddr === '') {
        this.addOutput(`Error: RVN Address can not be blank`)
        return
      }

      const resp = await fetch(`${SERVER}/tokens/${this.state.rvnAddr}`)
      const body = await resp.json()

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

      this.addOutput(`Success: testnet assets are on their way!`)
      this.addOutput(`TXID: ${body.txid}`)

      // Show the link to the block explorer.
      this.showLink(body.txid)
    } catch (err) {
      console.log(`Error in request asset: `, err)
    }
  }

  showLink(txid) {
    this.setState(prevState => ({
      linkOn: true,
      linkAddr: `https://testnet.ravencoin.network/tx/${txid}`,
    }))
  }

  // Add another line to the output.
  addOutput = (str: string) => {
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
