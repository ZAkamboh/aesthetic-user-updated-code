import { createGlobalStyle } from "styled-components";
import {
  gilroyRegular,
} from "shared-components";

export default createGlobalStyle`
    @font-face {
        font-family: 'gilroyregular';
        src: url('./fonts/gilroy-regular-webfont.eot');
        src: url('./fonts/gilroy-regular-webfont.eot?#iefix') format('embedded-opentype'),
            url('./fonts/gilroy-regular-webfont.woff2') format('woff2'),
            url('./fonts/gilroy-regular-webfont.woff') format('woff'),
            url('./fonts/gilroy-regular-webfont.svg#gilroyregular') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }
    @font-face {
        font-family: 'gilroysemibold';
        src: url('./fonts/gilroy-semibold-webfont.eot');
        src: url('./fonts/gilroy-semibold-webfont.eot?#iefix') format('embedded-opentype'),
            url('./fonts/gilroy-semibold-webfont.woff2') format('woff2'),
            url('./fonts/gilroy-semibold-webfont.woff') format('woff'),
            url('./fonts/gilroy-semibold-webfont.svg#gilroysemibold') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }
    @font-face {
        font-family: 'gilroybold';
        src: url('./fonts/gilroy-bold-webfont.eot');
        src: url('./fonts/gilroy-bold-webfont.eot?#iefix') format('embedded-opentype'),
            url('./fonts/gilroy-bold-webfont.woff2') format('woff2'),
            url('./fonts/gilroy-bold-webfont.woff') format('woff'),
            url('./fonts/gilroy-bold-webfont.svg#gilroybold') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }
    @font-face {
        font-family: 'gilroyextrabold';
        src: url('./fonts/gilroy-extrabold-webfont.eot');
        src: url('./fonts/gilroy-extrabold-webfont.eot?#iefix') format('embedded-opentype'),
            url('./fonts/gilroy-extrabold-webfont.woff2') format('woff2'),
            url('./fonts/gilroy-extrabold-webfont.woff') format('woff'),
            url('./fonts/gilroy-extrabold-webfont.svg#gilroyextrabold') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }
    @font-face {
        font-family: 'gilroyextrabold_italic';
        src: url('./fonts/gilroy-extrabolditalic-webfont.eot');
        src: url('./fonts/gilroy-extrabolditalic-webfont.eot?#iefix') format('embedded-opentype'),
            url('./fonts/gilroy-extrabolditalic-webfont.woff2') format('woff2'),
            url('./fonts/gilroy-extrabolditalic-webfont.woff') format('woff'),
            url('./fonts/gilroy-extrabolditalic-webfont.svg#gilroymedium_italic') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }
    @font-face {
        font-family: 'gilroyheavy';
        src: url('./fonts/gilroy-heavy-webfont.eot');
        src: url('./fonts/gilroy-heavy-webfont.eot?#iefix') format('embedded-opentype'),
            url('./fonts/gilroy-heavy-webfont.woff2') format('woff2'),
            url('./fonts/gilroy-heavy-webfont.woff') format('woff'),
            url('./fonts/gilroy-heavy-webfont.svg#gilroyheavy') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }
    @font-face {
        font-family: 'gilroylight';
        src: url('./fonts/gilroy-light-webfont.eot');
        src: url('./fonts/gilroy-light-webfont.eot?#iefix') format('embedded-opentype'),
            url('./fonts/gilroy-light-webfont.woff2') format('woff2'),
            url('./fonts/gilroy-light-webfont.woff') format('woff'),
            url('./fonts/gilroy-light-webfont.svg#gilroylight') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }
    @font-face {
        font-family: 'gilroymedium';
        src: url('./fonts/gilroy-medium-webfont.eot');
        src: url('./fonts/gilroy-medium-webfont.eot?#iefix') format('embedded-opentype'),
            url('./fonts/gilroy-medium-webfont.woff2') format('woff2'),
            url('./fonts/gilroy-medium-webfont.woff') format('woff'),
            url('./fonts/gilroy-medium-webfont.svg#gilroymedium') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }
    @font-face {
        font-family: 'gilroymedium_italic';
        src: url('./fonts/gilroy-mediumitalic-webfont.eot');
        src: url('./fonts/gilroy-mediumitalic-webfont.eot?#iefix') format('embedded-opentype'),
            url('./fonts/gilroy-mediumitalic-webfont.woff2') format('woff2'),
            url('./fonts/gilroy-mediumitalic-webfont.woff') format('woff'),
            url('./fonts/gilroy-mediumitalic-webfont.svg#gilroymedium_italic') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }
    @font-face {
        font-family: 'gilroyblack';
        src: url('./fonts/gilroy-black-webfont.eot');
        src: url('./fonts/gilroy-black-webfont.eot?#iefix') format('embedded-opentype'),
            url('./fonts/gilroy-black-webfont.woff2') format('woff2'),
            url('./fonts/gilroy-black-webfont.woff') format('woff'),
            url('./fonts/gilroy-black-webfont.svg#gilroyblack') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('./fonts/SourceSansPro.eot');
        src: url('./fonts/SourceSansPro.eot?#iefix') format('embedded-opentype'),
            url('./fonts/SourceSansPro.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }
    html, body {
        height: 100%;
    }
    * {
        list-style: none;
    }
    body{
		margin: 0px;
        padding: 0px;
        font-family: ${gilroyRegular};
        font-weight: 400;
        font-size: 14px;
        overflow-x: hidden;  
    }
`;
