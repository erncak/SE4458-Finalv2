import {Injectable, OnModuleInit} from '@nestjs/common';
import {ServiceBusClient} from "@azure/service-bus";
import * as mailJet from 'node-mailjet'

@Injectable()
export class AppService implements OnModuleInit {


    public connectionString = 'Endpoint=sb://finalse.servicebus.windows.net/;SharedAccessKeyName=connectionOne;SharedAccessKey=QxxRtqPuLuc7ODB9svc4Or1Xx/DxZMlsD+ASbJpJ86k=;EntityPath=finalqueue';
    public queueName = 'finalqueue';

    public serviceBusClient = new ServiceBusClient(this.connectionString);
    public receiver = this.serviceBusClient.createReceiver(this.queueName);

    public messages = [];


    async onModuleInit() {
        await this.receiveMessages()
        this.sendMail(this.messages);

    }

    getHello(): string {
        return 'Hello World!';
    }





    public async receiveMessages() {
        try {
            const messages = await this.receiver.receiveMessages(5);

            for (const message of messages) {

                this.messages.push(message.body)
            }
        } catch (error) {
        }
    }


    public sendMail(messages) {
        console.log(messages);

/*        const request = mailJet.post("send", {'version': 'v3.1'})
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": "erincak2@gmail.com",
                            "Name": "erinc"
                        },
                        "To": [
                            {
                                "Email": message.name,
                                "Name": "erinc"
                            }
                        ],
                        "Subject": "Greetings from Mailjet.",
                        "TextPart": "My first Mailjet email",
                        "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                        "CustomID": "AppGettingStartedTest"
                    }
                ]
            })
        request
            .then((result) => {
                console.log(result.body)
            })
            .catch((err) => {
                console.log(err.statusCode)
            })*/

    }

}
