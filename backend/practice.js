// const logger = require('./utils/logger')

// const pro = new Promise((resolve, reject) => {
//   if(1===1) {
//     const successObject = {
//       msg: 'Success',
//     }
//     return 1 
//     resolve(1)
//   } else {
//     const errorObject = {
//       msg: 'An error occured',
//     }
//     reject(errorObject)
//   }
// })

// a = pro
// logger.info(a)
d = [1,2]
abc = [d]

const promise = new Promise((resolve, reject) => {
    console.log('i executed in the main thread, so I am the first')
    resolve(1)
})
promise.then(a => console.log('i executed in the sub-thread(microtask)'))
console.log(abc.indexOf([1,2]))

