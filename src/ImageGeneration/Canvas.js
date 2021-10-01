import convert from 'color-convert';

function canvas(sortBy) {
    const IMAGE_WIDTH = 256;
    const IMAGE_HEIGHT = 128;

    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');

    //Generate 32768 unique rgb arrays with a step of 8
    //Following the pattern of RGB (7,7,7) (7,7,15)... (7,15,7)...(255,255,255)
    let r = Array(1024).fill([...Array(32)].map((_, i) => 7 + i * 8)).flat();
    let g = Array(32).fill([...Array(32)].map((_, i) => Array(32).fill(8 * i + 7)).flat()).flat();
    let b = [...Array(32)].map((_, i) => Array(1024).fill(8 * i + 7)).flat();

    //reorganise each rgb data points to [ [r1, g1, b1], [r2, g2, b2] ...]
    let dataPoints = r.map((e, i) => ([e, g[i], b[i]]));

    let sortedDataPoints = [];
    switch (sortBy) {
        case 'Red':
            sortedDataPoints = sortbyRGB(dataPoints, 'r');
            break;
        case 'Green':
            sortedDataPoints = sortbyRGB(dataPoints, 'g');
            break;
        case 'Blue':
            sortedDataPoints = sortbyRGB(dataPoints, 'b');
            break;

        case 'Hue':
            sortedDataPoints = sortbyHSL(dataPoints, 'h')
            break;

        case 'Saturation':
            sortedDataPoints = sortbyHSL(dataPoints, 's')
            break;

        case 'Lightness':
            sortedDataPoints = sortbyHSL(dataPoints, 'l')
            break;
        case 'Random':
            sortedDataPoints = randomShuffle(dataPoints)
            break;
        default:
            sortedDataPoints = randomShuffle(dataPoints);
    }

    let imgData = context.createImageData(IMAGE_WIDTH, IMAGE_HEIGHT);

    //assign rgb data points to canvas 
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = sortedDataPoints[i / 4][0]; //r
        imgData.data[i + 1] = sortedDataPoints[i / 4][1]; //g
        imgData.data[i + 2] = sortedDataPoints[i / 4][2];//b
        imgData.data[i + 3] = 255; //a
    }

    context.putImageData(imgData, 0, 0);

    //convert canvas to png image
    return ('url("' + canvas.toDataURL('image/png') + '")');


    //-------private functions-------//

    function randomShuffle(dataPoints) {
        let j, x, i;
        for (i = dataPoints.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = dataPoints[i];
            dataPoints[i] = dataPoints[j];
            dataPoints[j] = x;
        }
        return dataPoints;
    }


    function toHSLArray(rgbDataPoints) {
        const hslDataPoints = rgbDataPoints.map((data, index) => {
            let converted = convert.rgb.hsv(data[0], data[1], data[2]);
            converted[3] = index; //store the original rgb sequence to the 4th place for sorting
            return converted;
        });
        return hslDataPoints
    }


    function sortbyHSL(rgbDataPoints, sortBy) {
        let hslDataPoints = toHSLArray(rgbDataPoints);
        let sortedHSL = [];
        switch (sortBy) {
            case 'h': sortedHSL = hslDataPoints.sort(([h1, s1, l1], [h2, s2, l2]) => h1 - h2 || s1 - s2 || l1 - l2);
                break;
            case 's': sortedHSL = hslDataPoints.sort(([h1, s1, l1], [h2, s2, l2]) => s1 - s2 || l1 - l2 || h1 - h2);
                break;
            case 'l': sortedHSL = hslDataPoints.sort(([h1, s1, l1], [h2, s2, l2]) => l1 - l2 || s1 - s2 || h1 - h2);
                break;
            default: sortedHSL = hslDataPoints.sort(([h1, s1, l1], [h2, s2, l2]) => h1 - h2 || s1 - s2 || l1 - l2);
        }

        let sortedRGB = sortedHSL.map(data => {
            //rearrange rgb data points based on hsl sequence stored in the 4th place
            return (rgbDataPoints[data[3]])
        });

        return sortedRGB
    }


    function sortbyRGB(rgbDataPoints, sortBy) {
        let sortedRGB = [];
        switch (sortBy) {
            case 'r': sortedRGB = rgbDataPoints.sort(([r1, g1, b1], [r2, g2, b2]) => r1 - r2 || g1 - g2 || b1 - b2);
                break;
            case 'g': sortedRGB = rgbDataPoints.sort(([r1, g1, b1], [r2, g2, b2]) => g1 - g2 || r1 - r2 || b1 - b2);
                break;
            case 'b': sortedRGB = rgbDataPoints.sort(([r1, g1, b1], [r2, g2, b2]) => b1 - b2 || r1 - r2 || g1 - g2);
                break;
            default: sortedRGB = rgbDataPoints.sort(([r1, g1, b1], [r2, g2, b2]) => r1 - r2 || g1 - g2 || b1 - b2);
        }
        return sortedRGB
    }
}


export default canvas;