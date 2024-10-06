
export function resFunc(res,code,status ,mesg,obj){
    res.status(code).send({
        success: status,
        msg: mesg,
        data: obj
    })
}

export function errFunc(res, code ,mesg,obj){
    res.status(code).send({
        success: false,
        msg: mesg,
        data: obj
    })
}

export function catchErrFunc(res,obj){
    res.status(500).send({
        success: false,
        msg: "Server Unreachable",
        data: obj
    })
}