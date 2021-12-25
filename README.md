# 🗓 [Calendar type Diary](http://calendar-type-diary.shop/)
항해 99 3기 4주차 팀 프로젝트 - 프론트 원격 저장소

🔓[백엔드 원격 저장소](https://github.com/jeangho293/Calendar-Diary-Back)

## 👥 팀원 
- Front 김갑민 ([Github](https://github.com/gabmin)), 박시영 ([Github](https://github.com/larisms)), 심선아 ([Github](https://github.com/jjubbu))
- Back 김정호([Github](https://github.com/jeangho293)), 조원호([Github](https://github.com/Joe-wonho))

## 📆 개발기간
- 2021/10/11 ~ 2021/10/16

## 👀 View
[영상으로 보기](https://youtu.be/ddu1T307obo)
<img width="2048" alt="스크린샷 2021-10-16 오후 5 14 55" src="https://user-images.githubusercontent.com/58936251/137580149-f3ebcbc5-47d3-4f90-a514-7d1a0ae9a8c8.png">
<img width="2048" alt="스크린샷 2021-10-16 오후 5 17 10" src="https://user-images.githubusercontent.com/58936251/137580199-4b9f9e22-6984-407a-a2d7-29fd57f7d73e.png">
<img width="2048" alt="스크린샷 2021-10-16 오후 5 17 24" src="https://user-images.githubusercontent.com/58936251/137580201-2dbdcd8f-33f3-41ae-b739-97914f018c7d.png">
<img width="2048" alt="스크린샷 2021-10-16 오후 5 17 35" src="https://user-images.githubusercontent.com/58936251/137580205-260f67c5-a402-4d84-9a49-00433c73b10b.png">

## 💡 주요기능
- 로그인, 회원가입 
    - 공란 여부 확인
    - 아이디 중복 확인
    - 아이디, 비밀번호 길이 등 조건 만족 여부 확인

- 메인 페이지
    - 월별 캘린더 view (feat. fullcalendar 라이브러리)
    - 컬러태그별로 보기
    - 오늘 날짜로 돌아가기
    - 로그아웃

- 특정 일자의 다이어리 상세보기
    - 해당 일자의 다이어리 추가
    - 특정 다이어리 삭제, 수정

## 🔌 기술스택

<img src='https://img.shields.io/badge/React-v17.0.2-61DAFB?logo=React'/>
<img src='https://img.shields.io/badge/Redux-v7.2.5-764ABC?logo=Redux'/>
<img src='https://img.shields.io/badge/React Router-v5.3.0-CA4245?logo=React Router'/>
<img src='https://img.shields.io/badge/styled components-v5.3.0-DB7093?logo=styled components'/>
<img src='https://img.shields.io/badge/Immer-v5.3.0-00E7C3?logo=Immer'/>

## ✅ Coding Convention & Rules
[Front-end-Rules Wiki](https://github.com/jjubbu/Calendar-Diary-Front/wiki/Front-end-Rules)


## 📖 라이브러리
- Fullcalendar 
    - 메인 캘린더를 빠르게 구현
- axios
    - 서버와의 연결(데이터 추가, 수정, 가져오기)
- immer
    - 불변성 유지
- lodash
    - input 이벤트 콜백 감소
- redux-chunk
    - 비동기 작업을 위한 미들웨어
- styled-components
    - Css in js, 전반적인 스타일 작업


## 😙 우리팀이 해결한 문제
- 쿠키를 누가 만들어서 전달할까?
    - 서버에서 전달한 토큰을 클라이언트쪽 js에서 쿠키로 감싸 저장시켜준다.
- axios로 서버에 get요청을 보낼때 추가적으로 어떠한 값을 보내고 싶다면?
    - params를 사용하여 get 요청시 값을 전달해준다. 
- 프론트가 더미 데이터를 만들지 않으려면?
    - swagger를 사용하여 백엔드에서 api와 더미데이터를 저장한 뒤 사용한다.
- 메인 페이지 하나로 모든 컴포넌트를 동작시키려면?
    - 리덕스를 통한 데이터 전달 루트 파악
    - 리렌더링을 최소화 하며 리덕스를 통해 사용자 입장에서 빠른 업데이트를 보여줌
