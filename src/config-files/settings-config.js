export const CHARACTERS_PER_PLAYER = "CHARACTERS_PER_PLAYER"
export const SECONDS_PER_TURN = "SECONDS_PER_TURN"


const SETTINGS = [
    {
        setting_id: CHARACTERS_PER_PLAYER, 
        minValue: 5, 
        maxValue: 10, 
        stepValue: 1, 
        defaultValue: 5, 
        textKey: "Characters per player" },
    {
        setting_id: SECONDS_PER_TURN, 
        minValue: 20, 
        maxValue: 60, 
        stepValue: 5, 
        defaultValue: 30, 
        textKey: "Seconds per turn" }
]

export default SETTINGS