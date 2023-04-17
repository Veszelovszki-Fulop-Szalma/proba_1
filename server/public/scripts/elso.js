let torol = async (id) => {
    try {
        const response = await fetch('/user/torol', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};

let portfolioFeltolt = async () => {
    try {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let result = document.getElementById('result').value;
        let image = document.getElementById('image').value;
        let url = document.getElementById('url').value;
        let options = document.getElementById('agents').options;
        let agents = [];
        for (var option of options) {
            if (option.selected) {
                agents.push(option.value);
            }
        }
        const response = await fetch('/portfolio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: description,
                result: result,
                image: image,
                url: url,
                agents: agents,
            }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};

let portfolioTorol = async (id) => {
    try {
        const response = await fetch('/portfolio/torol', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};

let portfolioModosit = async () => {
    try {
        let id = document.getElementById('mid').value;
        let title = document.getElementById('mtitle').value;
        let description = document.getElementById('mdescription').value;
        let result = document.getElementById('mresult').value;
        let image = document.getElementById('mimage').value;
        let url = document.getElementById('murl').value;
        let options = document.getElementById('magents').options;
        let agents = [];
        for (var option of options) {
            if (option.selected) {
                agents.push(option.value);
            }
        }
        const response = await fetch('/portfolio/modosit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                title: title,
                description: description,
                result: result,
                image: image,
                url: url,
                agents: agents,
            }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};

let ugynokFeltolt = async () => {
    try {
        let name = document.getElementById('name').value;
        let skill = document.getElementById('skill').value;
        let image = document.getElementById('image').value;
        const response = await fetch('/agent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                skill: skill,
                image: image,
            }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};

let ugynokTorol = async (id) => {
    try {
        const response = await fetch('/agent/torol', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};

let rendelesTorol = async (id) => {
    try {
        const response = await fetch('/cart/torol', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};

let foglalasTorol = async (id) => {
    try {
        const response = await fetch('/appointment/torol', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        const adat = await response.json();
        console.log(adat);
    } catch (error) {
        console.log(error.message);
    }
};
