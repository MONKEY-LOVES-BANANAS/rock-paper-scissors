function Update_Score () {
    OLED.clear()
    OLED.writeStringNewLine("\"Player A\"" + PA)
    OLED.writeStringNewLine("\"Player B\"" + PB)
    OLED.writeStringNewLine("\"Ties\"" + Ties)
    OLED.writeStringNewLine("\"Rounds\"" + rounds)
}
let rounds = 0
let Ties = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
PA = 0
PB = 0
Ties = 0
rounds = 0
OLED.writeStringNewLine("\"WOULD YOU LIKE TO PLAY A GAME WITH ME!?")
basic.pause(2000)
Update_Score()
