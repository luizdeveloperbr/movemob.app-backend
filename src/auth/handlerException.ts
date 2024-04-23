import { NotFoundException, UnauthorizedException } from "@nestjs/common"
export default function handlerException(userinfo){
    const listErrors = {
        404: () => {throw new NotFoundException()},
        401: () => {throw new UnauthorizedException()},

    }
    const throwError = listErrors[userinfo]
    throwError()
}