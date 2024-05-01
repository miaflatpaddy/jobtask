function reliableMultiply(a, b) {
  try{
    return primitiveMultiply(a,b);
  }catch(e){
    if(e instanceof NotificationException){
       return reliableMultiply(a,b)
    } else if(e instanceof ErrorException) {
        return;
    }
  }

}
