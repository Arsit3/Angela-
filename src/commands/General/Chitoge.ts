/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "chitoge",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}chitoge`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://media.tenor.com/videos/80f557139bc3a0857f6a705da6990fdc/mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `*Angela🚀*\n\n🍃🍂 *Description: A WhatsApp Bot  Rich In Anime And Botto Features Modified By Killercrosx.*\n\n🌐 *URL: https://github.com/Killercrosx/Angela* \n\n 📒 *Guide: https://github.com/ShineiIchijo/Chitoge-Guides*\n\n`,
			}
		);
	};
}
