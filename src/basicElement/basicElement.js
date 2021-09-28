import React, { useRef, useState, useEffect } from 'react';

function BasicElement() {

    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);

    useEffect(() => {
        if (canvasRef.current) {
            const renderCtx = canvasRef.current.getContext('2d');

            if (renderCtx) {
                setContext(renderCtx);
            }
        }



        // Draw a rectangle
        if (context) {
            let r = Array(1024).fill([...Array(32)].map((_, i) => 7 + i * 8)).flat(); //r
            let g = Array(32).fill([...Array(32)].map((_, i) => Array(32).fill(8 * i + 7)).flat()).flat(); //g
            let b = [...Array(32)].map((_, i) => Array(1024).fill(8 * i + 7)).flat(); //b
            //[...Array(32768/num of repeat)].map((_, i) => Array(num of repeat).fill(step*i+start)).flat()


            let imgData = context.createImageData(256,128);
            let i = 0;
            for (i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = r[i/4]; //r
                imgData.data[i + 1] = b[i/4]; //g
                imgData.data[i + 2] = g[i/4];//b
                imgData.data[i + 3] = 255; //a
            }

            context.putImageData(imgData,0,0);
        }



    }, [context]);

    return (
        <div
            style={{
                textAlign: 'center',
            }}>
            <canvas
                id="canvas"
                ref={canvasRef}
                width={256}
                height={128}

            ></canvas>
        </div>
    );
}

export default BasicElement;