import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
    
    @Get('/')
    default(){
        return "Im from APp Module..."
    }
}
