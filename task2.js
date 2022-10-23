function getNum() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000, Math.floor(Math.random() * 5) + 1);
    });
}

async function getResult() {
    const result = await getNum();
    console.log(Math.pow(result,  2));
}

getResult();