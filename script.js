const renderFindMax = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
        <h2>Введіть 3 числа</h2>

        <div class="inputs">
            <input type="number" id="num1" placeholder="Введіть число">
            <input type="number" id="num2" placeholder="Введіть число">
            <input type="number" id="num3" placeholder="Введіть число">
        </div>

        <p>Найбільше число, яке ви ввели -
            <span id="result">число</span>
        </p>

        <hr>

        <section class="scientists">
            <h2>Обери вченого/их</h2>
            <div class="scientist-grid" id="scientistGrid"></div>

            <div class="button-row">
                <button id="born19">Які вчені народилися в 19 ст.</button>
                <button id="einstein">Знайти рік народження Albert Einstein</button>
            </div>

            <div class="button-row">
                <button id="alphabet">Відсортувати вчених за алфавітом</button>
                <button id="c">Знайти вчених, прізвища яких починаються на літеру "C"</button>
            </div>

            <div class="button-row">
                <button id="age">Відсортувати вчених за кількістю прожитих років</button>
                <button id="removeA">Видалити всіх вчених, ім’я яких починається на "A"</button>
            </div>

            <div class="button-row">
                <button id="latest">Знайти вченого, який народився найпізніше</button>
                <button id="longest">Знайти вченого, який прожив найдовше і найменше</button>
            </div>

            <button class="last-button" id="same">
                Знайти вчених, в яких співпадають перші літери імені і прізвища
            </button>
        </section>
    `;

    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const num3 = document.getElementById("num3");
    const result = document.getElementById("result");

    function findMax() {
        if (num1.value && num2.value && num3.value) {
            result.textContent = Math.max(
                Number(num1.value),
                Number(num2.value),
                Number(num3.value)
            );
        }
    }

    num1.addEventListener("input", findMax);
    num2.addEventListener("input", findMax);
    num3.addEventListener("input", findMax);


    let scientists = [
        ["Albert", "Einstein", 1879, 1955],
        ["Marie", "Curie", 1867, 1934],
        ["Isaac", "Newton", 1643, 1727],
        ["Charles", "Darwin", 1809, 1882],
        ["Nikola", "Tesla", 1856, 1943],
        ["Galileo", "Galilei", 1564, 1642],
        ["Louis", "Pasteur", 1822, 1895],
        ["Gregor", "Mendel", 1822, 1884],
        ["Michael", "Faraday", 1791, 1867],
        ["James", "Maxwell", 1831, 1879],
        ["Ada", "Lovelace", 1815, 1852],
        ["Alexander", "Fleming", 1881, 1955]
    ];

    const grid = document.getElementById("scientistGrid");

    function show(list) {
        grid.innerHTML = list.map(s =>
            `<div class="scientist-card">${s[0]} ${s[1]}<br>${s[2]}-${s[3]}</div>`
        ).join("");
    }

    show(scientists);

    document.getElementById("born19").onclick = () =>
        show(scientists.filter(s => s[2] >= 1800 && s[2] < 1900));

    document.getElementById("einstein").onclick = () =>
        show(scientists.filter(s => s[1] === "Einstein"));

    document.getElementById("alphabet").onclick = () =>
        show([...scientists].sort((a, b) => a[1].localeCompare(b[1])));

    document.getElementById("c").onclick = () =>
        show(scientists.filter(s => s[1].startsWith("C")));

    document.getElementById("age").onclick = () =>
        show([...scientists].sort((a, b) => (a[3]-a[2]) - (b[3]-b[2])));

    document.getElementById("removeA").onclick = () => {
        scientists = scientists.filter(s => !s[0].startsWith("A"));
        show(scientists);
    };

    document.getElementById("latest").onclick = () =>
        show([scientists.reduce((a, b) => a[2] > b[2] ? a : b)]);

    document.getElementById("longest").onclick = () => {
        let sorted = [...scientists].sort((a, b) =>
            (a[3]-a[2]) - (b[3]-b[2])
        );
        show([sorted[0], sorted[sorted.length - 1]]);
    };

    document.getElementById("same").onclick = () =>
        show(scientists.filter(s =>
            s[0][0].toLowerCase() === s[1][0].toLowerCase()
        ));
};

renderFindMax();