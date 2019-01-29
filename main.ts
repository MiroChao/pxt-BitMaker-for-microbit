enum GPIOs {
    //% block="P0"
    P0,
    //% block="P1"
    P1,

}
/**
 * Provides access to BitMaker micro:bit functionality.
 */
//% color=190 icon="\uf126" block="BitMaker"
namespace BitMaker {

    //% block= "digital pin $pin|is $high"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=60
    //% pin.fieldOptions.columns=1
    //% pin.fieldOptions.tooltips="false"
    export function highLow(high: boolean): boolean {
        return high;
    }
}