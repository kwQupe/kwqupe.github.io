var map = []
map[0] = ["__", "__", "__", "gm", "__", "bs", "__", "__", "__", "__", "__", "__", "__", "tl", "dm", "bl", "__", "__", "tl", "__"]
map[1] = ["tm", "__", "__", "__", "__", "__", "ds", "__", "__", "__", "__", "__", "dm", "dl", "__", "__", "__", "__", "__", "__"]
map[2] = ["__", "ds", "bm", "__", "__", "__", "__", "gs", "__", "__", "ds", "__", "__", "__", "__", "__", "__", "gs", "__", "__"]
map[3] = ["__", "__", "__", "__", "__", "ts", "__", "__", "__", "__", "__", "__", "bs", "__", "__", "__", "__", "__", "__", "dm"]
map[4] = ["__", "__", "__", "__", "dm", "__", "__", "bs", "__", "__", "__", "__", "__", "__", "__", "__", "__", "__", "__", "__"]
map[5] = ["__", "__", "__", "__", "__", "__", "__", "__", "__", "__", "__", "__", "__", "__", "tm", "ds", "__", "__", "__", "__"]
map[6] = ["gs", "__", "__", "ts", "__", "__", "__", "__", "tm", "__", "__", "__", "bm", "__", "__", "__", "__", "__", "bm", "__"]
map[7] = ["__", "ds", "__", "__", "__", "__", "__", "__", "dm", "__", "gs", "__", "__", "dm", "__", "__", "__", "__", "__", "__"]
map[8] = ["__", "__", "__", "__", "__", "__", "gl", "dl", "__", "__", "__", "__", "__", "__", "__", "gs", "__", "__", "__", "__"]
map[9] = ["__", "__", "__", "__", "__", "__", "dl", "dl", "bl", "__", "__", "__", "ts", "__", "__", "__", "__", "__", "__", "ts"]
map[10] = ["__", "bs", "__", "__", "__", "dm", "__", "tl", "__", "__", "__", "__", "__", "__", "__", "__", "__", "__", "__", "__"]
map[11] = ["__", "__", "__", "__", "gm", "__", "__", "__", "__", "__", "__", "__", "__", "__", "__", "bm", "dl", "dm", "__", "__"]
map[12] = ["__", "tm", "ds", "__", "__", "__", "__", "__", "__", "__", "dl", "gm", "__", "__", "__", "__", "__", "__", "gm", "__"]
map[13] = ["__", "__", "__", "__", "__", "__", "__", "__", "__", "__", "dm", "__", "bs", "__", "__", "__", "__", "__", "__", "__"]
map[14] = ["__", "__", "__", "__", "__", "bs", "__", "__", "__", "__", "__", "__", "__", "__", "dl", "tm", "__", "__", "__", "__"]
map[15] = ["__", "gm", "dm", "__", "__", "__", "__", "__", "__", "__", "tm", "__", "__", "__", "dl", "__", "__", "__", "__", "__"]
map[16] = ["__", "__", "__", "__", "dm", "tm", "__", "gm", "__", "dm", "__", "__", "__", "__", "dm", "__", "mg", "__", "__", "__"]
map[17] = ["__", "__", "__", "__", "__", "__", "__", "__", "dm", "dl", "bm", "__", "__", "__", "__", "__", "__", "dl", "__", "__"]
map[18] = ["__", "bl", "__", "dl", "gl", "__", "__", "__", "__", "__", "__", "__", "__", "dl", "__", "__", "__", "__", "__", "__"]
map[19] = ["__", "dl", "__", "__", "__", "__", "__", "__", "tl", "__", "__", "__", "dm", "gl", "__", "__", "__", "__", "__", "gm"]

var sensorMap = []
sensorMap[0] = ["mg", 200, "cam", "Missionsziel", "Sternenkonstellation fotografieren", "Missionsziel", "extrem"]
sensorMap[1] = ["ds", -20, "avo", "Großer Stein", "Umfahren", "Gefahr", "mittel"]
sensorMap[2] = ["dm", -40, "avo", "Tiefer Krater", "Umfahren", "Gefahr", "hoch"]
sensorMap[3] = ["dl", -120, "avo", "Treibsand", "Umfahren", "Gefahr", "sehr hoch"]
sensorMap[4] = ["bs", 10, "sho", "Unterirdisches Wasservorkommen", "Nach Wasser graben", "Biologie", "wenig"]
sensorMap[5] = ["bm", 20, "arm", "Pflanze", "Pflanze aufsammeln", "Biologie", "mittel"]
sensorMap[6] = ["bl", 60, "cam", "Alien-Abdrücke", "Alien-Abdrücke fotografieren", "Biologie", "hoch"]
sensorMap[7] = ["gs", 10, "mes", "Rotsand-Gelände", "Rotsand-Gelände vermessen", "Geologie", "wenig"]
sensorMap[8] = ["gm", 20, "sho", "Torf-Ebene", "Bodenanalyse einer Torf-Ebene", "Geologie", "mittel"]
sensorMap[9] = ["gl", 60, "arm", "Edelsteine", "Sammeln von Edelsteinen", "Geologie", "hoch"]
sensorMap[10] = ["ts", 10, "arm", "Kleine Trümmer", "Aufsammeln kleiner Trümmer", "Raumfahrtforschung", "wenig"]
sensorMap[11] = ["tm", 20, "cam", "Trümmerfeld", "Dokumentieren von Absturz-Mustern", "Raumfahrtforschung", "mittel"]
sensorMap[12] = ["tl", 60, "mes", "Satelliten-Absturzstelle", "Scan der Satelliten-Absturzstelle", "Raumfahrtforschung", "hoch"]


var currentLoc = localStorage.getItem("currentLoc") || "C05"
var currentPoints = localStorage.getItem("currentPoints") || 0
var verlauf = localStorage.getItem("verlauf") || "Start der Expedition<br>----"
var collected = localStorage.getItem("collected") || ""

window.onload = function(){
    document.getElementById('currentLoc').innerHTML = currentLoc
    document.getElementById('currentPoints').innerHTML = parseInt(currentPoints)
    if(verlauf[verlauf.length - 2] === "-"){
        verlauf = verlauf + "<br>Initialer Scan-Code: " + generateCode("05", "C")
        localStorage.setItem("verlauf", verlauf)
    }
    document.getElementById('verlauf').innerHTML = verlauf
}

// Helping Methods
function getRandChar() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}

function interpretLetter(letter){
    return letter.charCodeAt(0) - 65
}

function interpretNum(digit1, digit2){
    return (parseInt(digit1) * 10 + parseInt(digit2) - 1)
}

function getFieldFromCoords(x, y){
    var result = String.fromCharCode(y + 65)
    x = x + 1
    if (x < 10){
        result = result + "0"
    }
    result = result + x
    return result
}

function clearStorage(){
    localStorage.clear()
}

function addToHistory(text){
    verlauf = verlauf + text
    localStorage.setItem("verlauf", verlauf)
    document.getElementById('verlauf').innerHTML = verlauf
}

// All about Drive and Code generation
function generateCode(lineOut, colOut){
    var code = getRandChar() + lineOut[0] + colOut + getRandChar() + lineOut[1] + getRandChar()
    document.getElementById('codeOut').innerHTML = code
    return code
}

function setLine(line){
    document.getElementById('lineOut').innerHTML = line
}

function setCol(col){
    document.getElementById('colOut').innerHTML = col
}

function drive(current, target){
    var currentY = interpretLetter(current[0])
    var currentX = interpretNum(current[1], current[2])
    var targetY = interpretLetter(target[0])
    var targetX = interpretNum(target[1], target[2])
    var toggle = true

    var path = current

    while (currentX != targetX || currentY != targetY){
        if(toggle){
            if (currentX != targetX){
                if(currentX < targetX){
                    currentX = currentX + 1
                }
                if(currentX > targetX){
                    currentX = currentX - 1
                }
            }
            if (currentY != targetY){
                toggle = false
            }
        } else {
            if (currentY != targetY){
                if(currentY < targetY){
                    currentY = currentY + 1
                }
                if(currentY > targetY){
                    currentY = currentY - 1
                }
            }
            if (currentX != targetX){
                toggle = true
            }
        }
        checkForDanger(currentX, currentY)
        path = path + " - " + getFieldFromCoords(currentX, currentY)
        document.getElementById('pathOut').innerHTML = path
    }
}

function driveAndGenCode(){
    var lineOut = document.getElementById('lineOut').innerHTML
    var colOut = document.getElementById('colOut').innerHTML
    var current = document.getElementById('currentLoc').innerHTML
    var target = colOut + lineOut
    if(lineOut === "-" || colOut === "-"){
        code = "Fehler! Bitte Zielwerte angeben"
        document.getElementById('codeOut').innerHTML = code
        document.getElementById('pathOut').innerHTML = code
        return
    }

    generateCode(lineOut, colOut)
    drive(current, target)
    document.getElementById('currentLoc').innerHTML = target
    currentLoc = target
    localStorage.setItem("currentLoc", target)

    addToHistory("<br>- Fahrt von " + current + " nach " + target + " abgeschlossen")
}

function checkForDanger(x, y){
    var content = map[x][y]
    // For Tests:
    //addToHistory("<br>Content: " + content + " auf " + getFieldFromCoords(x, y) + "[" + x + "," + y + "]")
    var text = ""
    if(content === "ds"){
        currentPoints = parseInt(currentPoints) - 20
        text = "<br>- Schaden auf " + getFieldFromCoords(x, y) + ": -20 Punkte"
    } else if (content === "dm"){
        currentPoints = parseInt(currentPoints) - 40
        text = "<br>- Schaden auf " + getFieldFromCoords(x, y) + ": -40 Punkte"
    } else if (content === "dl"){
        currentPoints = parseInt(currentPoints) - 120
        text = "<br>- Schaden auf " + getFieldFromCoords(x, y) + ": -120 Punkte"
    }

    if(text !== ""){
        localStorage.setItem("currentPoints", parseInt(currentPoints))
        document.getElementById('currentPoints').innerHTML = parseInt(currentPoints)
        addToHistory(text)
    }
}

// Sensorik
function makeTest(sensor){
    var current = document.getElementById('currentLoc').innerHTML
    var currentY = interpretLetter(current[0])
    var currentX = interpretNum(current[1], current[2])
    var content = map[currentX][currentY]
    var text = ""
    var wasFalse = true

    sensorMap.forEach(element => {
        if(element[2] === sensor && element[0] === content && !collected.includes(current)){
            currentPoints = parseInt(currentPoints) + parseInt(element[1])
            text = "<br>- Erkenntnis durch " + element[5] + " auf " + current + ": " + element[1] + " Punkte"
            wasFalse = false
            collected = collected + current + "-"
            localStorage.setItem("collected", collected)
        }
    });

    if(wasFalse){
        currentPoints = parseInt(currentPoints) - 10
        text = "<br>- Strafe durch falschen Einsatz auf " + current + ": -10 Punkte"
    }

    localStorage.setItem("currentPoints", parseInt(currentPoints))
    document.getElementById('currentPoints').innerHTML = parseInt(currentPoints)
    addToHistory(text)
}

// Scans
function interpretCode(){
    var input = document.getElementById('inp').value
    var current = input[2] + input[1] + input[4]
    document.getElementById('pos').innerHTML = current
    var role = determineRole()

    var result = ""
    var npos = ""
    var x = interpretNum(input[1], input[4])
    var y = interpretLetter(input[2])
    var nx = 0
    var ny = 0
    var inhalt = ""

    result = result + "Scan-Ergebnis auf " + current + ":<br>"

    for (let dx = -2; dx <= 2; dx++) {
        nx = x + dx
        if(checkBounds(nx)){
            for (let dy = -2; dy <= 2; dy++) {
                ny = y + dy
                if(checkBounds(ny)){
                    inhalt = map[nx][ny]
                    if (shouldBeVisible(role, inhalt)){
                        npos = getFieldFromCoords(nx, ny)
                        result = result + "- " + npos + ": " + contentToRes(inhalt) + "<br>"
                        document.getElementById('result').innerHTML = result
                    }
                }
            }
        }
    }

    document.getElementById('result').innerHTML = result
}

function checkBounds(i){
    if(i >= 0 && i <=19){
        return true
    } else {
        return false
    }
}

function shouldBeVisible(role, mapContent){
    var lane = -1
    for (let index = 0; index < sensorMap.length; index++) {
        if(sensorMap[index][0] === mapContent){
            lane = index
        }
    }

    if(lane == -1){
        return false
    } else if(lane == 0){
        return true
    } else {
        if (role === sensorMap[lane][5]){
            return true
        }
    }
    return false
}

function determineRole(){
    var role = ""
    var roleID = document.getElementById('roleID').innerHTML

    if(roleID === "Terra-Scan"){
        return sensorMap[1][5]
    } else if (roleID === "Biologisches Radar"){
        return sensorMap[4][5]
    } else if (roleID === "Geologisches Sonar"){
        return sensorMap[7][5]
    }else if (roleID === "Schutt Visualisierer"){
        return sensorMap[10][5]
    }
    return role
}

function contentToRes(inhalt){
    for (let index = 0; index < sensorMap.length; index++) {
        if(sensorMap[index][0] === inhalt){
            return sensorMap[index][3]
        }
    }
    return inhalt
}