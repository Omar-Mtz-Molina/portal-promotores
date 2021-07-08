import store from "@/store";
import axios from "axios";

store.subscribe((mutation) => {
  switch (mutation.type) {
    case "auth/SET_TOKEN":
      if (mutation.payload) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${mutation.payload}`;
        //axios.defaults.headers.common['id'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOnsiaWQiOiIkMmIkMTUkc2MxRXZHajVqL2tuNGV2Q21oUkl5Ty8yd0UxZ29QUm5HREJqc2lSb2I5RHQzQzZCQ1pwMHUiLCJuYW1lIjoiQWRtaW4iLCJhZGRyZXNzIjoiTcOpeGljbyJ9LCJpYXQiOjE1OTMxODMxMTAsImV4cCI6MTU5NTc3NTExMH0.g1v27O31PqoFSvC8gLNbP1ZOxxUg6kzNQItBqDTznx0'
        //axios.defaults.headers.common['key'] = '$2b$10$gHAtQp/D9j1jMSxzNdmiU.G41.U3geU1HBCXRNF2O7xiXsSPFVv9y'
      }
      break;
  }
});
