#### 230927 커밋메세지
    - FEAT : 새로운 기능의 추가
    - FIX: 버그 수정
    - DOCS: 문서 수정
    - STYLE: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
    - REFACTOR: 코드 리펙토링
    - TEST: 테스트 코트, 리펙토링 테스트 코드 추가
    - CHORE: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)
    - ADD: 새로운 파일 추가


231017 화요일
npm i 해서 업데이트하길바람. 캘린더로 인해 새로운 라이브러리 설치
.....

npm start 이슈 발생시 client\package.json 에서  
"proxy": "http://localhost:9090" 지우면 됨
-> api 연결로인해 생긴 이슈로 보임

### 다음 퍼블 발표때(11월 1째주)까지 해야하는 작업
전체 디자인(은경)

1. 칼로리 API 연결 (건)
2. 오늘 먹은 칼로리 저장 - > 그에 따른 운동량 계산 기능 구현(건)
    1) 체중에 맞는 운동량 계산 기능
3. 날씨 API UI 작업 및 날씨에 따른 운동가능 여부 기능 구현 (은경)
4. 운동 가능/ 불가능 인터페이스 구현 (은경)
5. 블로그 글 작성, 수정, 삭제 기능 구현 (이영)
6. 블로그 게시판 - 글보기 인터페이스 구현 (이영)
7. 글 필터링 기능 구현 (태그에따른 글 노출/ 검색기능) (효정)
8. 글 좋아요 기능 추가 작업 (효정)
9. 로그인 인터페이스 구현및 회원데이터(가상)에 따른 화면 노출 (효정)

* 자세한 스케줄및 일 분배는 스케줄표 (금주 내 전달예정) 참고 
기능및 인터페이스 구축 작업 최대한 11월 3째주 까지 완료후 이후에 
코드 리펙토링및 next.js/type.js로 변경 및 타 기능 추가 작업 할 예정 
코드 최대한 깔끔하게 정리하고, 중복되는 코드나 컴포넌트 줄여서 작업 바람 
                                                                                                          
#### 231010 axios 설치
pull받고 npm i 해주세요.
* 참고 axios 설치
npm install axios

#### sass import 오류 
global.d.ts 생성 후 아래 코드 작성 
```js                                                                                                                                                                      
declare module '*.scss' {
    const content: string;
    export default content;
}
```

#### 날씨 API
설정키
REACT_APP_WEATHER_KEY= 5e69b4df49eaf05edcb083aba82ee8fd


제공 사이트
https://openweathermap.org/

사용법
https://velog.io/@sean2337/React-OpenWeather-API%EB%A1%9C-%EC%9B%B9%EC%97%90%EC%84%9C-%EB%82%A0%EC%94%A8-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0

하다가 막히면 각자 물어보고 합시다. 아자아자 화이팅
### 칼로리 API 
https://www.data.go.kr/data/15050912/fileData.do#tab-layer-openapi

[공공데이터 포털/ 사이트 내 가이드 참고바람]
#### 230925 sass, fontawesome 셋팅

pull 받은 다은 터미널-> npm i 해서 다운로드 

sass는 컴파일 필요없음
fontawesome 사용 예시 

```js
import React from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
```
원하는 아이콘은 사이트에서 찾아서 react버전으로 코드 긁어오면됨
참고 사이트
https://www.daleseo.com/react-font-awesome/
#### 20230820 (일)
- 메인 색상 : 블루, 옐로우, 그린

회의시 나온 기능 목록
````
- 태그 기능 (# 해시태그)
- 날씨 API
- MBTI별 맞춤 일기 기능
- 회원가입 기능 (카카오, 네아로, 자체 서비스)
- 즐겨찾기 (원하는 태그 및 블로거)
- 감정 표현 (작성 글 및 프로필 상태 및 댓글 감정 표현 기능)
- 스토리 기능 (인스타 참고 예정)
- 먹은 것을 입력하면 칼로리를 계산해서 어느정도 산책하거나 운동해야하는지 유지되는지 출력
- 글쓰기 기능
````
- 제목 : 플러그 (후보 1)

.. 제목은 추후 더 추가 예정


#### 20230814(화)
- 작업 목표 : 블로그 웹
- 작업 세부 목표
````
1. 태그 기능 (# 해시 태그)
2. 날씨 API
3. MBTI 별 일기 기능
4. 회원가입 기능(카카오, 네아로, 자체 서비스 회원가입)
5. 즐겨찾기
6. 감정 표현 기능 (작성 글 및 프로필 상태 및 댓글 감정 표현 기능)
7. 스토리 기능 (인스타 등 참고할 예정.)
````
- 참고 사이트
````
https://www.gdweb.co.kr/main (지디웹) - 프론트 참고 예정.
https://www.tistory.com/ (티스토리) - 프론트 참고 예정.
````


- react-typescript 설치 완료
````
기존과 같은 경로에 설치함. 다만, client 폴더가 추가됨.
리액트 : http://localhost:3000/api/hello 포트가 보이면 된거임.
````
- 인텔리제이 Sass(Scss) 사용 방법 : https://hagohobby.tistory.com/12 (인텔리제이 내부 설정 필요.)

- 로컬 서버 여는 방법 공유.
````
인텔리제이 IDEA > BlogApplication Controller start > http://localhost:9090/blog 접속 (index 문구가 나오면 성공)
````

- react 로컬 여는 방법 공유.
````
1. 터미널 오픈 경로 작업폴더\src\main\frontend 이동 (cd 명령어 사용.)
2. npm start (안 될 경우, npm stop 후 입력.)
3. localhost:3000/api/hello 접속 > react 이미지 및 서버 포트 및 react 포트 나오면 정상 접속한 것임.
````


#### 20230813 (일)
- 인텔리제이 IDEA로 개발환경 셋팅 완료.
- 개발 환경 셋팅 방법(google시트 URL) : https://docs.google.com/presentation/d/1U_-fSJ4-w8o0ZZiOBehxa7M8ts9lmBgeeLnCcCZZQK4/edit#slide=id.p



#### 20230812 (토)
- react 설치 완료
````
프로젝트 내에 react 설치 완료함.
경로 : project/src/main/fontend/
index.js 수정하면 됨...
````


#### 20230810 (목)

- 도커 세팅 및 mysql 서버 세팅 작업함. (개발자만 설정 필요...)
````
도커 세팅 방법
1, 도커 데스크탑 설치.
- https://docs.docker.com/desktop/install/windows-install/ (윈도우용)
- https://docs.docker.com/desktop/install/mac-install/ (맥OS용)

2, git hub에서 작업 파일을 clone 받는다.
3, 로컬 드라이브중 작업할 폴더에 docker-compose.yml를 옮긴다.
3, windows powerShell을 관리자 권한으로 실행.

4, docker login을 한다.
- $ docker login -u qkrtchrtthrt12345@gmail.com
- $ docker login -u lainyzine
Password: 암호는 프로젝트 참여자에 한하여 공유함.
- Login Succeeded가 나온 경우, 로그인 성공한 것임.

5. docker-compose.yml 파일 위치로 이동
- 예시 ) cd C:\web\project -> 경로를 못찾겠을 경우, 파일 탐색기에서 복붙으로 찾을 것.

6, 도커 데스크탑에 컨테이너 생성됐는지 확인 필요.
7, 실행 후, local 페이지로 이동되어 작동하는지 확인 필요.
````
- 추가로 controller 확인.

## 개발환경 세팅

vscode 추가 인스톨 
1. Extension Pack for Java
2. Spring Boot Extension Pack

깃파일 기준 경로 
src\main\java\com\blog\blog\BlogApplication.java <- 여기로 이동

실행 버튼
->  [F5] 혹은 우측 상단에 Run Java 

9090으로 새로 창 

http://localhost:9090/api/hello