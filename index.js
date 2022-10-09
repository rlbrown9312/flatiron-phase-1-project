fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(data => {
        forEachCharcter(data);
    })



    