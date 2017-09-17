export function signIn(user){
  return {
    type: "SIGN_IN",
    user
  }
}

export function signOut(){
  return {
    type: "SIGN_OUT"
  }
}