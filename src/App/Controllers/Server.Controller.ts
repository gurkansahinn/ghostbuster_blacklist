import { Request, Response } from "express";
import { prisma } from "../Services/prismaClient";

import { getServerInfo } from '../Services/sampQuery';
import { serverType } from '../Enum/serverTypes';

export async function serverList(req: Request, res: Response) {
    const serverResponse = await prisma.server.findMany();

    if (!serverResponse.length) {
        const err = {
            message: "GhostBuster Blacklist hizmetini kullanan herhangi bir sunucu bulunamadı."
        }

        console.log(err);
        res.status(404).send(err);
        return;
    }

    const servers: any = getServersGameData(serverResponse);

    Promise.all(servers)
        .then((server) => {
            console.log(server);
            res.status(200).send(server);
        })
        .catch((error) => {
            console.log(error.message);
            res.status(404).send(error);
        });
}

function getServersGameData(serverResponse: any) {
    const servers: any = [];
    servers.push(
        new Promise((resolve, reject) => {
            serverResponse.forEach((server: any) => {
                if (server.type == serverType.SAMP) {
                    getServerInfo(server.ip, server.port, (error: boolean, response: any) => {
                        if (error)
                            reject({ message: "[SAMP] " + server.name + " isimli sunucu ile iletişim kurulamadığı için veriler çekilemedi.", });

                        resolve({
                            serverSqlData: serverResponse,
                            serverGameData: response
                        });
                    });
                }
            });
        }));

    return servers;
}