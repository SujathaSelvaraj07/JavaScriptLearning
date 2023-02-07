async function myFunction(){
console.log("success")
}
async function awaiFn(){
    await myFunction();
    console.log("wait");
}
awaiFn()