console.log("Wasee is a hecker")
console.log("Ishan is a hacker")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);


console.log("The End")

const fn = () => {
  console.log("Nothing")
}


const callback = (arg,fn)=>{
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
  sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Ishan", fn);
  document.head.append(sc)

}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)