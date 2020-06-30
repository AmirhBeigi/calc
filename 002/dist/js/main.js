const generate = document.getElementById('generate');
generate.addEventListener('click', () => {
    length = 16;
    let symbols = false;
    let numbers = false;
    let characters = false;

    if (document.getElementById('length_8').checked) {
        length = 8;
    } else if (document.getElementById('length_16').checked) {
        length = 16;
    } else {
        length = 32;
    }
    if (document.getElementById('symbols').checked) {
        symbols = true;
    }
    if (document.getElementById('numbers').checked) {
        numbers = true;
    }
    if (document.getElementById('characters').checked) {
        characters = true;
    }
    var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var character = "";
    var crunch = true;
    while (password.length < length) {
        entity1 = Math.ceil(string.length * Math.random() * Math.random());
        entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
        hold = string.charAt(entity1);
        hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
        character += hold;
        if (numbers) {
            character += numeric.charAt(entity2);
        }
        if (symbols) {
            character += punctuation.charAt(entity3);
        }
        password = character;
    }
    password = password.split('').sort(function () {
        return 0.5 - Math.random()
    }).join('');
    password = password.substr(0, length);
    
    document.getElementById('password').innerHTML = password;

})