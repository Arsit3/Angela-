import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

import axios from 'axios'

import request from '../../lib/request'

import { MessageType } from '@adiwajshing/baileys'

// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'rules',

            description: `Get rules list`,

            aliases: ['rules'],

            category: 'general',

            usage: `${client.config.prefix}rules`,

            baseXp: 50

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        // fetch result of https://waifu.pics/api/sfw/waifu from the API using axios

        return void M.reply( await request.buffer(`https://i.pinimg.com/564x/96/eb/e1/96ebe1427aa8505cf56b110a620503a3.jpg`),

        MessageType.image,

                    undefined,

                    undefined,

                    `_*----🎀[Angela🚀 Rules]🎀----*_\n\n*Don't ask for the Bot Script it's illegal🚫\n*>>>* Use &support to get the Official group link in your DM\n*--->*  If you want to chat with Star you can use *&tada/chat (your text)* both are different ai chat bots\n*--->* If you want to add Star Chan in your group the contact the owner by *!owner/!mods* \n*--->* Dont use wrong command, use the command given in the *help list* \n*--->* Dont spam the bot with commands if the bot is not responding, its means the bot maybe offline or facing Internet issues. \n*--->* Dont DM the Bot \n\nIf You Don't follow the Rules You will be Banned 🚫 soon.`,

                    undefined

                ).catch((reason: any) =>

            M.reply(`An error occurred. Please try again later.`))

    }

}
