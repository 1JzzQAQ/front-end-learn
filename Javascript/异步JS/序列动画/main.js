  const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  //回调地狱
  function doalice1(){
    alice1.animate(aliceTumbling,aliceTiming).finished.then(()=>{
        alice2.animate(aliceTumbling,aliceTiming).finished.then(()=>{
            alice3.animate(aliceTumbling,aliceTiming);
        });
    });
  }

  //promise链
//   const animation = alice1.animate(aliceTumbling,aliceTiming);

//   animation.finished.then(()=>
//     alice2.animate(aliceTumbling,aliceTiming).finished.then(()=>
//         alice3.animate(aliceTumbling,aliceTiming)
//     ));

  //use async and wait
  async function doalice2() {
    try{
        await alice1.animate(aliceTumbling,aliceTiming).finished;
        await alice2.animate(aliceTumbling,aliceTiming).finished;;
        alice3.animate(aliceTumbling,aliceTiming);
    }catch(error){
        console.error(`could not play the animation:${error}`);
    }
  }

  doalice2();



