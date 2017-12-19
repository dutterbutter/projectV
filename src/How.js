import React from 'react';

class How extends React.Component {
    render() {
        return (
           
                <div id="how" className="section scrollspy col s12 col m12 col l8 offset-l4">
                    <h3>How To Delegate</h3>
                    <p>Delegators are Atom holders who cannot, or do not want to run validator operations
                    themselves. Through the Cosmos UI, a user can delegate Atoms to a validator and obtain
                    a part of its reward in exchange (for more detail on how rewards are distributed, see
                    What is the incentive to stake? and What is a validator’s commission? sections below).
                    Because they share rewards with their validators, delegators also share responsiblity.
                    Should a validator misbehave, each of its delegators will be partially slashed in proportion
                    to their stake. This is why delegators should perform due diligence on validator candidates
                    before delegating, as well as spreading their stake over multiple validators. Delegators
                    play a critical role in the system, as they are responsible for choosing validators.
                    Being a delegator is not a passive role: Delegators should actively monitor the actions
                    of their validators and participate in governance.</p>
                    
                    <strong className="bs-feature__title">How will delegators choose their validators?
                            </strong>
                    <p>Delegators are free to choose validators according to their own subjective criteria. This said, criteria anticipated to be important include:</p>

                    <li><strong className="list-title">Amount of self-bonded Atoms:</strong> Number of Atoms a validator self-bonded to its staking
                    pool. A validator with higher amount of self-bonded Atoms has more skin in the game, making
                    it more liable for its actions.</li>

                    <li><strong className="list-title">Amount of delegated Atoms:</strong> Total number of Atoms delegated to a validator. A high
                    stake shows that the community trusts this validator, but it also means that this
                    validator is a bigger target for hackers. Indeed, hackers are incentivized to hack
                    bigger validators as they receive a reward proportionate to the stake of the validator
                    they can prove to have compromised. Validators are expected to become less and less
                    attractive as their amount of delegated Atoms grows.</li>

                    <li><strong className="list-title">Track record:</strong> Delegators will likely look at the track record of the validators they
                    plan to delegate to. This includes seniority, past votes on proposals, historical average
                    uptime and how often the node was compromised.</li>

                    <p>Apart from these criteria that will be displayed in the Cosmos UI, there will be a 
                    possibility for validators to signal a website address to complete their resume. Validators
                    will need to build reputation one way or another to attract delegators. For example, it would
                    be a good practice for validators to have their setup audited by third parties. Note though,
                    that the Tendermint Team will not approve or conduct any audit itself. </p>

                    <p>By delegating to a validator, a user delegates staking power. The more staking power a validator
                    has, the more weight it has in the consensus and governance processes. This does not mean that the
                    validator has custody of its delegators’ Atoms. By no means can a validator run away with its delegator’s funds.</p>

                    <p>Even though delegated funds cannot be stolen by their validators, delegators are still liable if their
                    validators misbehave. In such case, each delegators’ stake will be partially slashed in proportion to their
                    relative stake.</p>
                </div>
            
        )
    }
}
export default How;