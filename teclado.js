const d = document;
// export function shortcuts(e){ 
// console.log(e)
// console.log(e.type)
// console.log(e.key)
// console.log(e.keyCode)
// }
let x = 0,
y=0;
export function moveBall(e,ball,stage){
    const $ball=d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall= $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect()
    console.log(e.keyCode)
    console.log(e.key)
    // const move = (direction) =>{}

    switch(e.keyCode){
        case 37:
           if(limitsBall.left > limitsStage.left){
            e.preventDefault()
            x--;
           } 
        break;
        case 38:
            if(limitsBall.top > limitsStage.top){
                e.preventDefault()
                y--};
        break;
        case 39:
            if(limitsBall.right < limitsStage.right) {
                e.preventDefault()
                x++;
            } 
        break;
        case 40:
           
            //move("down")
            if(limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault()
                y++;
            } 
            break;

        default:
            break;
    }
    $ball.style.transform=`translate(${x*10}px,${y*10}px)`
}