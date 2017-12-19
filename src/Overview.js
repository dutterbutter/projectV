import React from 'react';

class Overview extends React.Component {
    render() {
        return (

            <div id="overview" className="section scrollspy col s12 col m12 col l8 offset-l4">
                <h3>Overview</h3>
                <p>The Cosmos Hub is based on Tendermint, which relies on a
                        set of validators that are responsible for committing new blocks
                        in the blockchain. These validators participate in the consensus
                        protocol by broadcasting votes which contain cryptographic signatures
                        signed by each validator’s private key.</p>

                <p>Validator candidates can bond their own ATOMs and have ATOMs “delegated”,
                        or staked, to them by token holders. The Cosmos Hub will have 100 validators,
                        but over time this will increase to 300 validators according to a predefined
                        schedule. The validators are determined by who has the most stake delegated to
                        them — the top 100 validator candidates with the most stake will become Cosmos validators.
      </p>

                <p> Validators and their delegators will earn ATOMs as block provisions and tokens
                            as transaction fees through execution of the Tendermint consensus protocol.
                            Initially, transaction fees will be paid in ATOMs but in the future, any token
                            in the Cosmos ecosystem will be valid as fee tender if it is whitelisted by
                            governance. Note that validators can set commission on the fees their delegators
                            receive as additional incentive.</p>

                <p>If validators double sign, are frequently offline or do not participate in
                        governance, their staked ATOMs (including ATOMs of users that delegated to them)
                        can be slashed. The penalty depends on the severity of the violation.</p>
            </div>

        )
    }
}
export default Overview;