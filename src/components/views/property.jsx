import React, {Component} from 'react';

class Property extends Component {
    render() {
        return (
            <section className="property" id="animation-delay">
                <header className="property__header">
                    <h2 className="property__name">
                        <a href="#"><span>#</span>animation-delay</a>
                    </h2>

                    <button className="button button--purple">Play</button>

                    <div className="property__description">
                        <p>Defines how long the animation has to wait before <strong>starting</strong>.
                            The animation will only be delayed on its <em>first</em> iteration.</p>
                    </div>

                </header>

                <div className="property__use-case">

                    <div className="property__use-case-info">
                        <div className="property__use-case-header property__use-case-header--default">
                            <code className="property__use-case-name" data-tooltip="Click to copy"
                                  data-clipboard-text="animation-delay: 0s;">animation-delay: 0s;</code>
                        </div>

                        <ul className="property__use-case-description">
                            <li>The animation will wait zero seconds, and thus start right away.</li>
                        </ul>
                    </div>

                    <div className="property__use-case-preview">
                        <div className="property__preview-frame">
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                        <div className="property__preview-output">
                            <div className="property__animated-object property__animated-object--default">
                                <div className='dino'></div>
                                <div className='eye'></div>
                                <div className='jaw'></div>
                                <div className='ground'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="property__use-case">

                    <div className="property__use-case-info">
                        <div className="property__use-case-header">
                            <code className="property__use-case-name">animation-delay
                                <input name="animation-value" className="property__use-case-value" defaultValue="1.2"/>
                                <input className="property__use-case-options property__use-case-options--short"
                                       list="animation-delay-options" name="animation-delay" defaultValue="s"/>
                            </code>
                            <datalist id="animation-delay-options">
                                <option defaultValue="s" />
                                    <option defaultValue="ms" />
                            </datalist>
                        </div>

                        <ul className="property__use-case-description">
                            <li id="sec">You can use <strong>decimal</strong> values in <strong>seconds</strong> with
                                the
                                keyword <code>s</code>.
                            </li>
                            {/*<!--<li id="ms">You can use <strong>milliseconds</strong> instead of seconds, with the keyword-->*/}
                            {/*<!--<code>ms</code>.-->*/}
                            {/*<!--</li>-->*/}
                            {/*<!--<li id="negative">You can use <strong>negative values</strong>: the animation will start as if-->*/}
                            {/*<!--it had <em>already been playing</em> for <code>500ms</code>.</code>.-->*/}
                            {/*<!--</li>-->*/}
                        </ul>
                    </div>

                    <div className="property__use-case-preview">
                        <div className="property__preview-frame">
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                        <div className="property__preview-output">
                            <div className="property__animated-object">
                                <div className='dino'></div>
                                <div className='eye'></div>
                                <div className='jaw'></div>
                                <div className='ground'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Property;