import React from 'react';

class Validator extends React.Component {
    render() {
        return (
            <div id="validator" className="section scrollspy col s12 col m12 col l8 offset-l4">
                <h3>Validator Node</h3>
                <p>A full-node is a program that fully validates transactions and blocks of a blockchain.
                It is distinct from a light-node that only processes block headers and a small subset of
                transactions. Running a full-node requires more resources than a light-node but is necessary
                in order to be a validator. In practice, running a full-node only implies running a
                non-compromised and up-to-date version of the software with low network latency and without
                downtime. Of course, it is possible and encouraged for any user to run full-nodes even if
                they do not plan to be validators.</p>

                {/* <p>Mauris faucibus arcu tortor, in condimentum felis malesuada in. Integer sed convallis turpis, at tempor nibh. Nunc lacinia diam est, at lobortis turpis eleifend sagittis. Pellentesque et faucibus elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. In dapibus dignissim ipsum, vitae luctus enim semper at. Praesent a sem a diam ultricies lobortis accumsan ullamcorper leo. Suspendisse mattis sodales nisl, sed rhoncus ante fermentum et. Praesent sed orci nec justo aliquam euismod. Quisque
                dui dui, tincidunt in sapien ac, porta hendrerit est. Cras eget mauris nec neque rhoncus vestibulum. Nunc ultrices est purus. Nam convallis ante ex, quis posuere tellus maximus sit amet. Curabitur at enim placerat, placerat erat sit amet, pellentesque
                leo.
                </p>

                <p> Morbi pellentesque, quam eu consectetur imperdiet, leo est vulputate lacus, eget varius dui dolor quis turpis. Fusce sed aliquam magna. Duis euismod aliquet risus vel lacinia. Sed id purus varius, molestie massa in, pharetra nunc. Nam lobortis erat
                nec turpis laoreet, at volutpat nisl scelerisque. Curabitur fringilla enim sit amet tempor dapibus. Donec vel nisi est. Mauris pellentesque sed odio sit amet pulvinar.</p>

                <p>Curabitur tellus nisi, aliquet id ante maximus, pretium vulputate leo. Nullam nec magna rutrum, accumsan dui non, lobortis felis. Donec quam mi, imperdiet ut neque sit amet, tempor vehicula ex. Etiam nec leo dictum, egestas odio a, pellentesque
                mauris. Nunc sem lectus, auctor sit amet egestas eu, congue a lectus. Mauris sed quam lacus. Nam leo ligula, lobortis eu ullamcorper et, bibendum at neque. Vestibulum nec sapien ut felis varius pretium. Duis ac ullamcorper justo. Vestibulum at
                blandit nulla, in iaculis massa. Aliquam cursus posuere odio, quis lacinia velit euismod non. Integer elementum, nibh sed convallis condimentum, ante ex dapibus nisi, vitae gravida lacus arcu eu purus. Integer consectetur placerat ex id vestibulum.</p>

                <p>Vestibulum molestie mauris lacus, vel imperdiet lacus faucibus ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas eu quam at elit facilisis condimentum a a augue. Nulla aliquam dui nec est placerat
                maximus. Pellentesque ac nibh sed tellus sodales convallis eget et lectus. Aenean ante quam, commodo sit amet iaculis non, maximus eu sapien. Ut non enim tristique, facilisis velit nec, ultrices nisi. Duis fermentum eu sem id fringilla. Quisque
                porttitor tellus interdum imperdiet porta. Cras mauris est, bibendum at tristique id, pretium eu diam. Aenean nulla libero, pretium vel velit ut, scelerisque auctor ex. Duis non mattis diam, non ornare ligula. Cras sem massa, volutpat porttitor
                lobortis a, varius quis elit.</p> */}
            </div>

        )
    }
}
export default Validator;