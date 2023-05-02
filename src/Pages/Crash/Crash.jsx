import React, { useRef }  from "react";
import "./Crash.css"
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBScrollspySubList } from 'mdb-react-ui-kit';

export default function Crash() {
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    const section4 = useRef(null);
    const sectionA = useRef(null);
    const sectionB = useRef(null);

    const containerRef = useRef(null);

    const subsections = [sectionA, sectionB];

    return (
        <>
        {/* <MDBContainer style={{maxHeight:"60vh",overflowY:"hidden", backgroundColor:"pink"}}> */}
            <MDBRow >
            <MDBCol md='2'>
                    <MDBScrollspy container={containerRef}>
                        <MDBScrollspyLink targetRef={section1}>Section 1</MDBScrollspyLink>
                        <MDBScrollspyLink targetRef={section2}>Section 2</MDBScrollspyLink>
                        <MDBScrollspyLink subsections={subsections} targetRef={section3}>
                            Section 3
                        </MDBScrollspyLink>
                        <MDBScrollspySubList className='ps-3'>
                            <MDBScrollspyLink targetRef={sectionA}>Subsection A</MDBScrollspyLink>
                            <MDBScrollspyLink targetRef={sectionB}>Subsection B</MDBScrollspyLink>
                        </MDBScrollspySubList>
                        <MDBScrollspyLink targetRef={section4}>Section 4</MDBScrollspyLink>
                    </MDBScrollspy>
                </MDBCol>
                <MDBCol md='10'>
                    <div id='element' ref={containerRef} className='scrollspy-example'>
                        <section ref={section1} id='section-1'>
                            <h3>Section 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                        </section>
                        <section ref={section2} id='section-2'>
                            <h3>Section 2</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                        </section>
                        <section ref={section3} id='section-3'>
                            <h3>Section 3</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <section ref={sectionA} id='subsection-a'>
                                <h3>Subsection A</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                    maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                    quaerat accusamus numquam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                    maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                    quaerat accusamus numquam.
                                </p>
                            </section>
                            <section ref={sectionB} id='subsection-b'>
                                <h3>Subsection B</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                    maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                    quaerat accusamus numquam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                    maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                    quaerat accusamus numquam.
                                </p>
                            </section>
                        </section>
                        <section ref={section4} id='section-4'>
                            <h3>Section 4</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                        </section>
                    </div>
                </MDBCol>

                
            </MDBRow>
        {/* </MDBContainer> */}
        </>

    );
}