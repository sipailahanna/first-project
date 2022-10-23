const promise1 = new Promise((resolve) => {
    setTimeout(resolve, Math.floor(Math.random() * 5000) + 1000, 1);
});

const promise2 = new Promise((resolve) => {
    setTimeout(resolve, Math.floor(Math.random() * 5000) + 1000, 2);
});

const promise3 = new Promise((resolve) => {
    setTimeout(resolve, Math.floor(Math.random() * 5000) + 1000, 3);
});

Promise.race([promise1, promise2, promise3])
    .then(data => {
        console.log(data);
    });
