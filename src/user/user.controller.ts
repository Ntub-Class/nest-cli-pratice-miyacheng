import { Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getOne() {
        return 'Get';
    }

    @Get(':id')
    getWithParamObject(@Param() param) {
        return param;
    }

    @Post()
    postHello(): string {
        return 'Post';
    }

    @Put()
    putHello(): string {
        return 'Put';
    }

    @Put(':id')
    putWithParamObject(@Param() param) {
        return param;
    }

    @Delete()
    deleteHello(): string {
        return 'Delete';
    }

    @Delete(':id')
    deleteWithParamObject(@Param() param) {
        return param;
    }
}
