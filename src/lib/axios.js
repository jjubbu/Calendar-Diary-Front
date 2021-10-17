import axios from "axios";
import Main from "../pages/Main";
import {Cookies} from "react-cookie";

const cookies = new Cookies();

const instance = axios.create({
    // 기본적으로 우리가 바라볼 서버의 주소
    baseURL: "http://13.124.198.97:4000/",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
        Authorization: `Bearer ${cookies.get('token')}`
    },
    withCredentials: true
});

export const apis = {

    //로그인 페이지
    logInAX: (token) => instance.get("/login"),

    //회원가입 페이지
    signUpAX: () => instance.get("/signup"),

    //회원가입 등록
    createAccountAX: (user) => instance.post("/signup", user),

    //회원가입시 아이디 중복
    checkOverlapAX: (userID) => instance.post("/signup/checkup", {userID}),

    //로그인
    loginPostAX: (user) => instance.post("/login", user),

    //캘린더 목록 가져오기
    getPostAX: (date) => instance.get("/", date),

    // 게시물 불러오기
    setContentAX: (date) => instance.get("/diary", date),

    // 게시물 작성하기
    addContentAX: (post) => instance.post("/diary", post),

    // 게시물 수정하기
    udtContentAX: (id, post) => instance.put("/diary", {id, post}),

    // 게시물 삭제하기
    delContentAX: (id) => instance.delete("/diary", id)
};
