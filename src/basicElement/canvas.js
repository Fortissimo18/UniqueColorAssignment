
function BasicElement() {

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');

        // Draw a rectangle
        if (context) {
            let r = Array(1024).fill([...Array(32)].map((_, i) => 7 + i * 8)).flat(); //r
            let g = Array(32).fill([...Array(32)].map((_, i) => Array(32).fill(8 * i + 7)).flat()).flat(); //g
            let b = [...Array(32)].map((_, i) => Array(1024).fill(8 * i + 7)).flat(); //b
            //[...Array(32768/num of repeat)].map((_, i) => Array(num of repeat).fill(step*i+start)).flat()

            let rankedDataPoints = r.map((item, index) => ({ r: item, g: g[index], b: b[index] }));
            let dataPoints = shuffle(rankedDataPoints);
            //convert data points to set to ensure it's unique
            let imgData = context.createImageData(256, 128);
            let i = 0;
            for (i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = dataPoints[i / 4].r; //r
                imgData.data[i + 1] = dataPoints[i / 4].g; //g
                imgData.data[i + 2] = dataPoints[i / 4].b;//b
                imgData.data[i + 3] = 255; //a
            }

            context.putImageData(imgData, 0, 0);
        }

    return (
        // canvas.toDataURL('image/png')
        'url("' + canvas.toDataURL('image/png') + '")'    );
}

export default BasicElement;