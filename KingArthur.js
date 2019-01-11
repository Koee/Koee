
function King() {
    let realHP1 = "";
    let realHP2 = "";
    let p = 0;
    const obj1 = {};
    const obj2 = {};

    obj1.baseHP1 = parseInt(prompt("baseHP1 :"));
    obj1.wq1 = parseInt(prompt("wq1 :"));
    obj2.baseHP2 = parseInt(prompt("baseHP2 :"));
    obj2.wq2 = parseInt(prompt("wq2 :"));
    let Ground = parseInt(prompt("Ground :"));


    if (obj1.baseHP1 < 99 || obj1.baseHP1 > 999) {
        console.log("nope 1");
    }
    if (1 > obj2.baseHP2 || obj2.baseHP2 > 888) {
        console.log("nope 2");
    }
    if ([0, 1, 2, 3].indexOf(Number(obj1.wq1)) === -1 || [0, 1, 2, 3].indexOf(Number(obj2.wq2)) === -1) {
        console.log("nope 3")
    }

    if (obj1.baseHP1 === 999) {
        p = 1;
        console.log("how to win ? when enemy is Boss Arthur: " + p);
        return p;
    }
    if (obj2.baseHP2 == 888) {
        p = 0;
        console.log("I am a Cerdic :" + p);
        return p;
    }
    // function isCheckPaladin() {
    function isCheckHP1() {
        let flag = obj1.baseHP1;
        if (obj1.baseHP1 < 2) {
            flag = false;
        } else {
            for (let i = 2; i < obj1.baseHP1 - 1; i++) {
                if (obj1.baseHP1 % i == 0)
                    flag = false;
            }
        }
        return flag;
    };
    console.log(isCheckHP1())
    function isCheckHP2() {
        let flag = obj2.baseHP2;
        if (obj2.baseHP2 < 2) {
            flag = false;
        } else {
            for (let i = 2; i < obj2.baseHP2 - 1; i++) {
                if (obj2.baseHP2 % i == 0)
                    flag = false;
            }
        }
        return flag;
    };
    console.log(isCheckHP2())
    if (isCheckHP1(obj1.baseHP1) == obj1.baseHP1 || isCheckHP2(obj2.baseHP2) == obj2.baseHP2) {

        if (isCheckHP1(obj1.baseHP1) > obj2.baseHP2) {
            p = 0.99;
            console.log("Paladin across Arthur win 1:" + p.toFixed(2))
        } else if (isCheckHP1(obj1.baseHP1) > isCheckHP2(obj2.baseHP2)) {
            p = 0.99;
            console.log("Paladin across Arthur win 2:" + p.toFixed(2));
        } else if (isCheckHP1(obj1.baseHP1) > isCheckHP2(obj2.baseHP2)) {
            p = 0.50;
            console.log("Paladin Draw :" + p.toFixed(2));
        }
        else if (isCheckHP1(obj1.baseHP1) == obj2.baseHP2) {
            p = 0.50;
            console.log("Paladin Draw :" + p.toFixed(2));
        } else if (isCheckHP1(obj1.baseHP1) < obj2.baseHP2) {
            p = 0.01;
            console.log("Paladin across Saxon win 1:" + p.toFixed(2));
        } else if (isCheckHP1(obj1.baseHP1) < isCheckHP2(obj2.baseHP2)) {
            p = 0.01;
            console.log("Paladin across Saxon win 2:" + p.toFixed(2));
        }
        return 0;
    }

    // }
    //  if (isCheckHP1(obj1.baseHP1) == 1 || isCheckHP2(obj2.baseHP2) == 1) {
    //     isCheckPaladin();
    // }
    if (obj1.baseHP1 == Ground) {
        realHP1 = obj1.baseHP1 * 1.1;
        if (realHP1 >= 999) {
            p = (999 - obj2.baseHP2 + 999) / 2000;
            console.log("% Win by like  :" + p.toFixed(2));
        } else if (obj1.wq1 == 0 && realHP1 < 999) {
            p = ((realHP1 / 10) - obj2.baseHP2 + 999) / 2000;
            console.log("% Win by like  :" + p.toFixed(2));
        } else if (obj1.wq1 == 3 && realHP1 < 999) {
            realHP1 *= 2;
            // if (realHP1 < 999) {
            //     p = (realHP1 - obj2.baseHP2 + 999) / 2000;
            //     console.log("% Win in like 3:" + p.toFixed(2));
            // } 
            if (realHP1 >= 999) {
                p = (999 - obj2.baseHP2 + 999) / 2000;
                console.log("% Win by like :" + p.toFixed(2));
            } else if (obj1.wq1 == 3 && obj2.wq2 == 0) {
                p = (realHP1 - (obj2.baseHP2 / 10) + 999) / 2000;
                console.log("% Win by like :" + p.toFixed(2));
            } else if (obj1.wq1 == 3 && obj2.wq2 == 1) {
                p = (realHP1 - obj2.baseHP2 + 999) / 2000;
                console.log("% Win by like  :" + p.toFixed(2));
            }

        } else if (obj1.wq1 == 1 && obj2.wq2 == 0) {
            p = (realHP1 - (obj2.baseHP2 / 10) + 999) / 2000;
            console.log("% Win by like:" + p.toFixed(2));
        } else if (obj1.wq1 == 1) {
            p = (realHP1 - obj2.baseHP2 + 999) / 2000;
            console.log("% Win by like:" + p.toFixed(2));
        }
        return p;
    } else if (obj2.baseHP2 == Ground) {
        realHP2 = obj2.baseHP2 * 1.1;
        if (realHP2 >= 888) {
            p = (obj1.baseHP1 - 888 + 999) / 2000;
            console.log("% Win by like: " + p.toFixed(2));
        } else if (obj2.wq2 == 0 && obj1.wq1 == 1) {
            p = (obj1.baseHP1 - (realHP2 / 10) + 999) / 2000;
            console.log("% Win by like :" + p.toFixed(2));
        } else if (obj2.wq2 == 1 && obj1.wq1 == 1) {
            p = (obj1.baseHP1 - realHP2 + 999) / 2000;
            console.log("% Win by like: " + p.toFixed(2));
        } else if (obj1.wq1 == 2) {

        } else if (obj1.wq1 == 3) {
            realHP1 = obj1.baseHP1 * 2;
            if (realHP1 >= 999 && obj2.wq2 == 1 || obj2.wq2 == 2) {
                p = (999 - realHP2 + 999) / 2000;
                console.log("% win by like:  " + p.toFixed(2));
            }
            else if (realHP1 >= 999 && obj2.wq2 == 0) {
                p = (999 - (realHP2 / 10) + 999) / 2000;
                console.log("% win by like :  ");
            } else if (realHP1 < 999 && obj2.wq2 == 1 || obj2.wq2 == 2) {
                p = (realHP1 - realHP2 + 999) / 2000;
                console.log("% win by like : " + p.toFixed(2));
            } else if (realHP1 < 999 && obj2.wq2 == 0) {
                p = (realHP1 - (realHP2 / 10) + 999) / 2000;
                console.log("% win by like : " + p.toFixed(2))
            }
        }
        return p;
    }



    switch (obj1.wq1) {
        case 0:
            if (obj2.wq2 == 0 && obj1.baseHP1 == Ground || obj2.baseHP2 == Ground) {
                p = ((obj1.baseHP1 / 10) - (obj2.baseHP2 / 10) + 999) / 2000;
                console.log("% Win :" + p.toFixed(2));
                break;
            }
            else if (obj2.wq2 == 1) {
                p = ((obj1.baseHP1 / 10) - obj2.baseHP2 + 999) / 2000;
                console.log("% Win :" + p.toFixed(2));
                break;
            }
            else if (obj2.wq2 == 2) {
                if (obj1.baseHP1 > obj2.baseHP2) {
                    p = 0.5;
                    console.log("Draw :" + p.toFixed(2));
                    return p;
                } else {
                    p = ((obj1.baseHP1 / 10) - obj2.baseHP2 + 999) / 2000;
                    console.log("% Win :" + p.toFixed(2));
                    break;
                }
            }
            else if (obj2.wq2 == 3) {
                p = ((obj1.baseHP1 / 10) - obj2.baseHP2 + 999) / 2000;
                console.log("% Win :" + p.toFixed(2));
                break;
            }
            break;
        case 1:
            if (obj2.wq2 == 0) {
                p = (obj1.baseHP1 - (obj2.baseHP2 / 10) + 999) / 2000;
                console.log("% Win :" + p.toFixed(2))
                break;
            }
            else if (obj2.wq2 == 1) {
                p = (obj1.baseHP1 - obj2.baseHP2 + 999) / 2000;
                console.log("% Win :" + p.toFixed(2))
                break;
            }
            else if (obj2.wq2 == 2) {
                if (obj1.baseHP1 > obj2.baseHP2) {
                    p = 0.5;
                    console.log("Draw :" + p.toFixed(2));
                    return p;
                } else {
                    p = (obj1.baseHP1 - obj2.baseHP2 + 999) / 2000;
                    console.log("% Win :" + p.toFixed(2));
                    break;
                }
            }
            else if (obj2.wq2 == 3) {
                p = (obj1.baseHP1 - obj2.baseHP2 + 999) / 2000;
                console.log("% Win :" + p.toFixed(2));
                break;
            }
            break;
        case 2:
            if (obj2.wq2 == 0) {
                if (obj1.baseHP1 < obj2.baseHP2) {
                    p = 0.50;
                    console.log("Draw :" + p.toFixed(2));
                    return p;
                } else {
                    p = (obj1.baseHP1 - (obj2.baseHP2 / 10) + 999) / 2000;
                    console.log("% Win :" + p.toFixed(2));
                    break;
                }
            }
            else if (obj2.wq2 == 1) {
                if (obj1.baseHP1 < obj2.baseHP2) {
                    p = 0.50;
                    console.log("Draw :" + p.toFixed(2));
                    return p;
                } else {
                    p = (obj1.baseHP1 - obj2.baseHP2 + 999) / 2000;
                    console.log("% Win :" + p.toFixed(2));
                    break;
                }
            }
            else if (obj2.wq2 == 2) {
                p = 0.50;
                console.log("Draw :" + p.toFixed(2));
                break;
            }
            else if (obj2.wq2 == 3) {
                if (obj1.baseHP1 < obj2.baseHP2) {
                    p = 0.50;
                    console.log("Draw :" + p.toFixed(2));
                    return p;
                } else {
                    p = (obj1.baseHP1 - (obj2.baseHP2 / 10) + 999) / 2000;
                    console.log("% Win :" + p.toFixed(2));
                    break;
                }
            }
            break;
        case 3:
            if (obj2.wq2 == 0) {
                realHP1 = obj1.baseHP1 * 2;
                if (realHP1 > 999) {
                    realHP1 = 999;
                    p = (realHP1 - (obj2.baseHP2 / 10) + 999) / 2000;
                    console.log("% Win :" + p.toFixed(2));
                } else {
                    p = (realHP1 - (obj2.baseHP2 / 10) + 999) / 2000;
                    console.log("% Win :" + p.toFixed(2))
                }
                break;
            }
            else if (obj2.wq2 == 1) {
                realHP1 = obj1.baseHP1 * 2;
                if (realHP1 > 999) {
                    realHP1 = 999;
                    p = (realHP1 - obj2.baseHP2 + 999) / 2000;
                    console.log("% Win :" + p.toFixed(2));
                } else {
                    p = (realHP1 - obj2.baseHP2 + 999) / 2000;
                    console.log("% Win :" + p.toFixed(2))
                }
                break;
            }
            else if (obj2.wq2 == 2) {
                realHP1 = obj1.baseHP1 * 2;
                if (realHP1 >= 999) {
                    realHP1 = 999;
                    p = (realHP1 - obj2.baseHP2 + 999) / 2000;
                    console.log("% Win :" + p.toFixed(2));
                } else {
                    p = (realHP1 - obj2.baseHP2 + 999) / 2000;
                    console.log("% Win  :" + p.toFixed(2))
                }
                break;
            }
            else if (obj2.wq2 == 3) {
                realHP1 = obj1.baseHP1 * 2;
                if (realHP1 >= 999) {
                    realHP1 = 999;
                    p = (realHP1 - obj2.baseHP2 + 999) / 2000;
                    console.log("% Win 1:" + p.toFixed(2));
                } else {
                    p = (realHP1 - obj2.baseHP2 + 999) / 2000;
                    console.log("% Win 2 :" + p.toFixed(2))
                }
                break;
            }
            break;

    }

}
King()