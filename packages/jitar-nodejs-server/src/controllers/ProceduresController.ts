
import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import { Logger } from 'tslog';

import { LocalGateway, LocalNode, Proxy } from 'jitar';

@Controller('procedures')
export default class ProceduresController
{
    #runtime: LocalGateway | LocalNode | Proxy;
    #logger: Logger;

    constructor(runtime: LocalGateway | LocalNode | Proxy, logger: Logger)
    {
        this.#runtime = runtime;
        this.#logger = logger;
    }

    @Get()
    async getProcedureNames(request: Request, response: Response): Promise<Response>
    {
        const names = this.#runtime.getProcedureNames();

        this.#logger.info('Got procedure names');

        return response.status(200).send(names);
    }
}
