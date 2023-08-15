#### 20230814(화)
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