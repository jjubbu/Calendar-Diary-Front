import React from "react";
import {Route} from "react-router";
import {ConnectedRouter} from "connected-react-router";
import {apis} from "../lib/axios";
import {Cookies} from "react-cookie";


import User from "../pages/User";
import Main from "../pages/Main";
import Error from "../pages/Error404";
import Error_ from "../pages/Error500";

import {history} from "../redux/configureStore";
import showError from "../redux/modules/checkError";
import { Helmet } from "react-helmet";

function App() {
    //로그인 안하고 확인할때 false 를 true 로 바꿔주세요
    const [is_login, setstate] = React.useState("false");

    //로그인 안하고 확인할때 여기부터 ~
    React.useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get("token");

        console.log("token? :::", token);
        if (token === undefined) {
            setstate(false);
            history.push("/login");
            console.log("token is undefined");
        } else if (token !== undefined) {
            apis
                .logInAX(token)
                .then((res) => {
                    if (res.data.msg === "fail") {
                        alert("로그인상태 인증 에러");
                        setstate(false);
                        history.push('/login');

                    } else if (res.data.msg === "success") {
                        setstate(true);
                        console.log("res:::", res);
                        history.push('/');
                    } else if (res.status > 400) {
                        showError(res.status, res.data.msg);
                        history.push('/error');

                    }
                }).catch((err) => {
                    if(err.response.status === 404){
                        history.push('/error404');
                    }else{
                        history.push('/error500');
                    }
                })
        }
    }, [])
    //~ 여기까지 주석처리 하면 됩니다.

    return (
        <ConnectedRouter history={history}>
            <Helmet>
                <title>Calendar type Diary</title>
                <meta name="title" content="Calendar type Diary"/>
                <meta name="description" content="나만의 캘린더형 다이어리"/>

                <meta property="og:type" content="website"/>
                <meta
                    property="og:url"
                    content="http://calendar-type-diary.shop.s3-website.ap-northeast-2.amazonaws.com/"/>
                <meta property="og:title" content="Calendar type Diary"/>
                <meta property="og:description" content="나만의 캘린더형 다이어리"/>
                <meta property="og:image" content=""/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta
                    property="twitter:url"
                    content="http://calendar-type-diary.shop.s3-website.ap-northeast-2.amazonaws.com/"/>
                <meta property="twitter:title" content="Calendar type Diary"/>
                <meta property="twitter:description" content="나만의 캘린더형 다이어리"/>
                <meta property="twitter:image" content=""/>
            </Helmet>
            {
                is_login
                    ? (<Route path="/" exact component={Main}/>)
                    : (<Route path="/login" exact component={User}/>)
            }
            <Route path="/error404" exact component={Error}/>
            <Route path="/error500" exact component={Error_}/>
        </ConnectedRouter>

    );
}

export default App;
