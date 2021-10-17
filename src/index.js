import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {Helmet} from 'react-helmet';

import App from './shared/App';
import store from "./redux/configureStore";

import {GlobalStyle} from "./shared/global"

import "./shared/font.css";

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle/>
        <Helmet>
            <title>Calendar type Diary</title>
            <meta name="title" content="Calendar type Diary" data-react-helmet="true"/>
            <meta name="description" content="나만의 캘린더형 다이어리" data-react-helmet="true"/>

            <meta property="og:type" content="website" data-react-helmet="true"/>
            <meta
                property="og:url"
                content="http://calendar-type-diary.shop.s3-website.ap-northeast-2.amazonaws.com/"
                data-react-helmet="true"/>
            <meta
                property="og:title"
                content="Calendar type Diary"
                data-react-helmet="true"/>
            <meta
                property="og:description"
                content="나만의 캘린더형 다이어리"
                data-react-helmet="true"/>
            <meta property="og:image" content="./Frame 1.png"/>

            <meta
                property="twitter:card"
                content="summary_large_image"
                data-react-helmet="true"/>
            <meta
                property="twitter:url"
                content="http://calendar-type-diary.shop.s3-website.ap-northeast-2.amazonaws.com/"
                data-react-helmet="true"/>
            <meta
                property="twitter:title"
                content="Calendar type Diary"
                data-react-helmet="true"/>
            <meta
                property="twitter:description"
                content="나만의 캘린더형 다이어리"
                data-react-helmet="true"/>
            <meta
                property="twitter:image"
                content="./Frame 1.png"
                data-react-helmet="true"/>
        </Helmet>
        <App/>
    </Provider>,
    document.getElementById(
        'root'
    )

);

reportWebVitals();
