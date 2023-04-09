import React, { useState } from 'react'

function Jumbo() {
    const [learn, setLearn] = useState(false);
    return (
        <div className="jumbotron mb-3">
            <div className="container p-5">
                <h1 className="display-4">Hello, world!</h1>
                {
                    !learn ?
                        <>
                            <p className="lead">This is a simple hero unit, if you click the button all the text will go away .</p>
                            <hr className="my-4" />
                            <p>I used terinary and use state for the first time .</p>
                            <p className="lead">
                                <a onClick={() => setLearn(!learn)} className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                            </p>
                        </> :

                        <>
                            <a onClick={() => setLearn(!learn)} className="btn btn-primary btn-lg" href="#" role="button">Learning</a>
                        </>
                }

            </div>
        </div>
    )
}

export default Jumbo