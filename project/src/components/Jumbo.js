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
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <a onClick={()=>setLearn(!learn)} className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </p> </> : <>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <a onClick={()=>setLearn(!learn)} className="btn btn-primary btn-lg" href="#" role="button">Learning</a>
                        </p>    
                    </>
                }

            </div>
        </div>
    )
}

export default Jumbo