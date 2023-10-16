import { configureStore, createSlice } from '@reduxjs/toolkit'


//useState 역할을 하는것
//state 하나를 slice라고 부름
let Users = createSlice({
  //name: 'state 명',
  //initialState: '값'
  name:'Users',
  initialState:[
    {name:'은경', level:0,  },
    {name:'효정', level:0,  },
    {name:'이영', level:0,  },
    {name:'건', level:0,  },
    {name:'지혜', level:0,  },
  ]
})

export default configureStore({
  reducer: {
    Users : Users.reducer
    //state로 사용하려면 위에서 선언한 state를 등록을 해야지 사용이 가능함
    //.reducer 꼭 붙여줘야함.햣
   }
}) 

//가져다 쓰는 예시 Mypage.tsx에 있음