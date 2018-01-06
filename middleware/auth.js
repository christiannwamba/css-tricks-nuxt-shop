export default function (ctx) {
  if(!isAuth()) {
    return ctx.redirect('/login')
  }
}

function isAuth() {
  // check if user session exists somehow
  return false;
}