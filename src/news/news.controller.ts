import { Controller, Post, Get, Put, Delete, Param } from '@nestjs/common';

@Controller('news')
export class NewsController {
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
