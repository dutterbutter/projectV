import React from 'react';

class Sentry extends React.Component {
    render() {
        return (
            <div id="sentry" className="section scrollspy col s12 col m12 col l8 offset-l4">
                <h3>Sentry Nodes</h3>
                <p>Validators are responsible for ensuring that the network can sustain denial of service attacks.</p>

                <p>We recommend that validators run full nodes in the cloud and configure their validator nodes only
                to connect to those full nodes. Those full nodes can be moved or apply cloud based DDOS protection
                to mitigate DDOS attacks. Finally, establishing connections directly with other validators can ensure 
                that your node can’t be taken offline via internet based attacks.
                </p>

                <p> Validator nodes should only connect to full-nodes they trust because they operate them themselves 
                or are run by other validators they know socially. A validator node will typically run in a data center.
                Most data centers provide direct links the networks of major cloud providers. The validator can use those
                links to connect to sentry nodes in the cloud. This shifts the burden of denial-of-service from the validator’s
                node directly to its sentry nodes, and may require new sentry nodes be spun up or activated to mitigate attacks
                on existing ones.</p>

                <p>Sentry nodes can be quickly spun up or change their IP addresses. Because the links to the sentry nodes are in
                private IP space, an internet based attacked cannot disturb them directly. This will ensure validator block proposals
                and votes always make it to the rest of the network.</p>

                <p>It is expected that good operating procedures on that part of validators will completely mitigate these threats.</p>
            </div>

        )
    }
}
export default Sentry;