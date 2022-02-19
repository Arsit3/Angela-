import { MessageType, Mimetype } from '@adiwajshing/baileys'

import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'support',

            aliases: ['group','gc'],

            description: 'Gets the support group links',

            category: 'general',

            usage: `${client.config.prefix}Support`,

            baseXp: 10

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        (await this.client.sendMessage(

        M.sender.jid,

                `         

*📮𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗚𝗿𝗼𝘂𝗽 𝗟𝗶𝗻𝗸*

https://chat.whatsapp.com/IvGNhMR6DclEDK0WY9St3r `,

           MessageType.text

        ))

        const n = [

            './assets/Rin/rin-2.mp4'

        ]

        let rin = n[Math.floor(Math.random() * n.length)]

        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,

            mimetype: Mimetype.gif,

            caption: `Regarding this, I have sent you a personal message in your DM📪\n` }

        )

        }

}
