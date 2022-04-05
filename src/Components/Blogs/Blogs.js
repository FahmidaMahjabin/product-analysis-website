import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-7xl text-center font-semibold text-green-900 my-8'>Blogs</h1>
            <div>
                <h1>Block, Inline and Inline-block</h1>
                <p>
                    Block element is which take the full width of it's parent. And It always starts in new line. We can set height, width of block element. 
                    <br></br>
                    Inline element takes width as much as it's content needs. We can't set height or width of inline element. It doesn't start in new line.
                    <br></br>
                    Inline-block element is the combination of both inline and block element. It'll take width as it's content needs. But we can set the height and width of inline-block element.

                </p>
            </div>
        </div>
    );
};

export default Blogs;