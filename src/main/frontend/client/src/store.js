import { configureStore, createSlice } from '@reduxjs/toolkit'


//useState 역할을 하는것
//state 하나를 slice라고 부름
let user = createSlice({
  //name: 'state 명',
  //initialState: '값'
  name:'user',
  initialState:'momo'
})

export default configureStore({
  reducer: {
    user : user.reducer
    //state로 사용하려면 위에서 선언한 state를 등록을 해야지 사용이 가능함
    //.reducer 꼭 붙여줘야함.햣
   }
}) 

//가져다 쓰는 예시 Mypage.tsx에 있음