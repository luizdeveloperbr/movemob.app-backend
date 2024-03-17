import { Controller, Get, HttpException } from "@nestjs/common";

@Controller()
export class AppController {
   
    @Get('health')
    healthStatus(){
        throw new HttpException({status: "ok"}, 200)
    }
}