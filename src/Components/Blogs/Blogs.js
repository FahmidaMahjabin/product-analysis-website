import React from 'react';

const Blogs = () => {
    return (
        <div className='m-16'>
            <div>
            <h1 className='text-5xl text-center font-semibold text-green-900 my-8'>Blogs</h1>
            <div>
                <h1 className='text-3xl text-red-600 my-4 '>Block, Inline and Inline-block</h1>
                <p>
                    Block element is which take the full width of it's parent. And It always starts in new line. We can set height, width of block element. 
                    <br></br>
                    Inline element takes width as much as it's content needs. We can't set height or width of inline element. It doesn't start in new line.
                    <br></br>
                    Inline-block element is the combination of both inline and block element. It'll take width as it's content needs. But we can set the height and width of inline-block element.

                </p>
            </div>
            </div>
            {/* context APi */}
            <div>
                <h1 className='text-3xl text-red-600 my-4 '>Context API</h1>
                <div>
                    Context API is used for passing data to component without props drilling. Props drilling sometimes get difficult if it is nested too much. In context API we create a context and provide it to the consumer component. Consumer component can use and change the value of the provided context. COntext API is used for theme transfer or authentication.
                </div>
            </div>
        </div>
        
    );
};

export default Blogs;